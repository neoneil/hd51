import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import './Students.scss'
const getAllUsersURL = "http://localhost:3000/users";

const Students = () => {
    const [posts, setPosts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        axios.get(getAllUsersURL).then((response) => {
            //console.log(response.data);
            if (response.data) {
                setPosts(response.data);
                setLoading(false);
            }

        });
    }, [setLoading]);
    return (
        <div className="container-fluid">
            <div className="row fw-normal">
                <h1>VIP 1v1 Students</h1>
            </div>
            {
                loading ?(<div className=" col-12 mx-auto loader"></div>):(<div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Exam</th>
                            <th scope="col">Current</th>
                            <th scope="col">Aim</th>
                            <th scope="col">Purpose</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Location</th>
                            <th scope="col">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts && posts.map((item, i) => (
                                <tr key={item._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td><Link to={`/students/${item._id}`}><button className="buttonStyle" >{item.name}</button></Link></td>
                                    <td>{item.exam}</td>
                                    <td> {item.current_level}</td>
                                    <td>{item.aim}</td>
                                    <td>{item.purpose}</td>
                                    <td>{item.deadline}</td>
                                    <td>{item.city}</td>
                                    <td>{item.createdAt.substring(0, 10)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>)
            }
            
            
            <br />

            {/* <div className="row">
                {
                    posts && posts.map((item) => (
                        <p key={item._id}>{item.name} {item.exam} {item.current_level} {item.purpose}</p>
                    ))
                }
            </div> */}
        </div>
    );
}

export default Students;