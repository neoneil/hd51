import React, { useState } from "react";
import './OneStudent.scss'
import axios from "axios";
import { useParams } from 'react-router-dom'
import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { Bar } from 'react-chartjs-2'
import{ Chart as Chartjs } from "chart.js/auto"
import AddSession from '../../components/AddSession/AddSession'
import AddDoc from '../../components/AddSession/AddGoogleDoc'
const OneStudent = () => {
    const chartjsData = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
      const chartjsData2 = [
        { year: 2010, count: 50 },
        { year: 2011, count: 40 },
        { year: 2012, count: 35 },
        { year: 2013, count: 25 },
        { year: 2014, count: 12 },
        { year: 2015, count: 3 },
        { year: 2016, count: 2 },
      ];
      const [userData, setUserData] = useState({
        labels: chartjsData.map((data) => data.year),
        datasets: [
            {
                label:"User Count",
                data: chartjsData.map((data) => data.count)
            }
        ]
      })
    const { id } = useParams();
    const getOneUserURL = `http://localhost:3000/user/${id}`;
    const getProcessesURL = `http://localhost:3000/processes/${id}`;
    const [student, setStudent] = React.useState(null);
    const [process, setProcess] = React.useState(null);
    // const [day, setDay] = React.useState(0);
    // const [hour, setHour] = React.useState(0);
    // const [minute, setMinute] = React.useState(0);
    // const [second, setSecond] = React.useState(0);
    React.useEffect(() => {
        console.log(Chartjs);
        axios.get(getOneUserURL).then((response) => {
            if (response.data) {
                setStudent(response.data)
            }

        });
        axios.get(getProcessesURL).then((response) => {
            if (response.data) {
                setProcess(response.data)
            }

        }); 
        
    }, [getOneUserURL, getProcessesURL]);

    // if (student) {
    //     var countDownDate = new Date(student.deadline).getTime();
    // }
    // var x = setInterval(function () {
    //     var now = new Date().getTime();
    //     var distance = countDownDate - now;
    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     setDay(days);
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     setHour(hours);
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     setMinute(minutes);
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //     setSecond(seconds);
    //     if (distance < 0) {
    //         clearInterval(x);
    //         //document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    // }, 1000);

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h4>Info Breakdown</h4>
                    </div>
                    <div className="row">
                        <Bar data={userData} />
                    </div>
                    <IconContext.Provider value={{ className:"myReact-icons" }}>
                        <BsPersonFill />
                    </IconContext.Provider>
                    {student && student.name} | {student && student.exam} | {student && student.aim} | {student && student.deadline}

                    {student && student.googleDoc ? (
                        
                        <button className="buttonStyle marginLeft"><a href = {student.googleDoc} target="blank">Google Doc</a></button>
                    ) : (
                        <AddDoc student={student} />
                    )}
                    <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Contents</th>
                                    <th scope="col">Homework</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    process && process.map((item, i) => (
                                        <tr key={item._id}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.sessions}</td>
                                            <td>{item.homework}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <p>{student && student.deadline}</p>
                    {/* <p>{day} day {hour} hour {minute} min {second} s</p> */}
                </div>
                <div className="col-4">
                    <AddSession student={student} />
                </div>
            </div>
        </div>
    );
}

export default OneStudent;