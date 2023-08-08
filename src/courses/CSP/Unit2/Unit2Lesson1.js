import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson1 extends React.Component {
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
                                    <div class="paragraph">The internet is the open network of various computers that are interconnected so that they can send data to each other. These can be things like videos, messages, and emails. Any device can connect to the internet’s network as long as the device follows the rules.</div>
                                   

                                    <div class="tab_header">Protocols</div>
                                    <div class="paragraph">Protocols which are essentially the rules keep track of what type of communication is maintained between devices</div>
                                    <div></div>
                                    <div class="paragraph_NI">There are 5 main protocols that a device needs to access the internet:</div>
                                    <ul>
                                        <li><b>HTTP and DNS Protocols</b>: These protocols are what run the world wide web, these protocols are what your browser uses to load a website.</li>
                                        <li><b>TLS Protocol</b>: This protocol exists to prevent people from looking at private data by encrypting your data</li>
                                        <li><b>TCP or UDP Protocol</b>: This protocol is essentially what moves bunches of data from one device to another and makes sure there are any problems through the process.</li>
                                        <li><b>IP</b>: This protocol is what IDs your device with a unique IP address. This IP address allows for data being sent to a device to be sent to a specific IP address associated with a device.</li>
                                        <li><b>Wires and wireless Protocols</b>: This protocol refers to the actual connection between devices as well as wireless connections where signals are converted to binary data.</li>
                                    </ul>

                                    <div class="tab_header">IP Address</div>
                                    <div class="paragraph">Let's take a closer look at IP addresses as it is one of the most important aspects of the internet when considering the connection between various devices sending data to each other.</div>
                                    <div class="paragraph">IP stands for internet protocol.</div>
                                    <div class="paragraph">An IP address is very similar to your home addresses. When you want to send a letter or package to someone, you have to mention what specific address you want to send the package to. In a similar sense, your computer has a unique address that allows you to receive specific data from someone else. When you want to send data to another person, you have to specify the IP address of the person your sending the data to.</div>
                                    
                                    <div class="paragraph">There are 2 different internet protocols, IPv4 and IPv6.</div>
                                    <div class="paragraph">IPv4 is the first version of the internet protocol that has 4 billion possible IP address combinations. The IP address is split into 4 parts separated by periods and each value is a number between 0 and 255. This is so that the computer can store the data in binary with 8 bits of data for each segment.</div>
                                    <div class="paragraph">But because there are now more than 4 billion people using the internet, we need IPv6. With IPv6, there are 8 different segments of numbers but this time the numbers are based on hexadecimal values meaning there are 16 different numbers you can put into one slot and one slot has 4 spaces. Some values in hexadecimal are represented with letters.</div>
                                    <div class="paragraph">There are now much more possible IP addresses with IPv6. Each 4-digit hexadecimal number can range between 0 and 65,535. Now multiply this by 8 so there are roughly 340,000,000,000,000,000,000,000,000,000,000,000,000 different combinations</div>
                                    <div class="paragraph">You can simply check your IP address by googling it because your computer sends information to google and therefore it will know your IP address. Your IP address can change which is called a dynamic IP address. Different wifi networks provide different IPs. </div>
                                    <div class="paragraph">But with static server-based computers, will tend to have a static IP because it will make it easier for people to connect to the website</div>
                                    <div class="paragraph">IP addresses are also hierarchical allowing data to be transferred quicker. IP addresses are broken up into parts where certain portions of the address indicate certain things. For example, the first 2 segments of numbers in an IP address can represent the network provider and the other 2 segments of numbers are unique. Once again this is done to make data transfer between 2 devices more streamlin
</div>
                                    



                                                                     
                                   

</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What exactly is the internet?",
                                              FindAnswer:["The internet is something that ID’s devices with a unique address", "The internet is where you store your computers local data so that you can access it at any time", "The internet is the open network of various computers that are interconnected so that they can send data to each other", "None of the above"], 
                                              rightAnswer:"The internet is the open network of various computers that are interconnected so that they can send data to each other"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is a protocol?",
                                                FindAnswer:[ "Protocols are essentially the rules that keep track of what type of communication is maintained between devices", "A device that maintains connections between 2 devices", "A software service that allows users to put data online so that others can see", "None of the above"], 
                                                rightAnswer:"Protocols are essentially the rules that keep track of what type of communication is maintained between devices"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following is not one of the main protocols needed to access the internet?",
                                                FindAnswer:[ "HTTP and DNS Protocols", "TCP or UDP Protocol", "Wires and Wireless Protocols", "Hard drive protocol"], 
                                                rightAnswer:"Hard drive protocol"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the purpose of the Internet Protocol (IP)?",
                                                FindAnswer:[ "This protocol is what IDs your device with a unique IP address. allowing for data being sent to a device to be sent to a specific IP address associated with a device", "This protocol is what encrypts your data when it is sent throughout the internet to keep it safe", "This protocol maintains connections between 2 devices to make sure they have a connection with each other", "This protocol is what runs the world wide web, your browser uses it to load a website"], 
                                                rightAnswer:"This protocol is what IDs your device with a unique IP address. allowing for data being sent to a device to be sent to a specific IP address associated with a device"
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

export default Unit2Lesson1;