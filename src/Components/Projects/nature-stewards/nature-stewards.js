import React, {Component} from "react";
import StickySidebar from '../../StickySidebar/StickySidebar.js';
import './nature-stewards.css';
// import 'react-slideshow-image/dist/styles.css'
import Alex from '../../../images/alex.svg'
import Xela from '../../../images/xela.svg'
import JourneyMap from '../../../images/journey-map.svg'
import Lofi1 from '../../../images/lofi1.svg'
import Lofi2 from '../../../images/lofi2.svg'
import Lofi3 from '../../../images/lofi3.svg'
import Lofi4 from '../../../images/lofi4.svg'
import Hifi1 from '../../../images/hifi1.svg'
import Hifi2 from '../../../images/hifi2.svg'
import Hifi3 from '../../../images/hifi3.svg'
import Hifi4 from '../../../images/hifi4.svg'
import Taskflow from '../../../images/taskflow.svg'
import Wireframe from '../../../images/wireframe.PNG'
// import { Slide } from 'react-slideshow-image';

class NatureStewards extends Component {
    render() {
        return (
            <div>
                <StickySidebar/>

                <div className="content">
                
                    <div id="overview">
                        <h4>Nature Stewards: Project Overview</h4>
                        <div className="overview-content">
                            <div>
                                <h5>Design Question</h5>
                                <p>
                                    How can we engage university students with nature 
                                    in a way that positively impacts the environment?
                                </p>
                            </div>
                            <div>
                                <h5>User Group</h5>
                                <p>
                                    Our users are university students ages 18-22 who have an 
                                    interest in helping preserve recreational areas but don’t know how to get involved. 
                                </p>
                            </div>
                            <div className="flex-col-right">
                                <h5>Project Length</h5>
                                <p>
                                    11 Weeks
                                </p>
                                <h5>Tech and Tools</h5>
                                <p>Figma</p>
                                <p>Slack</p>
                                <p>Google Docs</p>
                                <p>Pen/pencil</p>
                            </div>
                        </div>
                    </div>

                    <div id="findings">
                        <h4>Interview Findings</h4>
                        <p>
                            We started the design process through semi-structured interviews of our target users 
                            (college-aged hikers) and competitive analysis of products in our field of interest. 
                            We centered our investigation around finding out what the hiking experience is like and 
                            discovering areas where it could be improved. We paired our interview data with secondary 
                            sources detailing human impact left on trails and trailheads.
                        </p>
                        <h5>Main Takeaways</h5>
                        <ul>
                            <li>
                                Trash overflow and resulting litter is a bigger issue 
                                at trailheads rather than on the trail itself.
                            </li>
                            <li>
                                Trailheads have other maintenance issues such as bathroom facilities 
                                that are dirty or without toilet paper.
                            </li>
                            <li>
                                University students generally like to perform activities in groups.
                            </li>
                        </ul>
                        <p>
                            This initial research was important because it gave us real information 
                            from our target users that would serve as a foundation for the rest of the project. 
                            The findings provided experiences needed to better understand our user’s needs and 
                            pain points. With our research findings, we could start defining our target audience.
                        </p>
                        <button className="small-button">My research</button>
                        <button className="small-button">Competitive Analysis</button>
                    </div>

                    <div id="personas">
                        <h4>Personas</h4>

                        <p>
                            After analyzing our interviews conducted during user research, we identified 
                            pain points, goals, motivations, and other characteristics of the interviewee. 
                            This information was used to create two realistic personas representing two potential 
                            target user groups. One of our personas (Alex) represented a more experienced and 
                            environmentally conscious user, while our other persona (Xela) represented a novice 
                            hiker who is just getting started. Most of the information in the personas was based 
                            on the user research we conducted, but a few assumptions had to be made to create a 
                            holistic (and realistic) personality. 
                        </p>
                        <div className="overview-content">
                            <img className="persona" src={Alex} alt="Persona of an experienced hiker, Alex"/>
                            <img className="persona" src={Xela} alt="Persona of a novice hiker, Xela"/>   
                        </div>
                    </div>

                    <div id="journey-map">
                        <h4>User Journey Map</h4>

                        <p>
                            We used the persona as a guide to map out the experience of Xela 
                            (our novice hiker persona) going out on a hike with a group of friends.
                            Through each event, we captured Xela’s hypothetical reactions, emotions, 
                            and thoughts and visually plotted them.
                        </p>
                        <p>
                            The journey map was useful in identifying areas for improvement throughout the hiking 
                            experience. Those low points were later used to help us decide what issues our design 
                            needed to address.
                        </p>
                        <img className="map" src={JourneyMap} alt="Journey map of the Xela persona"/> 
                    </div>

                    <div id="design-reqs">
                        <h4>Design Requirements</h4>

                        <p>
                            We decided upon our design requirements based on the low points 
                            identified in the journey map and the rest of the information compiled 
                            from our personas and user research. These requirements helped us decide 
                            what problems we wanted our solution to focus on and what kind of experience
                             we wanted to create.
                        </p>
                        <ol>
                            <li><p>
                                Connect target users to volunteer opportunities for trail 
                                cleanup/trailhead maintenance.
                            </p></li>

                            <li><p>
                                Compile location data of full garbage cans to create a 
                                spatial map for volunteers to view.
                            </p></li>

                            <li><p>
                                Mark where trash bins are full.    
                            </p></li>

                            <li><p>
                                Improve the rate of bathroom maintenance as needed.
                            </p></li>

                            <li><p>
                                Inform trailhead users of sustainable trash management practices.
                            </p></li>

                            <li><p>
                                Record time when garbage cans become full to categorize trail maintenance by priority.
                            </p></li>
                        </ol>
                        <p>
                            By the end of the project the main requirements we ended up focusing on was 
                            marking the location of ALL maintenance related points of interest 
                            (bathrooms, trash, hazards), displaying them on a map, and getting users 
                            connected to volunteer opportunities for trail cleanup.
                        </p>
                        <button className="small-button">Design proposal</button>
                    </div>

                    <div id="storyboards">
                        <h4>Storyboards</h4>

                        <p>
                            Once we had our design requirements, it was time to start exploring 
                            possible solutions that would meet those requirements. Each of us 
                            individually came up with a couple of storyboards, each one showing 
                            one of our personas interacting with a wide range of possible solutions.
                            After sharing and discussing our storyboards, we decided that a mobile
                            application capable of tracking trail maintenance conditions and organizing
                            volunteer groups would be the best solution to proceed with.
                        </p>
                        <button className="small-button">Storyboards</button>
                    </div>

                    <div id="lo-fi">
                        <h4>Lo-Fi Prototype</h4>

                        <p>
                            Paper prototypes were not possible due to the pandemic forcing us 
                            to work entirely online. As an alternative, we created lo-fi digital 
                            prototypes on Figma. The prototype was based off of preliminary design 
                            sketches each team member had done. The purpose of the prototype was to 
                            create a rough visualization of the content our application screens would 
                            contain and to identify early issues with the basic design and navigation 
                            of our app.
                        </p>
                        <p>
                            Working on these prototypes digitally presented a new set of challenges 
                            not present with traditional paper prototypes. Sketching with pen and paper 
                            is much faster and there’s a limit to how polished the prototype can look. 
                            Working on Figma, we had to make an effort to keep the prototype low fidelity 
                            and to focus on just the content without going too far with the visual aspects. 
                        </p>
                        <button className="small-button">Initial Sketches</button>

                        <div className="content-overview">
                            <img className="lofi" src={Lofi1}/>
                            <img className="lofi" src={Lofi2}/>
                            <img className="lofi" src={Lofi3}/>
                            <img className="lofi" src={Lofi4}/>
                        </div>
                    </div>
                    
                    <div id="evaluation">
                        <h4>Evaluation</h4>

                        <p>
                            Once we had our prototype, we came up with an evaluation plan in order to 
                            observe how users would interact with our design. 
                        </p>
                        <p>
                            We came up with three different tasks for users to accomplish while navigating through our prototype:
                        </p>
                        <ol>
                            <li><p>Sign up for a volunteer opportunity.</p></li>
                            <li><p>Navigate to the page containing a list of suggested items to take.</p></li>
                            <li><p>Update the trail conditions for a specific trail.</p></li>
                        </ol>
                        <p>
                            We observed and took notes as our volunteers use the think-out-loud method while they accomplished the tasks. 
                            We then asked them a set of questions to gain further insights on what difficulties and suggestions they had. 
                        </p>
                        <p>Here's what we found:</p>
                        <ol>
                            <li><p>Navigation was inconsistent and did a poor job of connecting task flows.</p></li>
                            <li><p>Home screen button labels were not intuitive.</p></li>
                            <li><p>Our page listing trail conditions was cluttered and contained too much information.</p></li>
                            <li><p>The purpose of our item suggestion page was unclear and felt unnecessary.</p></li>
                        </ol>
                        <button className="small-button">Evaluation Writeup</button>
                    </div>

                    <div id="info">
                        <h4>Info Architecture</h4>

                        <p>
                            Once we had a basic idea down for a solution, it was time to start laying out user flows
                            and features that our app would contain. Creating our information architecture helped us 
                            visualize how everything would be connected and flow together. We used our design requirements 
                            to prioritize what functionality needed to happen quickly and efficiently. From there, our user 
                            research, personas, and storyboards gave us vital context on how to best design the app’s flow. 
                            This allowed us to easily streamline our thoughts into a low-fidelity, low-stakes prototype.
                        </p>
                        <img className="workflow" src={Taskflow} alt="Prototype app workflow"/> 
                    </div>

                    <div id="wireframes">
                        <h4>Wireframes</h4>

                        <p>
                            Taking into account the feedback received on the low fidelity prototype, we started 
                            to refine the prototype to focus a bit more on the layout and functionality of the screens. 
                            We created wireframes for the functions described in our information architecture and wrote 
                            annotations describing the purpose for every feature on each wireframe. These wireframes served 
                            as a foundation for the high-fidelity prototype.
                        </p>

                        <img className="map" src={Wireframe} alt="Annotated wireframe of the trail directory page"/>
                    </div>
                    <button className="small-button">All Annotated Wireframes</button>

                    <div id="hi-fi">
                        <h4>Hi-fi Prototype</h4>
                        <p>
                            Our high fidelity prototype was the culmination of all the previous steps we had worked 
                            on with a much larger focus on visual design than our previous prototypes. The purpose of the 
                            high fidelity prototype is to showcase what our solution can be expected to look like and what 
                            features it will have. We went through several iterations of high fidelity prototypes as we 
                            received feedback until it reached its current state.
                        </p>
                        <div className="content-overview">
                            <img className="lofi" src={Hifi1}/>
                            <img className="lofi" src={Hifi2}/>
                            <img className="lofi" src={Hifi3}/>
                            <img className="lofi" src={Hifi4}/>
                        </div>
                    </div>

                    <div id="reflection">
                        <h4>Reflection</h4>

                        <p>
                            Over these past ten weeks, our project has evolved and grown immensely. 
                            Our project declaration was focused on reducing trash and trail debris in order to reduce 
                            forest fires. However, by iterating through the user-centered design process, our final project 
                            ended up as a volunteer app focused on improving trailhead maintenance by getting hikers involved in clean up. 
                        </p>
                        <p>If Done Again</p>
                        <p>
                            If our team reiterated on this solution, we would love to dive deep into the app’s incentive, one of 
                            the key elements missing in our current prototype. By the end of the process, we had created a tool to 
                            aid environmentally conscious hikers in cleaning up trails, but our solution does not offer any value that 
                            would encourage users—specifically, college-aged students—to help. Given more time, we would have focused more 
                            on this facet: What do the users gain from this experience? What motivates students to volunteer? And how 
                            can we provide a fair incentive to all those that wish to participate?
                        </p>
                        <p>If We Had More Time</p>
                        <p>
                            If given more time, our team would also have benefited greatly from another round of research. 
                            Because our project ideas shifted radically, much of our preliminary research was irrelevant by 
                            the time we were in the design phase. More time would have allowed us to do extended research on trail 
                            maintenance and conduct another set of interviews, focusing this time on the interviewee’s experience 
                            at trailheads. We would have also liked to interview parks rangers that manage trailheads on what they 
                            think about current maintenance, issues, and volunteership.
                        </p>
                        <p>Challenges</p>
                        <p>
                            The most challenging part about this project was time and keeping things moving. Ten weeks is not a lot 
                            of time to create a design from start to finish so we did not have the luxury of being able to second 
                            guess ourselves or backtrack. We would have loved to repurpose or redo a couple of our first project components 
                            to suit our needs later in the project, but it was not feasible with time constraints. 
                        </p>
                    </div>
                </div>
                {/* <ul>
                    <li>Findings</li>
                    <li>Personas</li>
                    <li>User Journey Map</li>
                    <li>Design Requirements</li>
                    <li>Storyboards</li>
                    <li>Lo-fi Prototype</li>
                    <li>Evaluation</li>
                    <li>Info Architecture</li>
                    <li>Wireframes</li>
                    <li>Hi-fi Prototype</li>
                    <li>Reflection</li>
                </ul> */}
            </div>
        );
    }
}

export default NatureStewards