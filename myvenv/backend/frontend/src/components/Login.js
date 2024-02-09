import React, { useState, useContext } from 'react';
import AuthContext from "../context/AuthContext";
import "../utils/css/login.css";



function Login() {
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email)
        console.log(password)

    }
    return(
        <div class="login">
            <div class="form">
                <h2>Bienvenido</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" autofocus/>
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Log in" class="submit"/>
        </form>
        </div>
        </div>
    );

}
export default Login;