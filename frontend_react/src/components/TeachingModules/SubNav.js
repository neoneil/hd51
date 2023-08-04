import React from "react";
import './TeachingModules.scss'
import { IconContext } from "react-icons";
import { BsHeadphones } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { RiCharacterRecognitionLine } from "react-icons/ri";

const SubNav = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <button className="buttonStyle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        IELTS & PTE Modules
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">51PASS</h5>
                            <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                WORDS & GRAMMAR
                            </div>
                            <div className="dropdown mt-3">
                                <button className="buttonStyle dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown">
                                    WORDS Modules
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <RiCharacterRecognitionLine />
                                    </IconContext.Provider>  Affixes</a></li>
                                    <li><a className="dropdown-item" href="/phoneticChart"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <FaMicrophoneAlt />
                                    </IconContext.Provider>PhoneticChart</a></li>
                                </ul>
                            </div>

                            <div className="dropdown mt-3">
                                <button className="buttonStyle dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown">
                                    GRAMMAR Modules
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                    <li><a className="dropdown-item" href="/home"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsHeadphones />
                                    </IconContext.Provider> Listening</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <FaMicrophoneAlt />
                                    </IconContext.Provider> Speaking</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsBook />
                                    </IconContext.Provider> Reading</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsFillPencilFill />
                                    </IconContext.Provider> Writing</a></li>
                                </ul>
                            </div>

                            <div className="marginStyle">
                                IELTS & PTE Modules
                            </div>
                            <div className="dropdown mt-3">
                                <button className="buttonStyle dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                    IELTS Modules
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/home"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsHeadphones />
                                    </IconContext.Provider> Listening</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <FaMicrophoneAlt />
                                    </IconContext.Provider> Speaking</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsBook />
                                    </IconContext.Provider> Reading</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsFillPencilFill />
                                    </IconContext.Provider> Writing</a></li>
                                </ul>
                            </div>

                            <div className="dropdown mt-3">
                                <button className="buttonStyle dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">
                                    PTE Modules
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><a className="dropdown-item" href="/home"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsHeadphones />
                                    </IconContext.Provider> Listening</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <FaMicrophoneAlt />
                                    </IconContext.Provider> Speaking</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsBook />
                                    </IconContext.Provider> Reading</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsFillPencilFill />
                                    </IconContext.Provider> Writing</a></li>
                                </ul>
                            </div>

                            <div className="marginStyle">
                                PDF & Outside Links
                            </div>
                            <div className="dropdown mt-3">
                                <button className="buttonStyle dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown">
                                    PDF & Links
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                                <li><a className="dropdown-item" href="/pdfReader"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BsBook />
                                    </IconContext.Provider>  PDF Reader</a></li>
                                    <li><a className="dropdown-item" href="/posts"><IconContext.Provider value={{ className:"myReact-icons" }}>
                                        <BiLinkAlt />
                                    </IconContext.Provider> Outside Links</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubNav;