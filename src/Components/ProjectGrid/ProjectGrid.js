import React, {Component} from "react";
import './ProjectGrid.css';
import MediaQuery from 'react-responsive'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ns_card from '../../images/nature-stewards-card.svg'

class ProjectGrid extends Component {
    render () {
        return (
            <div className="grid">
                <div className="grid-row">

                    {/* <img src={ns_card}></img> */}
                    <Link className="card ns-card" to={"/nature-stewards"}>
                        <h4>Nature Stewards</h4>
                        <p>Connecting hikers to nature with volunteer opportunities</p>
                        <h6 className="skills">Skills: User research, ideation, prototyping, UX design</h6>
                    </Link>
                    
                    <Link className="card" to={"/project2"}>
                        <h3>Project 2</h3>
                        <p>Short description</p>
                        <h6 className="skills">Skills: User research, UX design</h6>
                    </Link>
                    
                    <Link className="card" to={"/project3"}>
                        <h3>Project 3</h3>
                        <p>Short description</p>
                        <h6 className="skills">Skills: User research, UX design</h6>
                    </Link>
                </div>

                <div className="grid-row">

                    <Link className="card" to={"/project4"}>
                        <h3>Project 1</h3>
                        <p>Short description</p>
                        <h6 className="skills">Skills: User research, UX design</h6>
                    </Link>
                    
                    <Link className="card" to={"/project5"}>
                        <h3>Project 2</h3>
                        <p>Short description</p>
                        <h6 className="skills">Skills: User research, UX design</h6>
                    </Link>
                    
                    <Link className="card" to={"/project6"}>
                        <h3>Project 3</h3>
                        <p>Short description</p>
                        <h6 className="skills">Skills: User research, UX design</h6>
                    </Link>
                </div>


            </div>
        );
    }
}

export default ProjectGrid