import React , { useState, useEffect }from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"
import "./Vans.css"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const typeFilter = searchParams.get("type")


    useEffect(() => {
        async function loadVans(){
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    const vanFilter = typeFilter ? 
    vans.filter(van => van.type.toLowerCase() === typeFilter) :
    vans 
     // link component takes state prop value and passes it along to the next route we are linking to 
    const vanElements = vanFilter.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ query: `?${searchParams.toString()}`, type: typeFilter }} aria-label={`View details for ${van.name},  priced at $${van.price} per day`}>
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <p>{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // how to merge search params for multiple params without losing any when the page reloads 
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading){
        return <h1 aria-live="polite">Loading...</h1>
    }

    if (error){
        return <h1 aria-live="assertive">There was an error: {error.message} </h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                {
                typeFilter ? 
                <button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">Clear filter</button> : 
                null
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}