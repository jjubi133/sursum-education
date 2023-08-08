import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit7Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">User Data Tracking</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The internet is not very private at times. Websites often use something called cookies to keep track of what a user is doing. This allows the website to use this data to make their website better suited for the user based on their history.</div>
                                    <div class="paragraph">So what exactly is a cookie? Well, an HTTP cookie simply refers to a small amount of text that helps a website get information about the user to make the user experience better on their own website.</div>
                                    <div class="tab_header">How Cookies Work</div>
                                    <div class="paragraph">So let's take a look at how cookies work:</div>
                                    <div class="paragraph">First the browser requests for the specific website with the HTTP request from the server that hosts the website.</div>
                                    <div class="paragraph">Next, the server sends the cookies with an HTTP response that contains a set-cookie header. This cookie will have information like the name, some values, and expiration date for when the cookie data should be cleared.</div>
                                    <div class="paragraph">Then, the browser will store the cookie on the hard drive so that even if the browser restarts the cookies will exist and these are known as persistent cookies. But there is a second kind of cookie that’s known as a session cookie that lacks no expiration date so the data gets deleted right when the browser is closed.</div>
                                    <div class="paragraph">The browser will then send the cookies with a request so that if the user goes to another page on the website, the browser will send the stored cookies with an HTTP request.</div>
                                    <div class="paragraph">Finally, when the server gets the HTTP request, the cookies will get looked at, and then it will store information about the session in its database to personalize the response.</div>
                                    <div class="paragraph">So what are some of the uses of cookies? Well, they can include things recommendations on various news sites along, various preferences, how long you spend on the websites, and more.</div>
                                    <div class="paragraph">Cookies get stored by a browser with a specific domain and path. A first-party cookie is a cookie that is associated with the domain of the server. These occur when you visit a website and the server sends a response with a cookie. The cookies could also be sent when the browser requests resources to view certain things like images and now the cookies that get sent back are associated with their domain meaning that these cookies are third-party cookies. Third-party cookies tend to be for advertising purposes related to viewed content. Nowadays you can disable these cookies because they use more private user data.</div>
                                    <div class="tab_header">Search Engines</div>
                                    <div class="paragraph">Search engines are a service that creates an index on our collection of data present on the web and gives users a way to search for data. Google is the most popular search engine and allows users to search for virtually anything.</div>
                                    <div class="paragraph">Search engines tend to store searches that you’ve made in a database and the data that gets stored can be more than the search such as when you searched something or what your IP address you searched something on a search engine. So search engines can store many pieces of PII.</div>
                                    <div class="paragraph">Some of the uses of search history data include personalizing search results. If your a chef and constantly search for new recipes or cooking tools the search engine will give results are more might be beneficial for a chef.</div>
                                    <div class="paragraph">There can be problems collecting search history data for the user. This is because search data can be easily pieced together and link to an actual individual.</div>
                                    <div class="paragraph">It might be scary and you might consider not using a search engine. But there are ways to see how the engine is using your data and typically there will be a way to disable data collection for people.</div>
                                    <div class="tab_header">Browser History</div>
                                    <div class="paragraph">While we think that our browsing history is private, in reality, it isn't as websites, browsers, ISPs, and the government can all view this data.</div>
                                    <div class="paragraph">First websites can track where a user visits using third-party cookies to collect information on what sites the user visits.</div>
                                    <div class="paragraph">Browsers store your browsing history detailing which websites you’ve visited, but most browsers offer a way for someone to delete their history. Browsers also can have a private window option that won’t store and browse history or cookies when browsing the internet.</div>
                                    <div class="paragraph">Routers also can view what packets are being sent through the HTTP requests so they see what websites are visited. The ISP can check to see what a certain user is doing as well as the government.</div>
                                    <div class="tab_header">VPN</div>
                                    <div class="paragraph">Some users are concerned about people seeing their privacy and browsing history so people can use Virtual Private Networks also known as VPNs to maintain privacy.</div>
                                    <div class="paragraph">The computer will send a packet of encrypted data with the destination of the VPN server to the internet service provided. Then the VPN decrypts the data and sends the packets to where the user actually wants to send the packet. So in this case, the VPN server will know where the user was browser but not the ISP. Also, the routers on the receiving end will only see that the packet came from the VPN’s IP address.</div>
                                    <div class="paragraph">Another option is to use Tor which is a program that makes internet traffic anonymous for people. This works by sending a packet that's encrypted to a lot of relay points so that only the relays know where the data came from and is being sent so no one really knows the IP address of the sender and recipient. This can be slower because the relays can be located anywhere on the internet.</div>
                                    <div class="paragraph">Tor can provide truly anonymous browsing, but it also severely slows down the browsing experience, since it has to hop through volunteer relays that can be located anywhere on the Internet.</div>
                                    <div class="tab_header">Geolocation</div>
                                    <div class="paragraph">When we use the internet and we want to know how far the nearest restaurant is to where you are currently, your computer needs to know the user's geolocation which is the approximate latitude and longitude to describe the device's geographic location. So applications can use your geolocation to actually determine the distance between you and somewhere else.</div>
                                    <div class="paragraph">The geolocation of a user gives the position of a user to determine where the user is located. This can be used with precise methods such as GPS or IP based geolocation which isn’t as precise.</div>
                                    <div class="paragraph">GPS works because about 30 GPS satellites orbit the earth and the GPS receivers are essentially tiny sensors with antennas that detect radio signals from GPS satellites in the sky. So if the sensor receives signals from at least 4 staples, then the receiver can figure out the position through a method called trilateration.</div>
                                    <div class="paragraph">This system can also be used for wifi positioning systems where wifi antennas can scan for wifi access points and measuring signal strength. Then the device can calculate where the device is using trilateration once again. Trilateration is based on 3 access points based on the different strengths, you can find the center area where the circles meet up to determine the location of the device.</div>
                                    <div class="paragraph">Another method that can be used is fingerprint where a map is made ahead of time that stores all the reference points of signal strength to the nearby networks and then geographic coordinates as well to accurately correlate signal strength with the location.</div>
                                    <div class="paragraph">Cell towers are also used to approximate a device's location. This can be very useful if GPS trilateration is not possible due to no signal. Trilateration of cell phone towers needs 3 towers to accurately figure out where a device is located.</div>
                                    <div class="paragraph">While IP addresses don’t entirely act like real addresses, they can still be used to figure out a device's location. This is because IP geolocation uses a database that has many IP addresses associated with the location. Whenever you send data through the internet, an IP address of the sender is also sent. IP geolocation isn’t very effective and can be useless if the user is using a VPN.</div>
                                    <div class="paragraph">Even if a device can determine geolocation, it won’t automatically send that information to other applications so let's see how these applications figure out your location.First, the application can ask for access to your location which will show up in a pop-up. You can change the settings so that it can use your location data at all times or when you're using the app.</div>
                                    <div class="paragraph">First, the application can ask for access to your location which will show up in a pop-up. You can change the settings so that it can use your location data at all times or when you're using the app.</div>
                                    <div class="paragraph">Applications also can figure out your location through IP-based geolocation because the HTTP requests contain your IP address.</div>
                                    <div class="paragraph">Applications sometimes simply ask the user for their location by asking for their address or in most cases their Zip code which gives the application an approximate estimation of where the user is. Photos have extra data that contains the location of where the picture was taken so sometimes websites can get this data.</div>
                                    <div class="paragraph">Geolocation can allow people to find their lost devices as well as help to travel the world. But because geolocation is sensitive information, there can be many risks like getting stalked by someone who finds out your location or that websites have the choices to censor information based on where they think people live.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a cookie?",
                                              FindAnswer:["A small amount of text that helps a website get information about the user", "A delicious baked or cooked food that is small, flat, and sweet", "A networking system that allows for users to easily connect with a website’s server", "None of the above"], 
                                              rightAnswer:"A small amount of text that helps a website get information about the user"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "How does a search engine work?",
                                              FindAnswer:["Its service creates an index of data present on the web so we can search it", "Search engines work by collecting personal identifiable information about a person and then putting it on the web so that everyone has access to information", "They use satellite communications to get information from various places", "The government provides data to search engines from public libraries so people can access the information"], 
                                              rightAnswer:"Its service creates an index of data present on the web so we can search it"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What are the reasons browser history isn’t private?",
                                              FindAnswer:["Many copies can exist", "Web archiving services which make copies of all the pages on the web and allow people to browse vast amounts of data", "Also, automated bots may copy pages they see online", "All of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "How does a VPN work?",
                                              FindAnswer:["The computer will send a packet of encrypted data to a VPN server. Then the VPN decrypts the data sending it to the actual destination", "The computer networks are linked up together so that they can solve problems at a faster rate", "The computers are set up in a distributed system set-up allowing them to send data to each other at a faster speed", "The VPN changes the type of encryption that is used when sending data from one place to another"], 
                                              rightAnswer:"The computer will send a packet of encrypted data to a VPN server. Then the VPN decrypts the data sending it to the actual destination"
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

export default Unit7Lesson2;