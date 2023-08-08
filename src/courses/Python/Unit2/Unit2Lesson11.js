import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson11 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/Qi5rsCtWZts?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Set</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Set</div>
                                    <div class="paragraph">In previous supplementals, you learned about the different object types that are found in Python. In this supplemental you’ll learn about another object type that we have yet to have gone over: Sets.</div>
                                    <div class="tab_header">Sets</div>
                                    <div class="paragraph">Sets are an unordered collection of unique elements. We can construct them by using the set() function. </div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div>x = <div class="purp">set</div>()</div>
                                            <div class="comment"># We add to sets with the add() method</div>
                                            <div>x.<div class="purp">add</div>(1)</div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>
                                        </div>
                                        <div class="output">
                                            <div>{`{1}`}</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Note the curly brackets. This does not indicate a dictionary, although you can draw analogies as a set being a dictionary with only keys.</div>
                                    <div class="paragraph">We know that a set has only unique entries. Let’s see what happens when something that is already in a set is added.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Add a different element</div>
                                            <div>x.<div class="purp">add</div>(2)</div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>
                                            <div class="comment"># Try to add the same element</div>
                                            <div>x.<div class="purp">add</div>(1)</div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>
                                        </div>
                                        <div class="output">
                                            <div>{`{1, 2}`}</div>
                                            <div>{`{1, 2}`}</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Notice how it won't place another 1 there because a set is only concerned with unique elements. We can cast a list with multiple repeat elements to a set to get the unique elements. For example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Create a list with repeats</div>
                                            <div>list1 = [1,1,2,2,3,4,5,6,1,1]</div>
                                            <div class="multi"><div class="purp">print</div>(list1)</div>
                                            <div class="comment"># Cast as set to get unique values</div>
                                            <div class="multi"><div class="purp">print</div>(set(list1))</div>
                                        </div>
                                        <div class="output">
                                            <div> [1,1,2,2,3,4,5,6,1,1]</div>
                                            <div>{`{1, 2, 3, 4, 5, 6}`}</div>
                                        </div>
                                    </div>
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
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson11?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson11;