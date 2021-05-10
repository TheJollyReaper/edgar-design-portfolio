import React, {Component} from "react";
import './Navbar.css';
import { FaHamburger, FaWindowClose } from 'react-icons/fa'
import MediaQuery from 'react-responsive'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Navbar extends Component {
    // const mobile = useMediaPredicate("(max-width: 480px)")
    // const desktop = useMediaPredicate("(min-width: 480px)")

    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>
                <div className="nav">
                <div>
                    <h4>Edgar Lopez</h4>
                    {/* <p>Front-end Developer</p> */}
                </div>
                
                {/* Mobile version */}
                <MediaQuery maxWidth={480}>
                    <div onClick={this.handleClick}>
                        {this.state.clicked ? 
                            <FaWindowClose className="icon"/> :
                            <FaHamburger className="icon"/>
                        }
                    </div>
                </MediaQuery>
                
                {/* Desktop version */}
                <MediaQuery minWidth={480}>
                    <ul className="nav-links">
                        <Link className="link" to={'/'}><li><h5>Home</h5></li></Link>
                        <Link className="link" to={'/projects'}><li><h5>Projects</h5></li></Link>
                        <Link className="link" to={'/about'}><li><h5>About Me</h5></li></Link>
                    </ul>
                </MediaQuery>

            </div>
            
            {this.state.clicked ?
                <div className="mobile-dropdown">
                    <Link className="link" to={'/'} onClick={this.handleClick}>
                        <li><h3>Home</h3></li>
                    </Link>
                    <Link className="link" to={'/projects'} onClick={this.handleClick}>
                        <li><h3>Projects</h3></li>
                    </Link>
                    <Link className="link" to={'/about'} onClick={this.handleClick}>
                        <li><h3>About Me</h3></li>
                    </Link>
                </div> :
                <div></div>
            }
            
        </div>
        );
    }
}

export default Navbar