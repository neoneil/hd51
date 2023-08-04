import React from 'react';
import './AddSession.scss'
import axios from "axios";
import { useState } from "react";

function AddGoogleDoc(props) {
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
        const config = { 'content-type': 'application/json' };
        setStatus('submitting');
        axios.patch(`http://localhost:3000/updateUser/${props.student._id}`, {
            googleDoc: inputs.userDoc,
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
                <div className="col-8 mx-auto">
                    {status !== 'success' &&
                        <form onSubmit={handleSubmit}>
                            <p className=" mb-3 fw-normal">Add Google Doc</p>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingDoc" placeholder="Doc" name="userDoc"
                                    value={inputs.userDoc || ""}
                                    onChange={handleChange} />
                                <label htmlFor="floatingDoc">Google Doc</label>
                            </div>
                            <button className="buttonStyle"
                                type="submit" disabled={status === 'submitting'}>Submit</button>
                            {error !== null && <p className="Error">{error.message}</p>
                            }
                        </form>
                    }
                    {status === 'success' &&
                        <h3>New Google doc has been added!</h3>
                    }
                    {/* <p>序列号：{props.student && props.student._id}</p> */}
                    {/* <p className="mt-5 mb-3 text-muted">©2023</p> */}
                </div>
            </div>
        </div>
    )
}

export default AddGoogleDoc;