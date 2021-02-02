import React, { useState } from 'react'

const LoginForm = () => {

    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(creds);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="email" placeholder="Email" onChange={handleChange} value={creds.email}/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={creds.password} />
            </div>
            <div>
                <button type="submit"> Submit </button>
            </div>
        </form>
    )
}

export default LoginForm
