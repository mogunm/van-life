import React, {useState, useEffect} from "react"
import { getVans } from "../../api"
import { useParams, useLocation, Link } from "react-router-dom"
import "./VanDetail.css"



export default function VanDetail(){ 
    const { id } = useParams()
    // this hook returns the current location object of the page https://reactrouter.com/en/main/hooks/use-location
    const location = useLocation()
    const [van, setVan] = useState(null)

    // re-run effect if the id of the parameter were to change possible feature for later 
    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    // fall back for if the search value comes back as null we would use this for our back button to keep track of what filters we had before clicking on a van 
    const query = location.state?.query || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link to={`..${query}`} relative="path" className="back-button">&larr; <span>Back to {type} vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <div className="van-detail-content">
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}