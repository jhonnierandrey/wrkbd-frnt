import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(email, password);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email</label>
            <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password</label>
            <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;