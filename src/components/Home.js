import React from 'react';
import './styles/Home.css';
import Particles from 'react-particles-js';
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import our_process from '../images/our_process.png';
import our_process_icons from '../images/our_process_icons.svg';
import fcs from '../images/fcs.svg';
import childimpact from '../images/childimpact.svg';
import helpinghands from '../images/helpinghands.svg';
import map from '../images/map.png';

class Home extends React.Component {
    render() {
        return (
            <div class = "container">
            <div class = "component">

                <div class = "homescreen">
                    <div class = "homescreen_content">
                        <FadeIn>
                            <h1>Sursum</h1>
                            <hr/>
                            <h3>Education</h3>
                        </FadeIn>
                    </div>
                    <div class = "particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}                            
                        />
                    </div>
                </div>

                <div class = "home_section">
                    <div class = "home_section_header"><Slide left><div><h3>How it works</h3></div></Slide></div>
                    <Fade><div>
                    <div class = "home_trigrid">
                        <div class = "home_item">
                            <h1 class = "Unit_number">01</h1>
                            <h2>Videos</h2>
                            <p>Clear, concise, and easy to understand video tutorials covering a wide range of subjects and concepts through step-by-step instruction.</p>
                        </div>
                        <div class = "home_item">
                            <h1 class = "Unit_number">02</h1>
                            <h2>Supplementals</h2>
                            <p>A detailed-oriented transcript alongside each video with additional definitions and examples students may use to reinforce their knowledge.</p>
                        </div>
                        <div class = "home_item">
                            <h1 class = "Unit_number">03</h1>
                            <h2>Assignments</h2>
                            <p>Questions tailored for specific lessons designed to challenge students to brainstorm and apply their learning to solve problems</p>
                        </div>
                    </div>
                    </div></Fade>
                </div>
                
                <div class = "home_section purple_background">    
                    <div class = "home_section_header"><Slide left><div><h3>Our Courses</h3></div></Slide></div> 
                    <Fade><div>
                    <div class = "home_item"><p>Learning programming is a critical skill given how modern industries are shifting towards technology-based affairs and will serve as a valuable addition to a student's skill set.</p></div>
                    <div class = "home_bigrid">
                        <div class = "home_item">
                            <h1 class = "Unit_number">01</h1>
                            <h2>Python</h2>
                            <p>With a computer science course focused on Python—a popular computer programming language used throughout modern business and technology—students will be provided with rich content to explore and comprehend the Python language. With supplementals for review, quizzes to test student knowledge, and assignments to reinforce student concepts, our Python course equips students to be well versed-software oriented-programmers.</p>
                        </div>
                        <div class = "home_item">
                            <h1 class = "Unit_number">02</h1>
                            <h2>Computer Science Principles</h2>
                            <p>The computer science principles course goes in-depth about complex concepts of the internet such as Data Security, Data Information, Basic Programming, and Algorithms. This course challenges students to design and evaluate solutions and to apply computer science to solve problems through programming and algorithm development. Students learn about the fundamentals of computers and networking to understand how computer science impacts the world.</p>
                        </div>
                    </div>
                    </div></Fade>
                </div>

                <div class = "home_section">
                    <div class = "home_section_header"><Slide left><div><h3>Our Process</h3></div></Slide></div>
                    <Fade><div>
                    <h2>Students Will Be Able To...</h2>
                    <div class = "home_bigrid our_process">
                        <img src={our_process} alt="Our Process"/>
                        <img class = "our_process_icons" src={our_process_icons} alt="Our Process Icons"/>
                    </div>
                    </div></Fade>
                </div>
                
                <div class = "home_section green_background">
                <div class = "home_section_header"><Slide left><div><h3>Our Partners</h3></div></Slide></div>
                    <Fade><div>
                    <div class = "home_trigrid icon_trigrid">
                        <div class="partner_icon1"><a href="https://hhws.org/"><img class="partners" src={helpinghands} alt="Helping Hands Welfare Society"></img></a></div>
                        <div class="partner_icon2"><a href="https://childimpact.org/"><img class="partners" src={childimpact} alt="Child Impact"></img></a></div>
                        <div class="partner_icon3"><a href="https://frontlinecs.org/"><img class="partners"src={fcs} alt="Frontline Community Services"></img></a></div>
                    </div>
                    </div></Fade>
                </div>

                <div class = "home_section">
                <div class = "home_section_header"><Slide left><div><h3>Our Locations</h3></div></Slide></div>
                    <Fade><div>
                        <div class="map"><img src={map} alt="Our Locations"/></div>
                    </div></Fade>
                </div>
                
            </div>
        </div>
        )
      }
}

export default Home;