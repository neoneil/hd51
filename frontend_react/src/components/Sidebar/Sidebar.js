import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
const Sidebar = () => {

    return (
        // <div className="container-fluid g-0">
        // <div className="row">
        <div className="col sidebar">
            <header>51Pass</header>
            <ul>
            <li><Link className="" to="/"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>Home</Link></li>
                <li><Link className=""  data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#collapseExample" aria-controls="collapseExample"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>sub navbar </Link>
                    <div className="collapse subdropdown" id="collapseExample">
                        sub 1
                    </div>
                    <div className="collapse subdropdown" id="collapseExample">
                        sub 2
                    </div></li>
                <li><Link className="" to="/students"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>students</Link></li>
                <li><Link className="" to="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>New student</Link></li>
                <li><Link className="" to="/subnav"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>Modules</Link></li>
                <li><Link className="" to="/students"><IconContext.Provider value={{ className:"myReact-icons" }}>
                    <BsPersonFill />
                </IconContext.Provider>Link 2</Link></li>
               
            </ul>
        </div>
        // </div>
        // </div>
    );
}


export default Sidebar;


