import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson4 extends React.Component {
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
                        <div class = "lesson_title grow">Scalable systems</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The internet has roughly about 4.5 billion users. The internet is scalable to compensate for this meaning that it can function well even if many people are using it at once. So what are the benefits of having the internet be scalable?</div>
                                 
                                    <div class="tab_header">Scalable system</div>
                                    <div class="paragraph">First, any device can send data through the internet as long it has the protocols, the protocols are not owned by anyone as they are open meaning that you simply have to have them available. Many possible IP addresses can be used so there will be plenty of IPs left for devices to connect.</div>
                                    <div class="paragraph">Finally, the routing is dynamic meaning that new routers that join the internet can move data through the internet.</div>

                                    <div class="tab_header">Issues with Scalable systems</div>
                                    <div class="paragraph">So what are the downfalls of having the internet being scalable?</div>
                                    <div class="paragraph">First, the network has limited bandwidth so large data flows might be too much for low bandwidth connections to handle causing latency and packet loss.</div>
                                    <div class="paragraph">Also, routers have limited data they can transfer per second, sometimes if many people download things at once, there could be a bottleneck in the routers as they can't handle the data flow.</div>
                                    <div class="paragraph">Finally, there are limits to wireless routers as they can’t connect more than a certain number of devices to themselves so sometimes devices can connect.</div>

                                    <div></div>
                                    
                                   <div class="paragraph">Websites also running on the internet also have to be scalable. This is because many people are now using the internet so when many people join a website or application, there can be latency or the application might go down if there isn’t much scalability on the websites.</div>
                                    <div class="paragraph">So to prepare for their various spikes in user usage, engineers prepare by doing load testing by simulation high amounts of traffic in a short time to see if the application of systems fails. The load testing can show weakness in a system.</div>
                                    <div class="paragraph">Some systems are prepared for these extra surges of people as they are known to be scalable. But some systems have a fixed number of users that it can handle. The capacity varies but the systems vary as some are incredibly scalable while others are not. So when considering the design of a system, it is important to take into account scalability when doing so.</div>
                                   
                                   </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What are some of the benefits of having the internet being scalable?",
                                              FindAnswer:["Any device can connect to the internet if it has the necessary protocols to join", "There are many available IP addresses that devices that want to connect to the internet can use", "New routers can join the internet and therefore allow data to be transferred across the internet to reach other people", "All of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What are some of the disadvantages of having the internet being scalable?",
                                                FindAnswer:[ "There are many potential ways that certain points on the internet can have bandwidth limitations such as routers not being able to transfer data fast enough if many people install something", "The network can also be slow causing packet loss as routers have limits to how many people can connect to them so some devices might miss out", "All of the above", "None of the above"], 
                                                rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is load testing?",
                                                FindAnswer:[ "This is to test if the internet is running in a computer and your computer performs load testing whenever you start it up", "The process of adding excessive load to a system in a short time to see if the application will fail", "Load testing is a method that is used to test how much work your computer can do in a given amount of time", "None of the above"], 
                                                rightAnswer:"The process of adding excessive load to a system in a short time to see if the application will fail"
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

export default Unit2Lesson4;