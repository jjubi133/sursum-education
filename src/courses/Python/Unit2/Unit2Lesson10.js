import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson10 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/4V9CjUp5a2w?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Tuples</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Tuples</div>
                                    <div class="paragraph">In previous lessons you learned about lists and how they can be used to store elements. One of the most important features of a list was its mutability. However, there are times where you wish to strictly have elements that cannot be changed. For example the days of the week or the dates on a calendar. In order to do this we can use tuples! Python tuples are very similar to lists, however, unlike lists they are immutable meaning they can not be changed.</div>
                                    <div class="paragraph">In this supplemental, you’ll learn about tuples, how to create them, and why we use them.</div>
                                    <div class="tab_header">Constructing Tuples</div>
                                    <div class="paragraph_NI">The construction of tuples use () with elements separated by commas.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Create a tuple</div>
                                            <div>t = (1, 2, 3)</div>
                                            <div class="comment"># Check len just like a list</div>
                                            <div class="multi"><div class="purp">print</div>(<div class="purp">len</div>(t))</div>
                                            <div class="comment"># Tuples can also store different data types</div>
                                            <div class="multi">t = (<div class="str">'one'</div>, 2)</div>
                                            <div class="multi"><div class="purp">print</div>(t)</div>
                                            <div class="comment"># Use indexing just like we did in lists</div>
                                            <div class="multi"><div class="purp">print</div>(t[0])</div>
                                            <div class="comment"># Slicing just like a list</div>
                                            <div class="multi"><div class="purp">print</div>(t[-1])</div>
                                        </div>
                                        <div class="output">
                                            <div>3</div>
                                            <div>('one', 2)</div>
                                            <div>one</div>
                                            <div>2</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Basic Tuple Methods</div>
                                    <div class="paragraph">Tuples have built-in methods, but not as many as lists do. Let's look at two of them:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">t.<div class="purp">index</div>(<div class="str">'one'</div>)</div>
                                            <div class="comment"># Use .count to count the number of times a value appears</div>
                                            <div class="multi">t.<div class="purp">count</div>(<div class="str">'one'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>0</div>
                                            <div>1</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Immutability</div>
                                    <div class="paragraph">If you learned anything from this supplemental, it is that types are immutable. They cannot be changed.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">t[0] = <div class="str">'change'</div></div>
                                        </div>
                                        <div class="output">
                                            <div>TypeError                                 Traceback (most recent call last)</div>
                                            <div>{`<ipython-input-8-1257c0aa9edd> in <module>()`}</div>
                                            <div>{`----> 1 t[0]= 'change'`}</div>
                                            <div>TypeError: 'tuple' object does not support item assignment</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">Because of this immutability, tuples can't grow. Once a tuple is made we can not add to it.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">t.<div class="purp">append</div>(<div class="str">'nope'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>AttributeError                            Traceback (most recent call last)</div>
                                            <div>{`<ipython-input-9-b75f5b09ac19> in <module>()`}</div>
                                            <div>{`----> 1 t.append('nope')`}</div>
                                            <div>AttributeError: 'tuple' object has no attribute 'append'</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">When to use Tuples</div>
                                    <div class="paragraph">You may be wondering, "Why bother using tuples when they have fewer available methods?" Indeed, tuples are not used as often as lists in programming, but are used when immutability is necessary. If you are passing around an object and need to make sure it does not get changed, then a tuple becomes your solution; it provides a convenient source of data integrity.</div>
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
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson10?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson10;