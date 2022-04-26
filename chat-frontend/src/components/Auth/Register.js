import React , { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import registerImage from "../../assets/images/register.svg"
import './Auth.scss'

import { register } from "../../store/actions/auth.js";
import { useDispatch } from "react-redux";

function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Doe")
    const [email, setEmail] = useState("john.doe@gmail.com");
    const [password, setPassword] = useState("secret");
    const [gender, setGender] = useState("male")


    function submitForm(e){
        e.preventDefault();
        // Once form submitted, dispatch the action of log in
        dispatch(register({firstName, lastName, gender, email, password}, navigate));
    }

    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section">
                        <img src={registerImage} alt="login"></img>
                    </div>
                    <div id="form-section">
                        <h2>Welcome back</h2>
                        <form onSubmit={submitForm}>
                            <div className="input-field mb-1">
                                <input onChange={ e => {setFirstName(e.target.value)}} value={firstName} required="required" type="text" placeholder="First Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input onChange={ e => {setLastName(e.target.value)}} value={lastName} required="required" type="text" placeholder="Last Name" />
                            </div>
                            <div className="input-field mb-1">
                                <select onChange={ e => {setGender(e.target.value)}} value={gender} required="required" name="gender">
                                    <option value="" disabled>Please choose your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="input-field mb-1">
                                <input onChange={ e => {setEmail(e.target.value)}} value={email} required="required" type="text" placeholder="Email" />
                            </div>
                            <div className="input-field mb-2">
                                <input onChange={ e => {setPassword(e.target.value)}} value={password} required="required" type="password" splaceholder="Password" />
                            </div>
                            <button>REGISTER</button>
                        </form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Register;