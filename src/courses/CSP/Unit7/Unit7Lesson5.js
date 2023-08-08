import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit7Lesson5 extends React.Component {
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
                        <div class = "lesson_title grow">Secure Internet Protocols and User Authentication Methods</div>
                        <div class = "tabs">
                            <Tabs>

                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Computers often send packets to other devices and through networks allowing for data to be sent. Sometimes this data can be simple while other times is private information like passwords and they need protection. This is where TLS or transport layer security comes in, it is a protocol that adds more security for these packets to be sent across the network similar to TCP protocols. There are more steps that the TLS protocol follows, often making latency increase but it increases protection so let's take a look at these steps for the TLS protocol.</div>
                                    <div class="tab_header">TLS Protocol</div>
                                    <div class="paragraph">First is the TCP handshake which is present because the TLS protocol is built on the TCP.</div>
                                    <div class="paragraph">Next, the TLS is initialized as the client asks the server for a TLS connection so that it can send the data in an encrypted format to keep the data more secure. The computer that sends information is the client and the computer that receives the information is the server.</div>
                                    <div class="paragraph">The server’s computer confirms the use of the TLS protocol unless it doesn’t support the protocol in which case the connection is stopped. But if there is a successful confirmation, there will be a confirmation message sent to the client that has a public key.</div>
                                    <div class="paragraph">Then the client will verify the certificate to see if the certificate is real or fake and if it is determined to be a fake, then no connection will be made.</div>
                                    <div class="paragraph">So now because the public key was given to the client, the public key can be used to encrypt the data so that the server can decrypt the data with the private key. This can take time so in most cases, the computer will encrypt a message with the public key and then use symmetric encryption with the public key for more data to be sent. The client will also send a finished message with this shared public key.</div>
                                    <div class="paragraph">Now the server confirms the shared key using the private key the server has to decrypt the finished message and if it doesn’t work then the connection is stopped but if it does then a finished message will be sent to the client.</div>
                                    <div class="paragraph">Finally, data can be sent between the client and server through the use of symmetric encryption and the public key.</div>
                                    <div class="paragraph">The TLS Protocol needs public key encryption to work as the sending computer uses the public key of the receiver when encrypting the data. But before any of this can happen, there is a very important security measure in place, where the client has to verify the identity of the public key. This is where digital certificates come in which is also known as a public key certificate which proves ownership of a public key.</div>
                                    <div class="paragraph">So why do we need this digital certificate, well hackers can intercept a request from one computer to another through a rogue access point. Then during this time when a TLS connection is being set up, the attacker can send their public key to the client instead of the server's public key. Then when the client encrypts data with the received public key, they are instead encrypting data with the hacker's public key which can allow the attacker to decrypt the message and change it with the server's public key and then sending it to the server. So to prevent the hacker from decrypting our messages with the server, the digital certificate can be used to show the identity behind a public key, TLS clients mainly trust digital certificates if they are created by organizations that are known as certificate authorities.</div>
                                    <div class="paragraph">So what exactly is a certificate authority. So when a server wants to send data over TLS, they need to sign up with a certificate authority. Then certificate authority verifies ownership of the domain, then signs the certificate with their name and public key, then the signed certificate is given back to the server.</div>
                                    <div class="paragraph">Then the top of the certificate says that the certificate is authentic, then it states the owner of the public key, then it will have a long hexadecimal string and finally, it has a signature of authority and the valid dates of the certificate.</div>
                                    <div class="paragraph">Next, the client inspects the certificate to see if it's authentic, but it still needs to decide whether to trust the certificate, clients typically have a list of trusted certificate authorities that they deem safe and authentic.</div>
                                    <div class="paragraph">There are different kinds of certificate authorities, the root certificate authority, and the intermediate certificate authority. The root certificate authority does not give out certificates to clients directly. It gives it to an intermediate certificate authority that has to trust the root certificate authority.</div>
                                    <div class="paragraph">Usually when we browse the web with the typical Hypertext Transfer Protocol or HTTP, people like hackers, ISPs monitoring traffic, governments can view the contents of every website and put their content in. This is why the HTTPS or Hypertext Transfer Protocol Secure is used more in websites to encrypt HTTP requests and responses with the TLS protocol. So let's look at the details of HTTPS.</div>
                                    <div class="paragraph">URLs that use the "HTTP://"  string at the start of the website use standard HTTP connections while URLs that use "HTTPS://" use Secure HTTP connections.</div>
                                    <div class="paragraph">So when the browser loads a URL that uses HTTPS, there needs to be a secure connection setup with TLS, meaning that we first start by verifying the digital certificate and if they are found to be invalid it will be displayed by the browser.</div>
                                    <div class="paragraph">So what are the benefits of using an HTTPS connection, well it ensures that only the domain and the secure domain can see that data in HTTPS requests? Some of the data sent from computer to server could contain private information like IP so the HTTPS connection must prevent others from seeing the private data. HTTPS prevents people from messing with website content because you can’t intercept packets through the HTTPS connection and replace the contents. This works as TLS has a method to detect packet changes making it safer. It's become more of a common occurrence that more and more websites are using HTTPS.</div>
                                    <div class="paragraph">As you might know, passwords are one of the main ways someone proves identity when trying to access an account, so let's see how an attacker might try to login into your account through various password attacks. So because passwords are so common, attacks can either guess, brute force which means trying many password combinations, stuffing which is where the attacker finds information on one application and uses the same information on another service, malware which can keep track of what keys you type and finally phishing attacks. To prevent these attacks, it's best that you have a strong password with many characters and isn't something like your name.</div>
                                    <div class="paragraph">You want to make your password difficult for an attacker to figure out by combining random words and symbols and also making sure that you don’t click on suspicious attachments that can install malware on your computer to get your account information. We can use things like password managers which are services that keep track of various passwords for various accounts to prevent you from forgetting your complex passwords.</div>
                                    <div class="paragraph">Another thing to note is that you only type your passwords over a secured connection because it can be easy for hackers to view your passwords when you're not on a secure network. There is usually a lock icon in your URL bar that indicates that you are using a secure HTTPS connection.</div>
                                    <div class="paragraph">Because passwords are a method of authentication, if an attacker gets someone's password, they have access to the user's account. Because of this, there are many other kinds of authentication factors that are present alongside passwords so let's take a look at some of these authentication methods. In general, a more secure way to keep private data safe is multifactor authentication where there need to be multiple pieces of information inputted to authenticate the user to access an account.</div>
                                    <div class="paragraph">Authentication wants the user to prove their identity.</div>
                                    <div class="paragraph">The first authentication method is evidence-based on knowledge, this can be things like your password as we’ve discussed, but it can also be PINs or it could be an answer to a personal question that only you know that answer of.</div>
                                    <div class="paragraph">The next kind of authentication is based on possession like having a credit card to prove that you are who you say you are, this can be things like your phone, keys, and more.</div>
                                    <div class="paragraph">Finally, there is inherence authentication which is where you authenticate through things like fingerprint or voice recognition as these features are unique to a person and can be used to authenticate.</div>
                                    <div class="paragraph">Even so many attackers can find ways to authenticate without the account users' consent like stealing someone's credit card. So to defend against this threat, we have multi-factor authentication to help us. Multi-factor authentication requires the user to present evidence and multiple distinct factors that prove that the user is who they say they are and the owner of the account to gain access.</div>
                                    <div class="paragraph">One popular form of multi-factor authentication is 2-factor authentication which requires 2 different factors to authenticate the user. A great example of 2-factor authentication is where the website first asks for your password which is the knowledge that you have, then second it will ask for a specific randomly generated number on your phone which is information that you have making the login more secure. You might wonder why there aren’t more factors to keep accounts safer. Well, this is because it's quicker to access an account with fewer authentication methods but that comes at the tradeoff of security.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: " What is the purpose of the TLS protocol?",
                                              FindAnswer:["It adds more security for these packets to be sent across the network", "It decreases the latency of sending packets throughout the internet to get them to the recipient faster", "Allows for the setup of a computer network so that they can communicate with each other without confusion", "Makes sure that both the sender and receiver have a stable connection before allowing them to send data to each other"], 
                                              rightAnswer:"It adds more security for these packets to be sent across the network"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does certificate authority do?",
                                              FindAnswer:["Verifies ownership of the domain", "Verifies that the website only allows access through the usage of a secure connection", "Makes sure that data being sent to the website does not have malware attached to it", "None of the above"], 
                                              rightAnswer:"Verifies ownership of the domain"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following are common types of authentication?",
                                              FindAnswer:["Evidence-Based Authentication", "Possession based Authentication", "Inherence Authentication", "All of the above"], 
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

export default Unit7Lesson5;