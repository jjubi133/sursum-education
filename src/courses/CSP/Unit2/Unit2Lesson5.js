import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson5 extends React.Component {
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
                        <div class = "lesson_title grow">Routing with redundancy</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">As you might already know, the Internet is the place where many different types of devices can send various kinds of messages and data to other devices. These messages can vary from being very small simply checking if a device is online to loading entire websites.</div>
                                    <div class="paragraph">But there is a limit to the message and how much data can be sent at once. This is where there are so many network protocols that will split messages into many packets. Each of the IP packets contains a header that is about 20 to 24 bits long and the data which can vary in length. The header will include the IP addresses of both the sender and recipient and other data that identifies the packet route. Then the actual data includes things like the text and other data of the webpage.
</div>


                                    <div class="tab_header">Packets sent through the internet</div>
                                    <div class="paragraph">Computers split messages into packets and those packets hop from router to router on the way to their destination:</div>
                                    <div class="paragraph">So now let's go over this process of packets getting sent.</div>
                                    <div class="paragraph">So first the packet is sent to the router, remember, the router is a computing device that is used in computer networks that help move packets.</div>
                                    <div class="paragraph">Next, the router receives the packets and then the router will look at the header of the packet. This is important because it contains the recipient's IP address so the router will know where to send the packet.</div>
                                    <div class="paragraph">Now the router moves the packet through the network sending it to routers that are closer to the final destination of the packet. Now finally the final router sends the message to the recipient that is if everything goes well. This is how the destination IP address can send data between a computer and another server.</div>
                                    <div class="paragraph">Remember it is important it is the packets that get sent from router to router to reach the intended target.</div>

                                    <div class="tab_header">Redundancy</div>
                                   <div class="paragraph">Packets have many paths they can take to reach their destination, this is more possible because the many paths increase the redundancy of the network.</div>
                                    <div class="paragraph">Redundancy is the inclusion path that isn't needed for the network to function but if one path isn’t functioning, the other routers can be used to transfer packets to the destination.</div>
                                    <div class="paragraph">So why is redundancy important at all? Well, it means that if connections to certain locations fail, there are alternate routes to allow for data to reach their intended destination. The redundancy of the paths in the network increases the number of possible ways that a packet can reach its destination down the fastest path even if some paths are blocked.</div>
                                   
                                    <div class="tab_header">Redundancy and the internet</div>
                                    <div class="paragraph">The internet is an extremely large network with many components that make it up. It is also true that some of these components can stop functioning at any time and they do stop functioning from time to time. But the internet hasn’t been halted because of these inconveniences. This is because the internet has fault tolerance as it has redundancy in the networks routing paths. The redundancy of the internet meaning that the system will be able to send packets from place to place allows the internet to stay up and running meaning it has fault tolerance.</div>
                                    <div class="paragraph">There might be slight internet slowdowns as a result of more traffic in certain locations but this is much better than having the internet completely shut down.</div>



                                   </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Why are messages split into many individual packets?",
                                              FindAnswer:["Because sending large messages at once increases latency", "This is because there is a limit to the amount of data that can be sent once", "If corruption in one large packet occurs, the whole packet must be sent again.", "All of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What are the typical contents of an IP Packet?",
                                                FindAnswer:[ "IP packets contain a header that will be about 20-24 bits long and the data of the packet can vary in length", "The header contains the IP addresses of the sender and receiver of the packet while the remaining data specifies the route", "The other data that the packet contains is actual data for things like the text or data for a website", "All of the above"], 
                                                rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following is not a step for a packet to get sent?",
                                                FindAnswer:[ "The packet gets sent through the network traveling from router to router and a message is sent to the recipient", "The packet gets sent to the main parts of the internet to make sure the packet is safe to be sent", "The router receives the packets and the router reads the header to know where to send the packet", "The packet will get sent to the router, the router once again is the device that is used in computer networks to move packets"], 
                                                rightAnswer:"The packet gets sent to the main parts of the internet to make sure the packet is safe to be sent"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Why is redundancy in networks important?",
                                                FindAnswer:[ "The redundancy of the paths in a network allows for more ways that a packet can reach its destination", "They make sure the quality of data being sent remains intact", "Redundancy makes sure that packets don’t accidentally duplicate when they are being sent", "None of the above"], 
                                                rightAnswer:"The redundancy of the paths in a network allows for more ways that a packet can reach its destination"
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

export default Unit2Lesson5;