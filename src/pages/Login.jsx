import React, {useState} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"
import "./Login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("Submitting...")
        async function login() {
            try {
                const data = await loginUser(loginFormData)
                console.log(data)
                
            } catch(err) {
                setError(err)
            } finally {
                setStatus("idle")
            }
        }

        login()
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            <p>{location.state?.message}</p>
            <h1>Sign in to your account</h1>
            <p>{error?.message}</p>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "Submitting..."}>{status === "Submitting..." ? "Logging in..." : "Log in"}</button>
            </form>
        </div>
    )

}