//import axios from "axios";
import React from "react";
import { useState } from "react";
import './Test.scss'
//const getAllUsersURL = "http://localhost:3000/users";


const Test = (props) => {
    const [count, setCount] = useState(null);
    
    console.log(count)
    return(
        <div className="back">
            <button className="buttonStyle" onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
    // const [posts, setPosts] = React.useState(null);
    // React.useEffect(() => {
    //     axios.get(getAllUsersURL).then((response) => {
    //         //console.log(response.data);
    //         if (response.data) {
    //             setPosts(response.data);
    //         }

    //     });
    // },);
    // return (
    //     <div>
    //         <table>
    //             <tbody>
    //                 {
    //                     posts && posts.map((item, i) => (
    //                         <tr key={item._id}>
    //                             <th scope="row">{i + 1}</th>
    //                             <td>{item.name}</td>
    //                             <td>{item.exam}</td>
    //                             <td> {item.current_level}</td>
    //                             <td>{item.aim}</td>
    //                             <td>{item.purpose}</td>
    //                             <td>{item.deadline}</td>
    //                             <td>{item.city}</td>
    //                             <td>{item.createdAt.substring(0, 10)}</td>
    //                         </tr>
    //                     ))
    //                 }

    //             </tbody>
    //             </table>
    //     </div>
    // )
}



export default Test; 