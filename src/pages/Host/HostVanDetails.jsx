import React, {useEffect, useState} from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import { getHostVans } from "../../api"
import "./HostVanDetails.css"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const active = ({isActive}) => isActive ? activeStyles : null
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    // use end because it is matching the parent route since it is the index 
    // relative prop means that it goes back to the current path not the route so we are going back one level in our path structure
    
    return (
        <section>
        <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={active}>Details</NavLink>
                    <NavLink to="pricing" style={active}>Pricing</NavLink>
                    <NavLink to="photos" style={active}>Photos</NavLink>
                </nav>

                <Outlet context={{currentVan}}/>
            </div>
        </section>
    )
}
