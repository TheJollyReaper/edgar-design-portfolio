import React from 'react'
import './StickySidebar.css';
import MediaQuery from 'react-responsive'
import { Link, animateScroll as scroll } from "react-scroll";

function StickySidebar() {
    return (

        // Sidebar only appears in large resolutions
        <MediaQuery minWidth={480}>
            <div className="sidebar">

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="overview"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Project Overview
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="findings"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Findings
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="personas"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Personas
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="journey-map"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    User Journey Map
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="design-reqs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Design Requirements
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="storyboards"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Storyboards
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="lo-fi"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                     Lo-fi Prototype
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="evaluation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Evaluation
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Info Architecture
                </Link>
              
                <Link
                    className="sidelink"
                    activeClass="active"
                    to="wireframes"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Wireframes
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="hi-fi"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Hi-Fi Prototype
                </Link>

                <Link
                    className="sidelink"
                    activeClass="active"
                    to="reflection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Reflection
                </Link>
                
            </div>      
        </MediaQuery>
        
    )
}

export default StickySidebar
