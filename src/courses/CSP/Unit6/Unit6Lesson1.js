import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = ({
            user: null,
          });
          this.authListener = this.authListener.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
    componentDidMount(){
        this.authListener();
      }
    
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
      //login
          if (user) {
            this.setState({user});
            localStorage.setItem('user', user.uid);
          } 
      //logout
          else {
            this.setState({ user:null});
            localStorage.removeItem('user');
          }
        });
      }
    render() {
        return (
            <div>
                {this.state.user ? (<Lesson />) : (<Login />)}
            </div>
        )
      }
}
class Lesson extends React.Component {
    render() {
        return (
            <div class = "container">
                <div class = "split left">
                    <div class = "lesson_video">
                        <iframe src="https://www.youtube.com/embed/hDpmCXihL3s?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">What Are Simulations</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The world is a very complex place where many things go on at once. There can be many pieces of data that you can take from the real world but it can be very hard for someone to take this real-word data and put it on a computer. A simulation is something that comes close to taking in all factors in the real world to display various things that might happen in the real world. A simulation is like a made-up imitation of something in the real world that takes into account many factors in the real world to display it on a computer.</div>
                                    <div class="tab_header">Simulations</div>
                                    <div class="paragraph">Simulations tend to get rid of things that are unnecessary to display, and the main purpose is to realistically recreate a situation in the real world so that you can perform tests with the simulation instead of the real world. A great example of this would be using a flight simulator. Flight simulators take into account the various things needed for flying like gravity, wind, and more. Plus there are all the switches that you would typically find on a plane. Simulations can help engineers find flaws in their design and virtually test various new innovations without wasting materials. Simulations make it possible to experience parts of the real world without worrying about consequences such as a plane crashing on a simulation before they are made in the factory and more. Simulations can also be used to make videos to create more realistic experiences in-game. So let's see all the useful things simulations have done.</div>
                                    <div class="paragraph">First simulations can be used by physicists to calculate natural occurrences taking into account the forces of nature and trying combinations of forces to see how they act on objects.</div>
                                    <div class="paragraph">There are also education simulations where the simulation replicates a process in the real world like the magnetic fields on a magnet and allows the user to rotate the magnets next to each other to teach students about magnets.</div>
                                    <div class="paragraph">Next, there are entertainment simulations where various game developers try to use the physics of the real world to employ them in their games. Games take into account various details that the user puts in and creates the game following real-world forces and other effects, this also applies to animation.</div>
                                    <div class="paragraph">Then there are research simulations that can be used to calculate natural occurrences taking into account the forces of nature and trying combinations of forces to see how they act on objects.</div>
                                    <div class="paragraph">Sometimes simulations can be used to reduce the amount of time it takes to test something especially if it can cost someone’s life like health and medicine. Simulations are great at finding solutions to medical problems.</div>
                                    <div class="paragraph">The government can use simulations to figure out how diseases will spread through a community by simulating on a computer and then the simulation can then provide recommendations on how to combat problems of disease. These kinds of simulations are known as epidemiology simulations where researchers try to simulate disease spread and figure out the effects of the disease spread and see how effective certain methods might be at stopping disease spread.</div>
                                    <div class="paragraph">Pharmaceutical simulations are something that medical companies create and spend a lot of money to develop a new drug to be brought to market. The simulation checks to see how effective the drug will be by analyzing what the drug is made of and creating models. Then these models are tested and if something might work, the drug company creates a test and tests it in the lab. The computer drug design process can help figure out how much of the drug is needed to treat a condition and how many times it should be used and more from studying the drug sample.</div>
                                    <div class="paragraph">Remember it's important to note that simulations don't need to have a visual output, it can be simple text or numbers. But displaying a simulation with animations on screen can help the user better understand what the simulation is doing. Simulations have variability allowing the user to test different scenarios that might occur in the real world and then from the simulation generate real-world data that we can use.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a simulation?",
                                              FindAnswer:["A Simulation is like a made-up imitation of something in the real world that takes into account many factors in the real world to display it on a computer", "A Simulation is a hardware setup that allows for faster data transfer speeds", "A Simulation is a network setup that makes it possible to send information to a receiver at faster speeds", "A Simulation is an advanced variation of an algorithm that can solve problems"], 
                                              rightAnswer:"A Simulation is like a made-up imitation of something in the real world that takes into account many factors in the real world to display it on a computer"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following are examples of simulations?",
                                              FindAnswer:["Education Simulations", "Entertainment Simulations", "Pharmaceutical Simulations", "All of the Above"], 
                                              rightAnswer:"All of the Above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Do simulations need a visual display?",
                                              FindAnswer:["Simulations don't need to have a visual output as simulations themselves can be simple text or numbers", "No, because it takes up too much computer power to have the simulation have a visual display", "Yes because Simulations can only be useful if they visually display real-world data", "Simulations need a visual display because the definition of a simulation is something that takes real-world data and creates a visual display of the data"], 
                                              rightAnswer:"Simulations don't need to have a visual output as simulations themselves can be simple text or numbers"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                            </Tabs>
                        </div>
                    </div>
                </div>

                <div class = "bottom_section">
                    <Fade bottom><div><div class ="lesson_backbutton"><Link to='/CSP'><button class="grow">View Other Lessons</button></Link></div></div></Fade>
                </div> 

            </div>
        )
      }
}

export default Unit6Lesson1;