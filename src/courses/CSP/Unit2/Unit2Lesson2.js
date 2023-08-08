import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">Introducing and Addressing the internet</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The internet is the largest computer network. As we know, computer networks are the grouping of various devices that can send data to each other The Internet is the world's largest computer network.</div>
                                   <div class="paragraph">The smallest and simplest network is the simple connection between 2 computers where they can share data. The main thing that you have to consider is that computers need to be able to understand each other and have some sort of physical connection to receive and send data.</div>
                                   <div class="paragraph">Adding more computers to the network will bring up complexities like how data should be sent through the network to send data to the intended recipient. The network needs a proper addressing scheme to identify each device in the network. </div>


                                    <div class="tab_header">Different kinds of networks</div>
                                    <div class="paragraph">There are many different kinds of networks that have different purposes and are better in certain circumstances. The most common type of network is called Local area network also called LAN for short. The Local area network is a network that covers a limited area such as a house and a school. The devices tend to be connected with an ethernet cable.</div>
                                    <div></div>

                                    <div class="paragraph">The next kind of network is called Wide Area Network also known as WAN. This network type is one that covers large amounts of area and consists of many Local area networks. For the most part, Wide area networks can only be accessed from telecommunication lines from various companies but no company owns the entire thing.</div>
                                    <div class="paragraph">The final kind is called Data center network which is as the name suggests, is used in data centers to transfer data at an extreme speed.</div>
                                    <div class="paragraph">Whenever computing devices are connected in a network, they need protocols to communicate with each other.</div>


                                    <div class="tab_header">Network Cables and Wireless connection</div>
                                    <div class="paragraph">There are 2 main cables are used to connect to a network or the internet, there are ethernet cables and then there are fiber optic cables. Ethernet cables are made of copper and are very common, it transfers data in binary to other devices and receives binary data as well. Then with fiber optic cables, there is no electricity being transferred instead the data is transferred through light. They also send binary data to and receive binary data. Fiber optic cables can transfer more data and are also laid on the ocean floor to transfer data worldwide.
</div>
                                    <div class="paragraph">There are also wireless connections where the wireless card inside a computer or laptop turns binary data into radio waves and sends them through the air. These waves can travel far. Then there is a wireless access point that turns the radio waves back into binary data.</div>
                                    <div class="paragraph">Each method of data transfer has its benefits and disadvantages and there are innovations in network connection being made.</div>
                                    

                                    
                                    <div class="tab-header">Network connections</div>

                                    <div class="paragraph">Network connections can send bits very fast. We measure that speed using the bit rate, the number of bits of data that are sent each second. Bit rate these days is measured in megabits per second</div>
                                    <div class="paragraph">We use the term bandwidth to describe the maximum bit rate of a system So if a network has a bandwidth of 10 megabits per second, then that's the maximum amount of data that can be transferred. Broadband internet refers to the minimum bandwidth of 256 kilobits per second which is enough for looking at emails but is very slow.</div>
                                    <div class="paragraph">The speed of a computer network is latency. Latency measures how late the bits arrive. Latency refers to the time it takes between sending data and receiving a message and it's measured in milliseconds. It is also called the ping rate</div>
                                    <div class="paragraph">Finally, there is internet speed which is the combination of bandwidth and latency. Because computers send data in bundles known as packets, they can’t send more packets when the first one isn’t received so even with high bandwidth, you can be limited in speed by latency.</div>
                                    

                                                                     
                                   

</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the world's largest computer network?",
                                              FindAnswer:["Hardware network", "The internet", "Software network", "Hypertext Transfer Protocol"], 
                                              rightAnswer:"The internet"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following are not one of the 3 main kinds of computer networks?",
                                                FindAnswer:[ "Local Area Network", "Wide Area Network", "Data Center Network", "Programming Network"], 
                                                rightAnswer:"Programming Network"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How do ethernet cables, fiber optic cables, and wireless connections transfer data between devices?",
                                                FindAnswer:[ "Ethernet cables transfer and receive binary data to other devices and it is done by radio waves. Fiber optic cables do the same thing but through electricity. Wireless connections do the same thing but through light", "Ethernet cables transfer and receive binary data to other devices and it is done through light. Fiber optic cables do the same thing but through radio waves. Wireless connections do the same thing but through electricity", "Ethernet cables transfer and receive binary data to other devices and it is done by electricity. Fiber optic cables do the same thing but through light. Wireless connections do the same thing but through radio waves", "None of these are correct"], 
                                                rightAnswer:"Ethernet cables transfer and receive binary data to other devices and it is done by electricity. Fiber optic cables do the same thing but through light. Wireless connections do the same thing but through radio waves"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is bit rate?",
                                                FindAnswer:[ "Bit rate refers to the maximum bit rate a system can handle or transfer", "Bit rate refers to the numbers to the number of bits sent from a device to another device in a second. Typically measured in megabits per second.", "Bit rate refers to how late bits arrive from the time they were sent from a device to when the message was received and it’s measured in milliseconds, also called ping rate", "None of the above"], 
                                                rightAnswer:"Bit rate refers to the numbers to the number of bits sent from a device to another device in a second. Typically measured in megabits per second."
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

export default Unit2Lesson2;