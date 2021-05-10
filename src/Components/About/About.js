import React from 'react'
import './About.css'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

function about() {
    return (
        <div className="about">
            <h5>
                Hi! I'm Edgar! I'm someone with many hats. When I'm not busy experimenting with whatever
                web framework that caught my eye that week, you'll find me tinkering with arduinos, 
                updating my fantasy football website, or thinking up ideas for a website or video game.
            </h5>
            <div style={{display:"flex"}}>
                <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/edgar-lopez-832740174/')} className="social-icon" alt="link to linkedIn page"/>
                <FaGithubSquare onClick={() => window.open('https://github.com/TheJollyReaper')} className="social-icon"/>
                <FaTwitterSquare className="social-icon"/>
            </div>
        </div>
    )
}

export default about
