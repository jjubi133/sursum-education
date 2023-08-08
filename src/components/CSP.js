import React from 'react';
import './styles/Units.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import CaretUp from '../images/caret_up.svg';
import CaretDown from '../images/caret_down.svg';
import {Link} from 'react-router-dom';
import fire from '../config/Fire';
import Login from './Login.js';

//☰
class CSP extends React.Component {
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
            <div class = "container">
                {this.state.user ? (<Unit />) : (<Login />)}
                
            </div>
        )
      }
}
class Unit extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = ({
            user: null,
          });
        this.state = {
          displayMenu1: false,
          displayMenu2: false,
          displayMenu3: false,
          displayMenu4: false,
          displayMenu5: false,
          displayMenu6: false,
          displayMenu7: false,
          displayMenu8: false,
        };       
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);
        this.showMenu3 = this.showMenu3.bind(this);
        this.showMenu4 = this.showMenu4.bind(this);
        this.showMenu5 = this.showMenu5.bind(this);
        this.showMenu6 = this.showMenu6.bind(this);
        this.showMenu7 = this.showMenu7.bind(this);
        this.showMenu8 = this.showMenu8.bind(this);

        this.closeMenu1 = this.closeMenu1.bind(this);
        this.closeMenu2 = this.closeMenu2.bind(this);
        this.closeMenu3 = this.closeMenu3.bind(this);
        this.closeMenu4 = this.closeMenu4.bind(this);
        this.closeMenu5 = this.closeMenu5.bind(this);
        this.closeMenu6 = this.closeMenu6.bind(this);
        this.closeMenu7 = this.closeMenu7.bind(this);
        this.closeMenu8 = this.closeMenu8.bind(this);
      }
    logout(){
        fire.auth().signOut();
    }

    showMenu1(event) {
        event.preventDefault();       
        this.setState({ displayMenu1: true }, () => {
            document.addEventListener('click', this.closeMenu1);
        });
    }
    showMenu2(event) {
        event.preventDefault();       
        this.setState({ displayMenu2: true }, () => {
            document.addEventListener('click', this.closeMenu2);
        });
    }
    showMenu3(event) {
        event.preventDefault();       
        this.setState({ displayMenu3: true }, () => {
            document.addEventListener('click', this.closeMenu3);
        });
    }
    showMenu4(event) {
        event.preventDefault();       
        this.setState({ displayMenu4: true }, () => {
            document.addEventListener('click', this.closeMenu4);
        });
    }
    showMenu5(event) {
        event.preventDefault();       
        this.setState({ displayMenu5: true }, () => {
            document.addEventListener('click', this.closeMenu5);
        });
    }
    showMenu6(event) {
        event.preventDefault();       
        this.setState({ displayMenu6: true }, () => {
            document.addEventListener('click', this.closeMenu6);
        });
    }
    showMenu7(event) {
        event.preventDefault();       
        this.setState({ displayMenu7: true }, () => {
            document.addEventListener('click', this.closeMenu7);
        });
    }
    showMenu8(event) {
        event.preventDefault();       
        this.setState({ displayMenu8: true }, () => {
            document.addEventListener('click', this.closeMenu8);
        });
    }
    closeMenu1(event) { 
        this.setState({ displayMenu1: false }, () => {
            document.removeEventListener('click', this.closeMenu1);
        }); 
    }
    closeMenu2(event) {  
        this.setState({ displayMenu2: false }, () => {
            document.removeEventListener('click', this.closeMenu2);
        });       
    }
    closeMenu3(event) { 
        this.setState({ displayMenu3: false }, () => {
            document.removeEventListener('click', this.closeMenu3);
        });       
    }
    closeMenu4(event) {  
        this.setState({ displayMenu4: false }, () => {
            document.removeEventListener('click', this.closeMenu4);
        });       
    }
    closeMenu5(event) { 
        this.setState({ displayMenu5: false }, () => {
            document.removeEventListener('click', this.closeMenu5);
        });       
    }
    closeMenu6(event) {   
        this.setState({ displayMenu6: false }, () => {
            document.removeEventListener('click', this.closeMenu6);
        });       
    }
    closeMenu7(event) {   
        this.setState({ displayMenu7: false }, () => {
            document.removeEventListener('click', this.closeMenu7);
        });       
    }
    closeMenu8(event) {     
        this.setState({ displayMenu8: false }, () => {
            document.removeEventListener('click', this.closeMenu8);
        });       
    }

    render() {
        return (
            <div class = "container">
                <div class = "home_section">
                    <div class = "unit_section_header"><Slide left><div><h3>Computer Science Principles</h3></div></Slide></div>
                    <div class='side_buttons'>
                            <div class="courses_button"><Slide right><div><Link to='/Courses'><button><h3>Courses</h3></button></Link></div></Slide></div>
                            <div class="logout_button"><Slide right><div><button onClick={this.logout}><h3>Logout</h3></button></div></Slide></div>     
                    </div>
                    
                        <Fade top><div>
                            <button onClick={this.showMenu1}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                    <div class="Unit_text">
                                        <div class="Unit_number">Unit 1:</div>
                                        <div class="Unit_title">Digital information</div>
                                    </div>
                                    {
                                        this.state.displayMenu1
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                    }
                                </div>
                            </button>
                            {
                            this.state.displayMenu1
                                ? (
                                <div class="menu">
                                    <Link to="/CSP-Unit1Lesson1"><button>1 Bits, Bytes and Binary</button></Link>
                                    <Link to="/CSP-Unit1Lesson2"><button>2 Storing Text in Binary and Converting to Binary</button></Link>
                                    <Link to="/CSP-Unit1Lesson3"><button>3 Storing Numbers</button></Link>
                                    <Link to="/CSP-Unit1Lesson4"><button>4 Lossless and Lossy Compression</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu2}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 2:</div>
                                    <div class="Unit_title">The Internet</div>
                                </div>
                                    {
                                        this.state.displayMenu2
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu2
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit2Lesson1"><button>1 Introducing and Addressing the Internet</button></Link>
                                    <Link to="/CSP-Unit2Lesson2"><button>2 Connecting Networks</button></Link>
                                    <Link to="/CSP-Unit2Lesson3"><button>3 Web protocols & Open protocol Development</button></Link>
                                    <Link to="/CSP-Unit2Lesson4"><button>4 Scalable Systems</button></Link>
                                    <Link to="/CSP-Unit2Lesson5"><button>5 Routing with Redundancy</button></Link>
                                    <Link to="/CSP-Unit2Lesson6"><button>6 Transporting Packets</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu3}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 3:</div>
                                    <div class="Unit_title">Programming</div>
                                    </div>
                                    {
                                        this.state.displayMenu3
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu3
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit3Lesson1"><button>1 Intro to Programming</button></Link>
                                    <Link to="/CSP-Unit3Lesson2"><button>2 Math in Python Along with Variables</button></Link>
                                    <Link to="/CSP-Unit3Lesson3"><button>3 Strings</button></Link>
                                    <Link to="/CSP-Unit3Lesson4"><button>4 Loops & Conditional Statements</button></Link>
                                    <Link to="/CSP-Unit3Lesson5"><button>5 Lists</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu4}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 4:</div>
                                    <div class="Unit_title">Algorithms</div>
                                    </div>
                                    {
                                        this.state.displayMenu4
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu4
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit4Lesson1"><button>1 Creating and Understanding Algorithms</button></Link>
                                    <Link to="/CSP-Unit4Lesson2"><button>2 Solving Hard Problems</button></Link>
                                    <Link to="/CSP-Unit4Lesson3"><button>3 Parallel and Distributed Computing</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu5}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 5:</div>
                                    <div class="Unit_title">Data Analysis</div>
                                    </div>
                                    {
                                        this.state.displayMenu5
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu5
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit5Lesson1"><button>1 Data Tools</button></Link>
                                    <Link to="/CSP-Unit5Lesson2"><button>2 Big Data</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu6}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 6:</div>
                                    <div class="Unit_title">Simulations</div>
                                    </div>
                                    {
                                        this.state.displayMenu6
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu6
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit6Lesson1"><button>1 What are Simulations</button></Link>
                                    <Link to="/CSP-Unit6Lesson2"><button>2 Using Simulations for Randomness</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu7}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 7:</div>
                                    <div class="Unit_title">Online Data Security</div>
                                    </div>
                                    {
                                        this.state.displayMenu7
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu7
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit7Lesson1"><button>1 Introduction to Online Data Security & PII (Personally Identifiable Information)</button></Link>
                                    <Link to="/CSP-Unit7Lesson2"><button>2 User Data Tracking</button></Link>
                                    <Link to="/CSP-Unit7Lesson3"><button>3 Cyber Attacks</button></Link>
                                    <Link to="/CSP-Unit7Lesson4"><button>4 Data Encryption Techniques</button></Link>
                                    <Link to="/CSP-Unit7Lesson5"><button>5 Secure Internet Protocols & User Authentication Methods</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu8}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 8:</div>
                                    <div class="Unit_title">Innovations in Computing</div>
                                    </div>
                                    {
                                        this.state.displayMenu8
                                            ? (
                                                <div class="Unit_caret"><img src={CaretDown} alt="caret"></img></div>
                                            )
                                            : (
                                                <div class="Unit_caret"><img src={CaretUp} alt="caret"></img></div>
                                            )
                                        }
                                </div>
                            </button>
                            {
                            this.state.displayMenu8
                                ? (
                                <div className="menu">
                                    <Link to="/CSP-Unit8Lesson1"><button>1 Communication & Collaboration Innovations</button></Link>
                                    <Link to="/CSP-Unit8Lesson2"><button>2 Crowdsourcing & Monitoring Innovations</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                </div>
            </div>
        )
      }
}

export default CSP;