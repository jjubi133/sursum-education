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
class Python extends React.Component {
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
          displayMenu9: false,
          displayMenu10: false,
        };       
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);
        this.showMenu3 = this.showMenu3.bind(this);
        this.showMenu4 = this.showMenu4.bind(this);
        this.showMenu5 = this.showMenu5.bind(this);
        this.showMenu6 = this.showMenu6.bind(this);
        this.showMenu7 = this.showMenu7.bind(this);
        this.showMenu8 = this.showMenu8.bind(this);
        this.showMenu9 = this.showMenu9.bind(this);
        this.showMenu10 = this.showMenu10.bind(this);

        this.closeMenu1 = this.closeMenu1.bind(this);
        this.closeMenu2 = this.closeMenu2.bind(this);
        this.closeMenu3 = this.closeMenu3.bind(this);
        this.closeMenu4 = this.closeMenu4.bind(this);
        this.closeMenu5 = this.closeMenu5.bind(this);
        this.closeMenu6 = this.closeMenu6.bind(this);
        this.closeMenu7 = this.closeMenu7.bind(this);
        this.closeMenu8 = this.closeMenu8.bind(this);
        this.closeMenu9 = this.closeMenu9.bind(this);
        this.closeMenu10 = this.closeMenu10.bind(this);
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
    showMenu9(event) {
        event.preventDefault();       
        this.setState({ displayMenu9: true }, () => {
            document.addEventListener('click', this.closeMenu9);
        });
    }
    showMenu10(event) {
        event.preventDefault();       
        this.setState({ displayMenu10: true }, () => {
            document.addEventListener('click', this.closeMenu10);
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
    closeMenu9(event) {   
        this.setState({ displayMenu9: false }, () => {
            document.removeEventListener('click', this.closeMenu9);
        });       
    }
    closeMenu10(event) {    
        this.setState({ displayMenu10: false }, () => {
            document.removeEventListener('click', this.closeMenu10);
        });       
    }
   

    render() {
        return (
            <div class = "container">
                <div class = "home_section">
                        <div class = "unit_section_header"><Slide left><div><h3>Python</h3></div></Slide></div>
                        <div class='side_buttons'>
                            <div class="courses_button"><Slide right><div><Link to='/Courses'><button><h3>Courses</h3></button></Link></div></Slide></div>
                            <div class="logout_button"><Slide right><div><button onClick={this.logout}><h3>Logout</h3></button></div></Slide></div>     
                        </div>
                    
                        <Fade top><div>
                            <button onClick={this.showMenu1}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                    <div class="Unit_text">
                                        <div class="Unit_number">Unit 1:</div>
                                        <div class="Unit_title">Intro and Setup</div>
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
                                    <Link to="/Python-Unit1Lesson1"><button>1 Installing Python</button></Link>
                                    <Link to="/Python-Unit1Lesson2"><button>2 Getting Jupyter Notebook</button></Link>
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
                                    <div class="Unit_title">Data Structures and Objects in Python</div>
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
                                    <Link to="/Python-Unit2Lesson1"><button>1 Python Data Types</button></Link>
                                    <Link to="/Python-Unit2Lesson2"><button>2 Numbers</button></Link>
                                    <Link to="/Python-Unit2Lesson3"><button>3 Variables</button></Link>
                                    <Link to="/Python-Unit2Lesson4"><button>4 Strings</button></Link>
                                    <Link to="/Python-Unit2Lesson5"><button>5 Indexing and Slicing with Strings</button></Link>
                                    <Link to="/Python-Unit2Lesson6"><button>6 String Properties and Methods</button></Link>
                                    <Link to="/Python-Unit2Lesson7"><button>7 Print Formatting</button></Link>
                                    <Link to="/Python-Unit2Lesson8"><button>8 Lists</button></Link>
                                    <Link to="/Python-Unit2Lesson9"><button>9 Dictionaries</button></Link>
                                    <Link to="/Python-Unit2Lesson10"><button>10 Tuples</button></Link>
                                    <Link to="/Python-Unit2Lesson11"><button>11 Sets</button></Link>
                                    <Link to="/Python-Unit2Lesson12"><button>12 Booleans</button></Link>
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
                                    <div class="Unit_title">Comparison Operators</div>
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
                                    <Link to="/Python-Unit3Lesson1"><button>1 Comparison Operators</button></Link>
                                    <Link to="/Python-Unit3Lesson2"><button>2 Using Comparison Operators with Logical Operators</button></Link>
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
                                    <div class="Unit_title">Statements</div>
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
                                    <Link to="/Python-Unit4Lesson1"><button>1 If, Elif, Else Statements</button></Link>
                                    <Link to="/Python-Unit4Lesson2"><button>2 For Loops</button></Link>
                                    <Link to="/Python-Unit4Lesson3"><button>3 While Loops</button></Link>
                                    <Link to="/Python-Unit4Lesson4"><button>4 List Comprehensions</button></Link>
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
                                    <div class="Unit_title">Methods and Functions</div>
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
                                    <Link to="/Python-Unit5Lesson1"><button>1 Methods and Documentation</button></Link>
                                    <Link to="/Python-Unit5Lesson2"><button>2 def</button></Link>
                                    <Link to="/Python-Unit5Lesson3"><button>3 Basics of Functions</button></Link>
                                    <Link to="/Python-Unit5Lesson4"><button>4 Using Logic with Functions</button></Link>
                                    <Link to="/Python-Unit5Lesson5"><button>5 Tuples Unpacking with Functions</button></Link>
                                    <Link to="/Python-Unit5Lesson6"><button>6 Arguments and Keyword Arguments</button></Link>
                                    <Link to="/Python-Unit5Lesson7"><button>7 Lamdas and Map Filters</button></Link>
                                    <Link to="/Python-Unit5Lesson8"><button>8 Nested Statements and Scope</button></Link>
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
                                    <div class="Unit_title">Object Oriented Programming</div>
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
                                    <Link to="/Python-Unit6Lesson1"><button>1 Intro to OOP</button></Link>
                                    <Link to="/Python-Unit6Lesson2"><button>2 Attributes and Class Keywords</button></Link>
                                    <Link to="/Python-Unit6Lesson3"><button>3 Class Object Attributes and Methods</button></Link>
                                    <Link to="/Python-Unit6Lesson4"><button>4 Inheritance and Polymorphism</button></Link>
                                    <Link to="/Python-Unit6Lesson5"><button>5 Special Methods</button></Link>
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
                                    <div class="Unit_title">Modules and Packages</div>
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
                                    <Link to="/Python-Unit7Lesson1"><button>1 Pip and Pypi</button></Link>
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
                                    <div class="Unit_title">Advanced Modules</div>
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
                                    <Link to="/Python-Unit8Lesson1"><button>1 Collection Module</button></Link>
                                    <Link to="/Python-Unit8Lesson2"><button>2 Datetime Module</button></Link>
                                    <Link to="/Python-Unit8Lesson3"><button>3 Math and Random Modules</button></Link>
                                    <Link to="/Python-Unit8Lesson4"><button>4 Debugger</button></Link>
                                    <Link to="/Python-Unit8Lesson5"><button>5 Zipping and Unzipping Files</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }

                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu9}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 9:</div>
                                    <div class="Unit_title">Generators</div>
                                    </div>
                                    {
                                        this.state.displayMenu9
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
                            this.state.displayMenu9
                                ? (
                                <div className="menu">
                                    <Link to="/Python-Unit9Lesson1"><button>1 Generators</button></Link>
                                </div>
                                )
                                : (
                                null
                                )
                            }
                        </div></Fade>
                        <Fade top><div>
                            <button onClick={this.showMenu10}>
                                <div class="Unit" data-sal="zoom-in" data-sal-delay="200" data-sal-duration = "600"> 
                                <div class="Unit_text">
                                    <div class="Unit_number">Unit 10:</div>
                                    <div class="Unit_title">PDFs and Spreadsheet CSV Files</div>
                                    </div>
                                    {
                                        this.state.displayMenu10
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
                            this.state.displayMenu10
                                ? (
                                <div className="menu">
                                    <Link to="/Python-Unit10Lesson1"><button>1 Creating CSV files </button></Link>
                                    <Link to="/Python-Unit10Lesson2"><button>2 CSV files </button></Link>
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

export default Python;