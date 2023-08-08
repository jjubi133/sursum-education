import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit4Lesson3 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/XmdmHEzYOvA?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">While Loops</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">
                                    In the previous lesson, you learned about iterations and how they can be utilized in Python to shift through large quantities of elements. With this concept or iteration, in this supplement you’ll learn about while statements in Python, how they are created, and how they are used.                                    
                                    </div>
                                    <div class="paragraph">
                                    A while statement will repeatedly execute a single statement or group of statements as long as the condition is true. Think of it like an engine that runs only on true statements. As long as the condition is true, the engine has fuel and will continue to run. The reason it is called a 'loop' is because the code statements are looped through over and over again until the condition is no longer met.                                   
                                    </div>
                                    <div class="paragraph_NI">Here’s the syntax for a while loop:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">while</div> test:</div>
                                            <div class="comment in_1"># code statements</div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="comment in_1"># final code statements</div>
                                        </div>
                                    </div>

                                    <div class="paragraph_NI">Let’s look at a few simple while loops in action:</div>
                                    <div class = "code_block">
                                    <div class="input">
                                        <div>x=0</div>
                                            <div class="multi"><div class="blue">while</div> {'x<10'}:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'x is currently: '</div>, x)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">' x is still less than 10, adding 1 to x'</div>)</div>
                                            <div class="multi in_1">x+=1</div>
                                    </div>
                                    <div class="output">
                                            <div>x is currently: 0</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  1</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  2</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  3</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  4</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  5</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  6</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  7</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  8</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  9</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                        </div>
                                            </div>
                                    <div class="paragraph">
                                    Notice how many times the print statements occurred and how the while loop kept going until the True condition was met, which occurred once x==10. Once x==10 occurred, the loop stopped itself since the True condition ({'x<10'}) was no longer met.                                    
                                    </div>
                                    <div class="paragraph_NI">Let's see how we could add an else statement to the while loop:</div>
                                    <div class = "code_block">
                                    <div class="input">
                                        <div>x=0</div>
                                            <div class="multi"><div class="blue">while</div> {'x<10'}:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'x is currently: '</div>,x)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">' x is still less than 10, adding 1 to x'</div>)</div>
                                            <div class="multi in_1">x+=1</div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'All Done!'</div>)</div>
                                    </div>
                                    <div class="output">
                                            <div>x is currently: 0</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  1</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  2</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  3</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  4</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  5</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  6</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  7</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  8</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x is currently:  9</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>All Done!</div>
                                        </div>
                                        </div>
                                        <div class="tab_header">break, continue, pass</div>
                                <div class="paragraph">
                                Like for loops, while loops have break, continue, and pass statements that can add a bit more functionality to our code. However, the break, continue, and pass statements for while loop have some differences which must be pointed out. Here’s the basic run down for the three statements and what they do in a while loop. 
                                </div>

                                <div class="paragraph">
                                break: Breaks out of the current closest enclosing loop.
                                continue: Goes to the top of the closest enclosing loop.
                                pass: Does nothing at all.
                                </div>
                                <div class="paragraph_NI">Thinking about break and continue statements, the general format of the while loop looks like this:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">while</div> test:</div>
                                            <div class="comment in_1"># code statement</div>
                                            <div class="multi in_1"><div class="blue">if</div> test:</div>
                                            <div class='in_2'><div class='blue'>break</div></div>
                                            <div class="multi in_1"><div class="blue">if</div> test:</div>
                                            <div class='in_2'><div class='blue'>continue</div></div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="comment in_1"># code statement</div>
                                        </div>
                                    </div>

                                    <div class="paragraph_NI">Let's take a loop at some examples:</div>
                                    <div class = "code_block">
                                    <div class="input">
                                        <div>x=0</div>
                                            <div class="multi"><div class="blue">while</div> {'x<10'}:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'x is currently: '</div>,x)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">' x is still less than 10, adding 1 to x'</div>)</div>
                                            <div class="multi in_1">x+=1</div>
                                            <div class="multi"><div class="blue">if</div> x==3:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'x==3'</div>)</div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'continuing...'</div>)</div>
                                            <div class=" in_1"><div class='blue'>continue</div></div>
                                    </div>
                                    <div class="output">
                                            <div>x is currently: 0</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  1</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  2</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>x==3</div>
                                            <div>x is currently:  3</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  4</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  5</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  6</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  7</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  8</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  9</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                        </div>
                                        </div>

                                        <div class="paragraph_NI">Note how we have a printed statement when x==3, and a continue being printed out as we continue through the outer while loop. Let's put in a break once x ==3 and see if the result makes sense:</div>
                                        <div class = "code_block">
                                    <div class="input">
                                        <div>x=0</div>
                                            <div class="multi"><div class="blue">while</div> {`x<10`}:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'x is currently: '</div>,x)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">' x is still less than 10, adding 1 to x'</div>)</div>
                                            <div class="multi in_1">x+=1</div>
                                            <div class="multi"><div class="blue">if</div> x==3:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Breaking because x==3'</div>)</div>
                                            <div class="multi in_1"><div class='blue'>break</div></div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'continuing...'</div>)</div>
                                            <div class="in_1"><div class='blue'>continue</div></div>
                                    </div>
                                    <div class="output">
                                            <div>x is currently: 0</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  1</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>continuing...</div>
                                            <div>x is currently:  2</div>
                                            <div>x is still less than 10, adding 1 to x</div>
                                            <div>Breaking because x==3</div>
                                        </div>
                                        </div>

                                        <div class="paragraph">Note how the other else statement wasn't reached and continuing was never printed.</div>
                                        <div class="paragraph">After these brief but simple examples, you should feel comfortable using while statements in your code.</div>
                                        <div class="paragraph_NI">Caution: It is possible to create an infinitely running loop with while statements. For example:</div>
                                    <div class = "code_block">
                                        <div class="comment in_1"># DO NOT RUN THIS CODE!</div>
                                    <div class="input">
                                        <div class="multi"><div class="blue">while</div> <div class="blue">True</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'I'm stuck in an infinite loop!'</div>)</div>
                                    </div>    
                                    </div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 0</div>
                                            <div class="multi"><div class="blue">while</div>(x {'<'} 5):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">‘hey add 1’</div>)</div>
                                            <div class="multi in_1">x += 1</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the code above?",
                                              FindAnswer:["False", "True ", "hey add 1 hey add 1 hey add 1 hey add 1 hey add 1", "hey add 1 hey add 1 hey add 1 hey add 1 hey add 1 hey add 1"], 
                                              rightAnswer:"hey add 1 hey add 1 hey add 1 hey add 1 hey add 1"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 10</div>
                                            <div class="multi"><div class="blue">while</div>(x {'<='} 100):</div>
                                            <div class="multi in_1">x += 2</div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>

                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the code above?",
                                                FindAnswer:["100", "98", "102", "Infinite loop"], 
                                                rightAnswer:"102"
                                            }
                                        }
                                    />
                                      <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 0</div>
                                            <div class="multi"><div class="blue">while</div>(x {'<'} 20):</div>
                                            <div class="multi in_1">x = x + 1</div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "0", "22", "19", "20"], 
                                                rightAnswer:"20"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create a while loop that adds all of the numbers starting from 0 and up to (and including) 100. We’ll start you off.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 0</div>
                                            <div class="multi">sum = 0</div>
                                        </div>
                                    </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit4Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit4Lesson3;