import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit7Lesson1 extends React.Component {
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
                        <div class = "lesson_title grow">Introduction to Online Data Security and PII </div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The internet sends a massive amount of data through its network. So what kind of data flows through the internet? Well, the data can be numbers based on the temperature, it can be categorial like genres. However, one of the most useful data types is Person Identifiable Information (PII) data which stands for personally identifiable information. This means data like your name, or address, basically any data that can identify who you are. This kind of data is used in various places like youtube for example that keeps track of the videos you watch to recommend certain products through ads.</div>
                                    <div class="paragraph">Our Person Identifiable Information is very sensitive information that can be dangerous in the wrong hands. We let companies use it but we can be certain that they won’t make this information public or prevent hackers from stealing people's personal information.</div>
                                    <div class="paragraph">So what security measures are in place to prevent attackers try to steal people's information?  What is encryption and how is it used to keep PII data safe, how we identify someone’s identity before giving them PII, and finally how these encryption methods are used in TLS and HTTPS protocols.</div>
                                    <div class="paragraph">Direct information that can identify an individual is things like their name, social security number, or biometrics which consists of things like fingerprints.</div>
                                    <div class="paragraph">Indirect information can be pieces of information that might not completely identify a person but could lead to a way to identify someone. This can include things like phone numbers which won’t 100% identify a person but can tell where someone lives. Other examples include Age, Race, Where you live, and more.</div>
                                    <div class="paragraph">Sometimes however it's not very easy to decide which is PII, for example, let's take a look at an IP address. While it doesn’t identify an individual, it can be used to figure out where a computer is located. Sometimes PII that can link to people might be more difficult to identify because things like timestamps of posting online can let someone know what time zone you might live in or see data in a photo that can give more information of your whereabouts away.</div>
                                    <div class="paragraph">Sometimes, hackers can steal people's PII which is known as a data breach. This means that hackers can pretend to be you to access bank accounts and more to make unauthorized purchases. So because of this, laws are in place to monitor how various organizations store information. So as users it's a good idea to provide PII when it's needed and don’t give out very sensitive information like Social security numbers. Also, it's important that whatever you post online is considered before you post it because the information in a post can indirectly link to you.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following is an example of Personal Identifiable Information?",
                                              FindAnswer:["Name", "Address", "Fingerprints", "All of the Above"], 
                                              rightAnswer:"All of the Above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the right definition of Direct information?",
                                              FindAnswer:["Personal information tends to be very unique to 1 person and can identify someone", "Personal information can lead to someone but is not very unique", "Information computers use to directly connect with each other", "Information to make sure packets that are sent through the internet directly are encrypted"], 
                                              rightAnswer:"Personal information tends to be very unique to 1 person and can identify someone"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a data breach?",
                                              FindAnswer:["When hackers steal people’s personal identifiable information", "When data that is getting sent from one device to another gets corrupted", "Data that is encrypted incorrectly so that the receiver can’t decode the encrypted data", "None of the above"], 
                                              rightAnswer:"When hackers steal people’s personal identifiable information"
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

export default Unit7Lesson1;