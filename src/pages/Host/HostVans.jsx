import React, { useEffect, useState }from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"
import "./HostVans.css"

export default function HostVans() {
    const [vans, setCurrentVans] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setCurrentVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    const hostVansEls = vans.map(van => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>$<b>{van.price}</b>/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}