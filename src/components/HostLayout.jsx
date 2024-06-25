import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const styleFunc = ({ isActive }) => isActive ? activeStyles : null;

    return (
            <>
                <nav className="host-nav">
                    <NavLink to="." end style={styleFunc}>Dashboard</NavLink>
                    <NavLink to="/host/income" style={styleFunc} >Income</NavLink>
                    <NavLink to="/host/vans" style={styleFunc} >Vans</NavLink>
                    <NavLink to="/host/reviews" style={styleFunc} >Reviews</NavLink>
                </nav>
                <Outlet />
            </>
    )
}