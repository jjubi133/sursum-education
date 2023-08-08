import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit8Lesson1 extends React.Component {
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
                        <div class = "lesson_title grow">Communication and Collaboration Innovations</div>
                        <div class = "tabs">
                            <Tabs>

                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Decades ago, there wasn’t much technology around to allow people to talk with each other over long distances except for things like mailing letters and telegrams.</div>
                                    <div class="paragraph">Computers and the internet changed this making it possible to talk with others across the globe. It has become much simpler to update people on what you are doing through things like social media so let’s see how computers make this possible.</div>
                                    <div class="tab_header">Email</div>
                                    <div class="paragraph">One of the first methods of long-distance communication is email. Email first began as a simple way to message people online if you had their email address to send the message to. But now email has advanced having protocols for forwarding, replying and CCing became more standard as companies soon realized how useful email was leading to the formation of G-mail and Hotmail.</div>
                                    <div class="paragraph">Eventually, systems like spam emails were put into place as advertisers use emails to advertise products, and emailing services can often put this junk mail in a separate section to be deleted. Junk mail can sometimes contain viruses that can cause damage to your computer which is another benefit of this system.</div>
                                    <div class="paragraph">Email also has the added benefit of privacy when sending messages. This means that if someone attacked the email’s web servers, the emails wouldn’t be exposed as they are encrypted. Encrypting emails means that the admins can’t read the emails keeping the user’s privacy.</div>
                                    <div class="tab_header">SMS</div>
                                    <div class="paragraph">What even is SMS and what does it stand for? SMS stands for short message service and is typically used between mobile phones. SMS usually requires that the messages have some character limit so you can’t send paragraphs to another person. This is because phone networks have limited bandwidth so having a character limit reduces bandwidth overuse.</div>
                                    <div class="paragraph">SMS also has the option of allowing people to send images and other data other multiple people. SMS might seem like a worse version of email but the main benefit of SMS communication is that you don’t need the internet to use SMS but rather cellular networks. At the early stages of SMS, it was meant for communication between 2 people similar to email but now has the option of being used by many people.</div>
                                    <div class="tab_header">Social Media</div>
                                    <div class="paragraph">Let's talk about Twitter as our example of social media and communication. At first, Twitter was meant as a means for someone to update your current status with other people. Twitter allows you to follow people to see what they were doing.</div>
                                    <div class="paragraph">Twitter and other social media platforms don’t make the other person to follow back as it was a one-sided system. This system appears on platforms like youtube where you can subscribe to someone but that doesn’t make them have to subscribe back. You can communicate what you're doing or thinking with others easily with the system.</div>
                                    <div class="paragraph">Social media can be a great way to connect with friends as well as spreading information to gain attention. This means that news that can be found in newspapers can now be easily found on social media due to the popularity of social media and the number of users.</div>
                                    <div class="paragraph">The content you see on social media is also more related to what you think and are interested in. Various researchers and companies want to see your interests so they can present you with ads that might appeal to you more.</div>
                                    <div class="paragraph">Social media has different privacy settings such as having certain content being viewable by only friends and content viewed by anyone. Users typically keep their posts private or public which shares their data with more people.</div>
                                    <div class="paragraph">There can be risks of posting online to a very wide audience.</div>
                                    <div class="paragraph">An attacker can use Personal Identifiable Information revealed in public posts to steal people's identities or hack into their accounts. It's also possible to find geolocation information which is data on where someone is located.</div>
                                    <div class="paragraph">Social media has the power to build someone’s reputation but it can destroy it simply with a bad post as people online pass judgment fast. So companies sometimes work with people to make their social media presence better.</div>
                                    <div class="paragraph">People who post things that can be considered offensive can and have lost job opportunities because employers can look at someone's posts.</div>
                                    <div class="paragraph">Due to the risks of social media, you might consider deleting posts and getting rid of personal information online. Well, the good news is you can as most social media platforms allow you to delete various posts or entire accounts.</div>
                                    <div class="paragraph">However, once something is online, it is nearly impossible to get rid of 100% because many copies can exist. But why is this the case?</div>
                                    <div class="paragraph">Well, it can mainly be because of web archiving services that make copies of all the pages on the web. These services then allow people to browse vast amounts of data that the services saved. Automated bots may copy pages they see online. Also, other uses can take screenshots and share posts making it much harder to get rid of them online.</div>
                                    <div class="tab_header">Online Group Chat</div>
                                    <div class="paragraph">The group chat was first created in the 1970s. The main idea of these chats as the name suggests is to grant each person a place to type and another panel where they can see what others say. These chats are not excellent for talking with others, they are also used for business operations making it so that employees can talk with each other quickly.</div>
                                    <div class="tab_header">Video Calls</div>
                                    <div class="paragraph">Eventually, technology changes allowed it so that people could be able to talk with others with the video feed allowing for face-to-face conversations. Companies started using video calls more to share their screens as well as to present slides and have many people participate in meetings and conferences.</div>
                                    <div class="tab_header">Collaborative Software</div>
                                    <div class="paragraph">Collaborative software allows multiple users to work on the same projects at the same time. This means that a group of people can have access to the same file or presentation at the same time. This allows people to add build on each other’s ideas giving everyone a chance to change parts of a file.</div>
                                    <div class="paragraph">So how exactly is this possible? Well, it is possible with something called cloud computing. This is where an online service hosts software to allow people to work on software together and data of the file gets stored on the cloud. But what exactly is the cloud, is it what we see in the sky? In this case, The Cloud is an internet-connected data center and servers which makes it possible for people to work on the same file at the same time as long as they connect to the data centers with their computer.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Why are emails encrypted?",
                                              FindAnswer:["If someone were to attack email web servers, the hacker can read the data of the email", "So that it can speed up the process of sending emails between people", "So that 2 computers can establish a proper connection with each other", "None of the above"], 
                                              rightAnswer:"If someone were to attack email web servers, the hacker can read the data of the email"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the reason that SMS has a limit to the number of characters you can send in a message?",
                                              FindAnswer:["Phone networks have limited bandwidth", "Because no one likes receiving paragraph long SMS messages", "They prevent spam messages", "The creators of SMS designed it so that you can’t send more than a certain amount of characters at once"], 
                                              rightAnswer:"Phone networks have limited bandwidth"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Why is it nearly impossible to truly delete something from the internet?",
                                              FindAnswer:["Many copies can exist", "Web archiving services which make copies of all the pages on the web and allow people browse vast amounts of data", "Also automated bots may copy pages they see online", "All of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What system allows for collaborative software to work?",
                                              FindAnswer:["Cloud Computing", "Wide Area Network", "Distributed Computing", "Router Systems"], 
                                              rightAnswer:"Cloud Computing"
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

export default Unit8Lesson1;