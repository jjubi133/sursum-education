import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit8Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">Crowdsourcing and Monitoring Innovations</div>
                        <div class = "tabs">
                            <Tabs>

                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The modern age has made it possible to connect with people across the globe through the internet, allowing people to share ideas with others. Because of this great connection between people, crowdsourcing is possible. But what even is crowdsourcing? Crowdsourcing is the method of using the large connection of people over a network to allow people to contribute to online documents and put their knowledge into one source. Many people have the chance to edit this specific document or source.</div>
                                    <div class="tab_header">Original Crowdsourced Bases</div>
                                    <div class="paragraph">But what about examples of crowdsourced bases? What are places that people take the information they know and post it into one collective document? Well, one of the most original crowdsourced bases were things like the dictionary, which compiles definitions of various words.</div>
                                    <div class="paragraph">The internet makes this idea of sharing knowledge and putting it into a database much easier. These databases like the dictionary typically can be sorted allowing people to search up content from these databases that they want. Databases are also commonly updated to prevent spam information but this can have the problem of false information. Well, what does this even mean? Well, It means that someone can display incorrect information. To solve this problem, databases like Wikipedia encourage people to cite knowledge.</div>
                                    <div class="tab_header">Crowdfunding</div>
                                    <div class="paragraph">The creation of a new product that serves a purpose also known as inventing has been a common thing in human history.</div>
                                    <div class="paragraph">Inventions require money for manufacturing and designing taking a lot of money and resources to create something new. But now, inventors can use the internet to get money online through crowdfunding as people can donate to allow for a new product to have funding to be created.</div>
                                    <div class="paragraph">Crowdfunding is also a way to raise funds for charitable causes. DonorsChoose.org is a crowdfunding platform that empowers K-12 teachers to raise funds for classroom needs. The teachers need much fewer funds than inventors, but for their students, a few hundred or thousand dollars from strangers can make a big difference. Crowdfunding can be a little bit risky as some of them can lead to scams where someone displays an invention but doesn’t make the product and just takes the money. It's typical that the crowdfunding site only gives the inventor money if they reach a certain donation mark.</div>
                                    <div class="tab_header">Human Computation Platforms</div>
                                    <div class="paragraph">In general, computers are great at solving various problems through the usage of algorithms and other methods. But humans are better at certain tasks like figuring out if what someone said was positive or negative. Because humans are better at certain tasks, human computation platforms exist to allow humans to perform small tasks, and then the computer will store the information as the answer for users to access.</div>
                                    <div class="tab_header">Citizen Sciences</div>
                                    <div class="paragraph">Another field where researchers can get information from people is through citizen science. What even is citizen science? Citizen science is where people participate in scientific research. This can range from reporting on the weather or the current news. What this does is update researchers on the current occurrences to then be shared with many users. Citizen sciences can also ask people to organize information so that others can view the information in an ordered fashion.</div>
                                    <div class="paragraph">People can contribute to computer processing power and resource power to calculate numbers for various companies and projects. These applications check to see how much CPU is needed for the user and uses the rest of the processing power is used for helping the companies that you wish to provide computing power.</div>
                                    <div class="paragraph">Solutions to various problems might not be possible for everyone to solve but sometimes some people can solve the problems. This system is known as the open innovation platform which seeks problem solvers on the internet. Often you will see organizations can post their problems on these sites and people online will try to solve these problems. Usually however solves these problems gets rewarded with money from the company.</div>
                                    <div class="tab_header">Sensors</div>
                                    <div class="paragraph">Many devices connected to the internet are simple sensors sending information to other devices. Things like your smartphone have many sensors like the camera or GPS sensor.</div>
                                    <div class="paragraph">There are many different kinds of sensors so let's talk about them. But first, we need to understand what exactly a sensor is. Sensors are low-powered devices that detect something in the environment and send the data to another device. Sensors tend to be connected to networks wirelessly in general.</div>
                                    <div class="paragraph">First, let's talk about acoustic sensors. These sensors record vibrations or sound of the environment, sometimes filtering out background noise.</div>
                                    <div class="paragraph">Then we have visual sensors which refer to cameras. Cameras use optical sensors to capture visual information from their lenses. These sensors can also capture different types of light that humans can’t see like microwaves or ultraviolet light. A good example of a security cam looking at a light we can’t see would be Security cameras, as they look at infrared light at night to see in the dark.</div>
                                    <div class="paragraph">We then have weather sensors which consist of things like thermometers that keep track of the temperature. Other sensors can keep track of water in the air and wind speed and more.</div>
                                    <div class="paragraph">Finally, we have positioning sensors, which keep track of the location. The GPS uses many satellites that figure out your coordinates on earth. Other positioning sensors work inside buildings to keep track of where objects are in a shipping plant or other locations.</div>
                                    <div class="paragraph">Sensor networks are groups of sensors that each have different functions, but they send their data to a central location from which the data can be viewed. You will mainly find sensor networks used for things like home security, monitoring the environment, surveillance, and earthquake detection.</div>
                                    <div class="paragraph">Home security is used to detect an intruder. The sensors work together to detect if someone is in your house like checking if the windows are open if the door ever got open and more.</div>
                                    <div class="paragraph">Farmers and researchers need to monitor the environment to get the best crop yield. They need to check things like temperature, water quality, and more.</div>
                                    <div class="paragraph">Cities also use sensor networks for things like surveillance systems to watch for criminals on their cameras. This is because police can’t be everywhere so the cameras send their video data to a central server so that the recordings can be recorded.</div>
                                    <div class="paragraph">Finally, there is earthquake detection where the sensors are placed around the globe. These stations have the main earthquake sensors which check to see if there is vibration in the earth.</div>
                                    <div class="paragraph">Some devices and structures are considered smart but what does this mean exactly? Well for something to be called smart it needs to be able to collect data from its surroundings then using this data to make an intelligent decision on what the devices should do. So let's take a look at some examples of infrastructures that are considered smart.</div>
                                    <div class="tab_header">Smart Buildings</div>
                                    <div class="paragraph">Smart buildings are a simple example of an infrastructure that is considered smart. Normal buildings would simply be the walls and floors. A smart building uses technology and sensors to collect data from its environment and perform an action as a result of its environment. A smart building might turn on the heater if the temperature gets too low or turn on the air conditioner if the temperature is too hot. It can also turn off the lighting if it detects that there is little light present in the building due to night time. Smart buildings can do more like detecting if someone is present in the room or not and more.</div>
                                    <div class="tab_header">Smart Transportation</div>
                                    <div class="paragraph">There is also smart transportation which can be very useful as many people drive on the roads all the time. So smart transportation looks at data regarding how many cars are on the street, using this data can detect how long it will take for a car to travel through certain roads to find the fastest route. The sensors can also use this traffic information to determine whether the light should be green or red to reduce traffic. Also taking into account whether the data can be used to determine if the speed limit should be decreased. This can also apply to trains, say if 2 trains were approaching an intersection at the same time, GPS systems can make decisions on which train should go first preventing conflicts.</div>
                                    <div class="tab_header">Smart Grids</div>
                                    <div class="paragraph">Because our world is now more technologically powered, we need the power to use these various technologies. We have smart grids that distribute power throughout the nation allowing for power to be more widespread. Because of this, if a region loses power, power from other locations can be rerouted to a location that doesn’t have power. The smart grid monitors the energy that gets transported to prevent outages. The sensors can automatically shut down areas of the grid to prevent damage to prevent damages.</div>
                                    <div class="paragraph">Because everything is more connected now than ever, it’s easier to attack the network to gain access. Even though there might be encryption and firewalls, it will always be subject to attack. Smart systems are easy targets as many devices are connected to the system allowing for easy access. Also, people make attacking a network easier because of bad passwords and more.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does crowdsourcing accomplish?",
                                              FindAnswer:["An easy way to create a knowledge database", "It allows for a computer to easily solve problems faster", "It is a networking protocol that works to help make the encryption process faster", "None of the above"], 
                                              rightAnswer:"An easy way to create a knowledge database"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the purpose of crowdfunding?",
                                              FindAnswer:["It is a way to raise funds for charitable, personal or business causes", "A method to securely pay people online", "A monthly fee that you need to pay in order to have full access to the internet", "A tool that allows you to boost peoples internet speed in various locations with a donation"], 
                                              rightAnswer:"It is a way to raise funds for charitable, personal or business causes"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a sensor?",
                                              FindAnswer:["A device that detects something in the environment and sends the data to another device", "A network of computers that send data to each other", "A group of computers that work together to solve problems at the same time to get solutions faster", "A device that tracks data as it goes throughout the internet"], 
                                              rightAnswer:"A device that detects something in the environment and sends the data to another device"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following are smart systems/devices?",
                                              FindAnswer:["Smart Transportation", "Smart Grid", "Smart Building", "All of the above"], 
                                              rightAnswer:"All of the above"
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

export default Unit8Lesson2;