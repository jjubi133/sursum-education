import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit8Lesson2 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/CW-yTdMYSlE?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Datetime</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Understanding date and time in Python can be crucial. It allows you to keep track of what’s going on and (more importantly) when something occurs. In this supplemental, we’ll be going over the basics of datetime in python. Let’s look at an example.</div>
                                    
                                    <div class = "code_block">
                                        <div class="input">
                                            <div><div class='blue'>import</div> datetime</div>
                                            <div>clock = datetime.<div class='purp'>time</div>(3,21,23,12)</div>
                                            <div><div class='purp'>print</div>(clock)</div> 
                                            <div>clock.<div class='purp'>hour</div></div> 
                                        </div>

                                        <div class = "output">
                                           <div>{'>>'}03:21:23.000012</div>
                                           <div>{'>>'}3</div>
                                        </div>
                                    </div>
                                    
                                    <div class="paragraph">To utilize date time functionalities in Python, you’ll need to import the datetime module which is built into Python. From there, you can type in the hour, minute, second, and microsecond. If you hit shift then tab, you’ll be able to see what parameters the datetime.time takes in.To access the information that you’ve created, simply call the variable name which datetime was assigned to and do dot followed by the information you want. To see what’s available, you can do dot tab and see what calls there are (hours, second, microsecond, etc).</div>
                                    <div class="paragraph_NI">We also have dates. Let’s take a look at an example.</div>

                                    <div class = "code_block">
                                        <div class="input">
                                            <div>calendar = datetime.<div class='purp'>date</div>(2050, 1, 11)</div>
                                            <div><div class='purp'>print</div>(calendar)</div>
                                        </div>
                                        <div class = "output">
                                           <div>{'>>'}2050-1-11</div>
                                        </div>
                                    </div>
                                    
                                    <div class="paragraph">Much like time, date allows you to type out the values for a date. This means you can have information for the year, month, day, etc. If you wish to have the month, day, hour, and minute information for a program, you simply set datetime.date to a variable (in our case calendar) and inside of the parentheses pass in the information of your choice.</div>
                                    <div class="paragraph_NI"> If you want Python to print out the exact date, simply do:</div>
                                    <div class="tab_header">Function Topics</div>

                                    <div class = "code_block">
                                        <div class="input">
                                            <div>datetime.<div class='purp'>date</div>.<div class='purp'>today</div>()</div> 
                                        </div>
                                    </div>

                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "How do you access the functionality of date and time in Python?",
                                              FindAnswer:["By importing collection.date into your program", "By importing datetime into your program", "By importing datetime via Pip install", "None of the above"], 
                                              rightAnswer:"By importing datetime into your program"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>clock = datetime.<div class='purp'>time</div>(3,21,23,12)</div>
                                            <div class='multi'>clock.<div class='purp'>second</div></div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What would the output of the code be?",
                                                FindAnswer:[ "3", "21", "23", "12"], 
                                                rightAnswer:"23"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>calendar = datetime.<div class='purp'>date</div>(1999,12,1)</div>
                                            <div class='multi'><div class='purp'>print</div>(calendar)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                            question: "What would be the output of the code:",
                                                FindAnswer:[ "1999,12,1", "(1,12,1999)", "1-12-1999", "1999-12-1"], 
                                                rightAnswer:"1999-12-1"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a program that takes in your birthday and the current date. Then find how many days it has been since the day you were born.</div>    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit8Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div class = "bottom_section">
                    <Fade bottom><div><div class ="lesson_backbutton"><Link to='/Python'><button class="grow">View Other Lessons</button></Link></div></div></Fade>
                </div> 

            </div>
        )
      }
}

export default Unit8Lesson2;