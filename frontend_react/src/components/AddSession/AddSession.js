import React from 'react';
import './AddSession.scss'
import axios from "axios";
import { useState } from "react";

function AddSession(props) {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible((current) => !current);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = { 'content-type': 'application/json' };
        setStatus('submitting');
        axios.post('http://localhost:3000/process', {
            student_id: props.student._id,
            sessions: inputs.userSession,
            homework: inputs.userHomework,
            name: props.student.name,
            email: props.student.email
        }, config)
            .then(function (response) {
                console.log(response.data);
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
                <div className="col-12">
                    {status !== 'success' &&
                        <form onSubmit={handleSubmit}>

                            <h1 className="h3 mb-3 fw-normal">Recapitulation</h1>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingSession" placeholder="Session" name="userSession"
                                    value={inputs.userSession || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingSession">Session</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingHomework" placeholder="Homework" name="userHomework"
                                    value={inputs.userHomework || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingHomework">Homeworks</label>
                            </div>

                            <button className="buttonStyle"
                                type="submit" disabled={status === 'submitting'}>Confirm</button>
                            {error !== null && <p className="Error">{error.message}</p>
                            }
                        </form>
                    }
                    {status === 'success' &&
                        <h3>New Session and homeworks have been added!</h3>
                    }
                    <div className='leftStyle'>
                        <label className="switch">
                            <input type="checkbox" onChange={handleToggle} />
                            <span className="slider round"></span>
                        </label>
                        {visible && <p>_id:{props.student && props.student._id}</p>}
                    </div>

                    <p className="mt-5 mb-3 text-muted">©2023</p>
                </div>
            </div>
        </div>
    )
}

export default AddSession;