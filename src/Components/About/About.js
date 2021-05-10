import React from 'react'
import './About.css'
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function about() {
    return (
        <div className="about">
            <h5>
                Hi! I'm Edgar! I'm someone with many hats. When I'm not busy experimenting with whatever
                web framework that caught my eye that week, you'll find me tinkering with arduinos, 
                updating my fantasy football website, or thinking up ideas for a website or video game.
            </h5>
            <div style={{display:"flex"}}>
                <FaLinkedin className="icon"/>
                <FaTwitterSquare className="icon"/>
            </div>
        </div>
    )
}

export default about