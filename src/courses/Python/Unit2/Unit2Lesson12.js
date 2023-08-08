import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson12 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/Rq-418mCxi4?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Booleans</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Booleans</div>
                                    <div class="paragraph">In previous supplementals,  you learned about the different object types that are found in Python. In this supplemental you’ll learn about another object type that we have yet to have gone over: Booleans.</div>
                                    <div class="paragraph">Python comes with Boolean, its logical way of telling what is true and what is false. It also has a placeholder object called None. Let's walk through some examples of Booleans:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Set object to be a boolean</div>
                                            <div>a = <div class="blue">True</div></div>
                                            <div class="multi"><div class="purp">print</div>(a)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">We can also use comparison operators to create booleans which we’ll go over in a later course.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Output is boolean</div>
                                            <div class="multi"><div class="purp">print</div>({`1>2`})</div>
                                        </div>
                                        <div class="output">
                                            <div>False</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">We can use None as a placeholder for an object that we don't want to reassign yet:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># None placeholder</div>
                                            <div>b = <div class="blue">None</div></div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                        </div>
                                        <div class="output">
                                            <div>None</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">You should now have a basic understanding of Python objects and data structure types.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the value of the var after the for loop completes its execution?",
                                              FindAnswer:["20", "21", "10", "30"], 
                                              rightAnswer:"21"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which is true about a for loop?",
                                                FindAnswer:["Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string", "We use for loop when we want to perform a task indefinitely until a particular condition is met", "else clause of for loop is executed when the loop terminates naturally", "else clause of for loop is executed when the loop terminates abruptly"], 
                                                rightAnswer:"else clause of for loop is executed when the loop terminates naturally"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which two statements are used to implement iteration?",
                                                FindAnswer:[ "FOR and WHILE", "IF and ELSE", "IF and WHILE", "ELSE and WHILE"], 
                                                rightAnswer:"IF and ELSE"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create a for loop that takes the first and second letter of a word and replaces them with the number 3.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson12?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson12;