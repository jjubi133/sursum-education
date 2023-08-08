import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson6 extends React.Component {
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
                        <div class = "lesson_title grow">Transporting packets</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">As you might already know, the Internet Protocol (IP) deals with how messages and various sorts of data are divided into packets that will get sent to their destination traveling from router to router.</div>
                                    <div class="paragraph">However, the internet protocol doesn’t control all of the problems that may arise when sending packets to destinations.</div>


                                    <div class="tab_header">Problems when transporting packets</div>
                                    <div class="paragraph">Some of these problems include sending many messages to a certain location. The recipient needs to identify which packets are part of which message. Another problem is that the packets can arrive at the destination out of order. This mainly can happen if the packets take different paths to reach the destination. In this case, the recipient has to know what order the packets were meant to come and then piece them together to get the message.</div>
                                    <div class="paragraph">Packets can also become corrupted meaning that received data doesn’t match the original data that was sent meaning that the message is lost and it is nearly impossible to recreate the message. This can happen if even one packet ends up corrupted. Packets can also get duplicated on accident if there is a transmission of the same packet at the same time.</div>

                                    <div class="tab_header">Protocols of Packet Transfer</div>
                                    <div class="paragraph">Now, this seems like quite a lot of problems that can arise when transferring packets. Luckily some protocols can deal with these problems. This includes the Transmission Control Protocol (TCP) which is used most often on top of the internet protocol and has methods to order packets, retransmit packets, and maintain data integrity. </div>
                                    <div class="paragraph">There is also User Datagram Protocol which is an alternative protocol to TCP that doesn’t fix as many problems as TCP but can offer faster data transport. User Datagram Protocol (UDP) is an alternative protocol that solves fewer problems but offers faster data transport so applications use either protocol based on the needs of the application. UDP provides a mechanism to detect corrupt data in packets however it won’t try to solve other problems that might show up like packet loss or packets being out of order.</div>
                                   
                                                                   
                                    <div class="tab_header">Packet formatting</div>
                                    <div class="paragraph">There is a certain formatting present with UDP. The IP packet will contain a header that has certain data sections. Each section contains an 8-byte header and then variable-length data.</div>
                                    <div class="paragraph">The first 4-bytes of the header are for storing the port numbers which are for the source and destination. These ports help distinguish the various types of network traffic. The next 2 bytes of the header store the length of the segment in bytes including the header.</div>
                                    <div class="paragraph">And the final 2 bytes of the header are for the checksum, which is used by the sender and receiver to check to see if there is data corruption. The sender computes the checksum based on the data in the segment then stores the computed checksum in the final 2 bytes. Then the segment is received by the recipient, the checksum is computed based on the segment that gets received. Then the checksums are compared to each other and if they don’t match, then the data is corrupted. The recipient can’t use the computed checksum to create the original data so the packet will just get discarded. This is the general process of how checksums are used to detect corrupted data.
</div>
                                    <div class="paragraph">There is also certain formatting present with TCP known as the TCP segment. The header in the TCP segment can range from 20 bytes to 60 bytes of data depending on the size of the options field. The TCP header is similar to the UDP header for the port number of the source and destination and the checksum.</div>
                                    <div class="paragraph">As you might already know, the Internet Protocol (IP) deals with how messages and various sorts of data are divided into packets that will get sent to their destination traveling from router to router.</div>



                                    <div class="tab_header">Sending packets with TCP</div>
                                    <div class="paragraph">So let's look at the process of sending packets with TCP.</div>
                                    <div class="paragraph">First, there needs to be a proper connection between 2 computers that want to send data to each other. This is done with the 3-way handshake in which 3 pacers are sent that doesn’t include data. Then once the computer completes this handshake, the actual data is ready to get transferred.</div>
                                    <div class="paragraph">Then when the data packets are sent, the recipient acknowledges that they have gotten the packets. So the first computer sends the packet with a sequence number and the second computer increases the number by the length of the received data. This allows for the computer to make sure data is received and which one is sent twice or lost.</div>
                                    <div class="paragraph">Finally, either computer can close the connection when they no longer want to send or receive data.</div>

                                    <div class="tab_header">Detecting Packet loss</div>
                                   <div class="paragraph">So let's see how TCP detects packet loss. TCP connections do this by using a timeout. The sender starts a timer after sending a packet and puts the packet in the retransmission queue. But if the timer runs out before there is an acknowledgment, the packet gets sent once again. The user might receive duplicate packets but it's better than no data as the duplicate can be deleted.</div>
                                    <div class="paragraph">TCP can also determine if packets are out of order by using the sequence and acknowledgment numbers.</div>
                                    <div class="paragraph">So when the receiver has a higher sequence number than the current acknowledged, there is likely a missing packet in between. In this case, the recipient tells the sender something is missing by sending an acknowledgment number that is set to the expected sequence.</div>
                                   <div class="paragraph">While in other cases, the packet might be lost so the sending has to send it again. In these cases, the recipient deals with out of order packets and they use the sequence numbers to correctly put the data from the packets together in the right order.
</div>



                                   </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What are some of the issues that can arise when dealing with transporting packets?",
                                              FindAnswer:["The packets can take too long when being sent over the internet if there is a bad connection", "There are circumstances where multiple messages might get sent to a recipient", "All of the above", "None of the above"], 
                                              rightAnswer:"There are circumstances where multiple messages might get sent to a recipient"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following is not a step for How are packets sent through TCP?",
                                                FindAnswer:[ "There needs to be a proper connection between 2 computers that want to send data to each other", "Either computer can close the connection when they no longer want to send or receive data", "When the data packets are sent, the recipient acknowledges that they have gotten the packets. This allows for the computer to make sure data is received and which one is sent twice or lost", "The 2 computers perform load testing to make sure there is a stable connection with each other to acknowledge that they are ready to send packets with each other"], 
                                                rightAnswer:"The 2 computers perform load testing to make sure there is a stable connection with each other to acknowledge that they are ready to send packets with each other"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What method do TCP connections use to determine packet loss?",
                                                FindAnswer:[ "TCP connections check the connection between 2 devices and if there is a moment of connection loss, it determines there is packet loss", "TCP connections do this by using a timeout that will determine that there is packet loss if there is a timeout", "TCP connections check to see if various routers have received all the packets that are being sent and if something is missing it will determine there is packet loss", "TCP connections cannot determine packet loss"], 
                                                rightAnswer:"TCP connections do this by using a timeout that will determine that there is packet loss if there is a timeout"
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

export default Unit2Lesson6;