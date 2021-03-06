import React , { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";

import { login } from "../../store/actions/auth.js";
import { useDispatch } from "react-redux";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("john.doe@gmail.com");
    const [password, setPassword] = useState("secret");

    function submitForm(e){
        e.preventDefault();
        // Once form submitted, dispatch the action of log in
        dispatch(login({email, password}, navigate));

        // AuthService.login({email, password}).then((res) => console.log(res));

        // axios.post('/login', {email, password})
        // .then(x => console.log("res", x))
        // .catch(err => {
        //     console.log('err', err) 
        // })
        // console.log({email, password});
    }

    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section">
                        <img src={loginImage} alt="login"></img>
                    </div>
                    <div id="form-section">
                        <h2>Welcome back</h2>
                        <form onSubmit={submitForm}>
                            <div className="input-field mb-1">
                                <input onChange={ e => {setEmail(e.target.value)}} value={email} required="required" type="text" placeholder="Email" />
                            </div>
                            <div className="input-field mb-2">
                                <input onChange={ e => {setPassword(e.target.value)}} value={password} required="required" type="password" placeholder="Password" />
                            </div>
                            <button>LOGIN</button>
                        </form>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Login;