import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit7Lesson3 extends React.Component {
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
                        <div class = "lesson_title grow">Cyber Attacks</div>
                        <div class = "tabs">
                            <Tabs>

                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Since the web contains many individuals' data there are numerous security instruments set up to ensure that information stays safe. In any case, people can be reckless now and then with their information or access to their PC in which case it's harder for these instruments to help.</div>
                                    <div class="tab_header">Phishing Attack</div>
                                    <div class="paragraph">A phishing attack where the user is fooled into giving somebody their private data.</div>
                                    <div class="paragraph">A phishing attack commonly begins with an email that claims to be from an authentic site, similar to a financial site or online store. An email may profess to be from a specific bank organization and afterward, they will lure the user to enter their data or they get sent to a site that looks remarkably similar to the original site. If the user filled in login data, the attackers would then be able to utilize the data to sign in to the genuine site and cause damage.</div>
                                    <div class="paragraph">Phishing messages will frequently come from email addresses that aren’t sent by the actual organization. The email might claim that it's from one organization when in reality it's fake. Sometimes attackers can get authentic email addresses and ask you to send your personal information so it's not 100% assurance.</div>
                                    <div class="paragraph">These emails also will often tell you to visit a website with a URL that looks real when in reality it isn't. The domain of the website might have some slight variations compared to the real website. The top-level domain can also be different like instead of .org it could be .com for the scam website. Scammers also try to mask the HTML of the website so that the link of the website looks different from the destination.</div>
                                    <div class="paragraph">Phishing emails will tend to ask for a user to give them personal information or fill our forms. Companies don’t request users' information once an account is created. The emails tend to scare the user into responding quickly to their emails with urgency saying that their account might get locked if they do nothing.</div>
                                    <div class="paragraph">So what should you do to deal with a phishing attack? Well sometimes the emails might seem fake or legit, but you shouldn’t click attachments as that can lead to your computer getting malware on it. Checking to see if the email is real is a good idea as well to prevent getting affected by a phishing attack.</div>
                                    <div class="paragraph">There is also another kind of phishing attack called spear-phishing where the phisher will look at the preferences of the user and see what they are interested in and send an email that would appeal to that individual.</div>
                                    <div class="tab_header">Rogue Access PointsWithin our homes, we regularly use the Internet through a wired connection. So another method that can be used to connect to the internet when a wired connection is not an option is through an access point. Wired connections with the Internet are the main way access points work but then the access point shares it wirelessly with other devices. For the most part access points are built into routers to send out radio signals to devices wirelessly.</div>
                                    <div class="paragraph">Within our homes, we regularly use the Internet through a wired connection. So another method that can be used to connect to the internet when a wired connection is not an option is through an access point. Wired connections with the Internet are the main way access points work but then the access point shares it wirelessly with other devices. For the most part access points are built into routers to send out radio signals to devices wirelessly.</div>
                                    <div class="paragraph">So when we talk about rogue access points, this refers to access points that were installed on a network without the owner's permission which allows the attacker to intercept data that goes through the network. There are 2 main ways PII can get intercepted by attackers through rogue access points, this includes passive interception and active interception.</div>
                                    <div class="paragraph">With passive interception, the access point can simply read the data but can’t alter it such as when a user enters their password on a site, the access point can read it. Passive interception can also track your internet activities to see what sites your visiting.</div>
                                    <div class="paragraph">Active interception is like passive interception but the data can be manipulated. This means that if someone sends an email to another person, the attacker can modify the data of the email before it gets sent to the recipient.</div>
                                    <div class="paragraph">Rogue access points tend to be a major problem in locations with public wifi so you should be careful connecting to public networks. VPNs or HTTPS can also be used to encrypt the data across the data so even if the access point gets the data, they won't be able to decrypt it.</div>
                                    <div class="tab_header">Malware</div>
                                    <div class="paragraph">What is Malware? Well, Malware is software that gets installed onto a person's computer without their knowledge and will constantly try to steal users' personal information to try to make money. But there are many ways to keep your devices safe from malware.</div>
                                    <div class="paragraph">There are many different kinds of malware. A notable kind of malware is known as a trojan horse which is a program that is perceived as a real program and once downloaded by an unsuspecting victim it will start to attack.</div>
                                    <div class="paragraph">Another known kind of malware is a virus that duplicates itself and has code that copies itself into other system files and it may hide in code of real legitimate programs.</div>
                                    <div class="paragraph">The next kind of malware is called a worm that also duplicates itself like a virus but instead, it makes copies of itself that get sent to other computers on the network. The work travels through network protocols like emails. Worms aren’t that harmful but they can mess with the network by taking up bandwidth.</div>
                                    <div class="paragraph">So what can malware do to a user or their computer?</div>
                                    <div class="paragraph">First spyware steals data from a user and then sends that data to the malware creator, things like keyloggers which keep track of what a user types including passwords.</div>
                                    <div class="paragraph">Next is adware which displays advertisements to the user which usually gives the malware creators money.</div>
                                    <div class="paragraph">There is ransomware that can lock your computer or certain applications or encrypting user data and then demanding for the user to pay money to the creators.</div>
                                    <div class="paragraph">Finally, there is crypto mining malware which is relatively new but it simply installs software that uses the computer's power to mine for cryptocurrency allowing the creators to earn money using someone else’s computer power.</div>
                                    <div class="tab_header">Protecting Against Malware</div>
                                    <div class="paragraph">So how can we protect our data and computer from malware?</div>
                                    <div class="paragraph">Well, we can first get security patches from applications which are updates of the code of the application or the operating system that fixes bugs that malware tries to exploit. So updating your software can help prevent malware attacks.</div>
                                    <div class="paragraph">A firewall is another system that you can use to prevent malware attacks. Firewalls monitor internet traffic going and leaving your computer and determine what data to allow through keeping the computer safe.</div>
                                    <div class="paragraph">Finally, there is antivirus software that will constantly check files to see if there is malware. The antivirus software will help the user delete or fix infected files from malware but it is important to update antivirus software so the antivirus software will be prepared for new malware threats.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What do phishing attacks commonly begin with?",
                                              FindAnswer:["An email that claims to be from an authentic site", "An error message", "Your computer monitor goes black", "A windows blue screen"], 
                                              rightAnswer:"An email that claims to be from an authentic site"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a trojan horse?",
                                              FindAnswer:["A program that is perceived as a real program and once downloaded by an unsuspecting victim it will start to attack", "A kind of malware that duplicates itself and has code that copies itself into other system files hiding in legitimate programs", "Malware that duplicates itself sending the malware to other computers on the network", "All of the above"], 
                                              rightAnswer:"A program that is perceived as a real program and once downloaded by an unsuspecting victim it will start to attack"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does a firewall do?",
                                              FindAnswer:["Updates the code of the application or the operating system that fixes bugs malware tries to exploit", "Monitors internet traffic going and leaving your computer and decides what data to accept", "Will constantly check files to see if there is malware", "None of the above"], 
                                              rightAnswer:"Monitors internet traffic going and leaving your computer and decides what data to accept"
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

export default Unit7Lesson3;