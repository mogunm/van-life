import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"
import "./Login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        async function login() {
            const data = await loginUser(loginFormData)
            console.log(data)
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
            <h1>Sign in to your account</h1>
            <p>{location.state?.message}</p>
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
                <button>Log in</button>
            </form>
        </div>
    )

}