import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson1 extends React.Component {
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
                        <div class = "lesson_title grow">Intro to Programming</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">When we create a program on a computer, we are just giving the computer various instructions and directions on what it should do and the computer will do exactly that when it runs a program. Computers are exceptional at doing simple tasks over and over again multiple times without hesitation.</div>
                                    <div class="paragraph">There are many different programming languages that you can use to make your computer perform various tasks. Python is a very versatile and widely used programming language used by beginners and advanced programmers. Many popular applications online were coded in the python language like Google, Instagram, and Spotify.</div>
                                    <div class="paragraph">Programs are typically run in the python shell where our code will be run immediately meaning that the computer will perform the operations that our code says instantly after we hit enter.</div>
                                    <div class="paragraph">So to create the words hello world on screen we simply need to type in:</div>
                                    <div class="code_block">
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>“Hello World”</div>)</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Hitting enter will make python give us an output of:</div>
                                    <div class="code_block">
                                        <div class='output'>
                                            <div>Hello World</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">This specific line of code is called a statement, statements are basic instructions for a computer to do and all programs have them.</div>
                                    <div class="paragraph">The print() command is also known as a function and it tells the computer to use the function print() which knows how to display text on the screen.</div>
                                    <div class="paragraph">The print() function expects a parameter which is the text that we want the computer to display. In this case that would be the words hello and world.</div>
                                    <div class="paragraph">Display commands work differently in other programming languages but for python, we use the print() command to display text on the screen.</div>

                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What command do you use to print something on screen using python?",
                                              FindAnswer:["print()", "println()", "system.out.println()", "begin display()"], 
                                              rightAnswer:"print()"
                                            }
                                        }
                                    />
                                    
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class='tab_header'>Task</div>
                                    <div class='paragraph'>Create a program that prints the following statement on screen: “Congrats on completing lesson 1”.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/CSPUnit3Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson1;