import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson3 extends React.Component {
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
                                    <div class="paragraph">When we refer to the internet, we are typically talking about the part of the internet known as the world wide web. It is a massive network of various web pages, programs, and files that can be accessed by typing in URL.</div>
                                   <div class="paragraph">A browser uses many protocols to access a website. These protocols in the Domain Name System also known as DNS and HyperText Transfer Protocol are also known as HTTP. DNS is used to convert the domain name into an IP address that can be accessed by a browser. HTTP is used to request the contents from the IP address from the webpage.</div>
                                   <div class="paragraph">The website could also use the Transport Layer Security Protocol also known as TLS as a form of encryption for your connection. </div>
                                   <div class="paragraph">As you know, computers identify other computers on the internet through the usage of IP addresses. But because IP addresses are essentially a bunch of numbers that can be difficult to memorize, we have the DNS which gives us a more easy way to identify our computer where we want to go to our computer, an example is instead of typing in Google’s IP address, we can simply type in www.google.com which will take us to the computers that run google. The purpose of the domain name is to make it easy to remember websites that we want to connect to instead of memorizing the IP addresses of various websites.</div>


                                    <div class="tab_header">The Parts of a domain</div>
                                    <div class="paragraph">There are for the most part 3 parts of the domain which go in the order of 3rd level first, the second and, top-level domains.</div>

                                    <div class="paragraph">For top level domains, many websites use ".com", ".org", and ".edu". The second level domain refers to the unique name of the website or the computer that registers the website. The third level domain is called the subdomain as its owned by the same organization and is usually used to direct the user to a subset of the website.</div>
                                    
                                    <div class="tab-header">Domain name to IP address</div>
                                    <div class="paragraph">There is also a step by step process revolving around Hypertext Transfer Protocol to download a page from another computer somewhere so let's look into this.</div>
                                    <div class="paragraph">First, you need to have a browser that can connect to the internet and browse your web. Regardless of the device, as long as there is a browser, you can type in URLs to go to various websites. Browsers tend to have HTTPS in the address bar meaning that it needs HTTP to get documents for the URL</div>
                                    <div class="paragraph">Then the computer asks for the ISP cache. If someone living nearby visits a website, it will be stored in the IPS’ cache but if it's not there then the computer has to keep looking.</div>
                                    <div class="paragraph">Finally, if nothing else works, it will go to domain name servers that keep track of millions of domain names. These servers are based in a hierarchy structure where the root name servers are checked, then the Top-level domain servers, and finally the host name servers.</div>
                                    
                                    <div class="tab-header">Downloading data from website</div>
                                    <div class="paragraph">The process of converting a domain name into a feasible IP address so the computer can access the website is a multistep process so let's take a look at how this is done.</div>
                                    <div class="paragraph">First, the computer checks the local cache of the computer because typically if you visit a website, there is a good chance you’ll go to it again so on your computer, there will be a list of domain names to IP mappings.</div>
                                    <div class="paragraph">Next, the browser has to look up the IP of the website, as we’ve explained previously, the domain name is searched up and matched up with the IP address of the domain’s computer which is taken care of by the domain name system.</div>
                                    <div class="paragraph">Following that, when the browser finds the IP address of the computer hosting a website we are trying to access, the browser then sends an HTTP request. HTTP requests tend to be short and simply request access as the name implies. Because the host computer stores all the content of the website, the browser must be more specific about which page needs to load. Next, the host sends back an HTTP response right after the HTTP request is received. The HTTP response has content and metadata.</div>
                                    <div class="paragraph">Finally, the browser now presents the response in a viewable format and the document is rendered.</div>                                 
                                    <div class="paragraph">Networking protocols describe how computers can communicate with each other. Without internet protocols, computers would misinterpret messages from each other. That's why standardization is so important for the technologies powering the Internet. So when computers have similar protocols, they can understand data sent to each other. Once this protocol is written up in a document and other network administrators agree that it is a sensible protocol, it will now be considered a standard.</div>
                                    <div class="paragraph">The internet protocols must be open which means that they aren’t owned by some company. That means all a computer has to do to join the network is to have the protocols to join the network. </div>
</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the purpose of DNS?",
                                              FindAnswer:["The purpose of the domain name is to make it easy to remember websites that we want to connect to instead of memorizing the IP addresses of various websites", "It is what allows us to connect to the internet securely so we don’t lose our data to attackers", "It is what allows us to communicate with other devices on the network with low latency", "All of the above"], 
                                              rightAnswer:"The purpose of the domain name is to make it easy to remember websites that we want to connect to instead of memorizing the IP addresses of various websites"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following are not one of the 3 parts of a domain name?",
                                                FindAnswer:[ "Top-level domain", "Second-level domain", "Third-level domain", "Middle domain"], 
                                                rightAnswer:"Middle domain"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following are not a step for converting domain names into usable IP addresses?",
                                                FindAnswer:[ "The computer checks the local cache on your computer because typically the IP mappings and associated Domain names will get stored on your computer if you go to a website frequently", "The ISP Cache is checked by the computer as people nearby might visit a website and the IP mapping might be present with the ISP cache because of it", "The computer connects to government networks which contain all of the domain names in a database that the computer can access", "The computer checks the domain name server which keeps track of the many domain names present"], 
                                                rightAnswer:"The computer connects to government networks which contain all of the domain names in a database that the computer can access"
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

export default Unit2Lesson3;