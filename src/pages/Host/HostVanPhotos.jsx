import React from "react"
import { useOutletContext } from "react-router-dom"
import './HostVanPhotos.css'

export default function Photos(){
    const { currentVan } = useOutletContext()

    return <img src={currentVan.imageUrl} className="host-van-detail-image" />
}