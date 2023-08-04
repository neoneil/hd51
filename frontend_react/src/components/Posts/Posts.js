import React from 'react';
import './Posts.scss'
import axios from "axios";
import { useState } from "react";

function Posts() {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const config = { 'content-type': 'application/json' };
        setStatus('submitting');
        axios.post('http://localhost:3000/user', {
            name: inputs.username,
            exam: inputs.userexam,
            current_level: inputs.userCurrent,
            aim: inputs.userAim,
            purpose: inputs.userPurpose,
            deadline: inputs.userDeadline,           
            email:inputs.userEmail,
            city: inputs.city

        }, config)
            .then(function (response) {
                //console.log(response.data._id);
                setStatus('success');
            })
            .catch(function (error) {
                console.log(error);
                setStatus('typing');
                setError(error);
            });

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    {status !== 'success' &&
                        <form onSubmit={handleSubmit}>

                            <h1 className="h3 mb-3 fw-normal">New Student</h1>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingName" placeholder="name" name="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingName">Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingexam" placeholder="Exam" name="userexam"
                                    value={inputs.userexam || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingexam">Exam Type</label>
                            </div>
                            <div className="form-floating">
                                <input type="number" step="0.5" className="form-control" id="floatingCurrent" placeholder="Current" name="userCurrent"
                                    value={inputs.userCurrent || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingCurrent">Current level</label>
                            </div>
                            <div className="form-floating">
                                <input type="number" step="0.5" className="form-control" id="floatingAim" placeholder="Aim" name="userAim"
                                    value={inputs.userAim || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingAim">Aim</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPurpose" placeholder="Purpose" name="userPurpose"
                                    value={inputs.userPurpose || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingPurpose">Purpose</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingDeadline" placeholder="Deadline" name="userDeadline"
                                    value={inputs.userDeadline || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingDeadline">Deadline - e.g. 3/31/2024</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingEmail" placeholder="Email" name="userEmail"
                                    value={inputs.userEmail || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <div className="form">
                                <input type="radio" id="city1" name="city"
                                    value={"Sydney"}
                                    onChange={handleChange} />
                                <label className="formElement" htmlFor="city1">Sydney</label>
                                <input type="radio" id="city2" name="city"
                                    value={"Adelaide"}
                                    onChange={handleChange} />
                                <label htmlFor="city2">Adelaide</label>
                                <input type="radio" id="city3" name="city"
                                    value={"Melbourne"}
                                    onChange={handleChange} />
                                <label htmlFor="city3">Melbourne</label>
                                <input type="radio" id="city4" name="city"
                                    value={"China"}
                                    onChange={handleChange} />
                                <label htmlFor="city1">China</label>
                            </div>
                            <button className="w-100 buttonStyle"
                                type="submit" disabled={status === 'submitting'}>Submit</button>
                            {error !== null && <p className="Error">{error.message}</p>
                            }
                        </form>
                    }
                    {status === 'success' &&
                        <h3>New student has been added!</h3>
                    }
                    <p className="mt-5 mb-3 text-muted">©2023</p>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Posts;