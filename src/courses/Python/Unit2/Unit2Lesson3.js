import React, { Fragment } from "react";
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
                        <iframe src="https://www.youtube.com/embed/GbvLquCfOIY?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Variables</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Variables...what are they?</div>
                                    <div class="paragraph">In python, variables are like storage containers that can hold data types for you to call anywhere in your code. They save you time and energy when in ways that programming would not be possible otherwise. In this supplemental, you’ll be looking at how to create variables and the different ways you can use them.</div>
                                    <div class="tab_header">Rules for variable names</div>
                                    <div class="paragraph">Like all things Python, there are certain rules which must be followed when creating variable names. Here’s a quick list of what you either cannot or should avoid when creating variable names. </div>
                                    <ul class="list">
                                        <li>Names can not start with a number</li>
                                        <li>Names can not contain spaces, use "_" instead</li>
                                        <li>Names can not contain any of these symbols: {`'",<>/?:|\\!@#%^&*~-+`}</li>
                                        <li>It's highly advised that variable names use lowercase letters with underscores for spaces</li>
                                        <li>Avoid using Python built-in keywords like list and str</li>
                                        <li>Avoid using the single characters l (as in like), O (as in Orbit) and I (as in Ice). They can be confused for 1 and 0</li>
                                    </ul>  
                                    <div class="tab_header">Dynamic Typing</div>      
                                    <div class="paragraph">Python uses dynamic typing. This means you can reassign variables to different data types (assign a variable new things). This makes Python very flexible in assigning data types and is what sets Python apart from other programming languages that are statically typed. </div>      
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>my_dog=3</td>
                                            <td>
                                                <div>my_dog</div>
                                                <div>{`>>`}3</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>my_dog= ‘Molly’</td>
                                            <td>
                                                <div>my_dog</div>
                                                <div>{`>>`}Molly</div>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">Variable assignment follows a strict format of variable_name = object, where a single equals sign = is an assignment operator. An assignment operator is what assigns an object to the variable for it to be “stored”. </div> 
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>a=5</td>
                                            <td>
                                                <div>a</div>
                                                <div>{`>>`}5</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>a=10</td>
                                            <td>
                                                <div>a</div>
                                                <div>{`>>`}10</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>a+a</td>
                                            <td>
                                                <div>{`>>`}20</div>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">Python lets you reassign variables with a reference to the same object.</div>
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>a=10</div>
                                                <div>a=a+20</div>
                                            </td>
                                            <td>
                                                <div>a</div>
                                                <div>{`>>`}30</div>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">There's actually a shortcut for this. Python lets you add, subtract, multiply and divide numbers with reassignment using += for addition, -= for subtraction, *= for multiplication, and /= for division.</div>
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>b=5</div>
                                                <div>b+=10</div>
                                            </td>
                                            <td>
                                                <div>b</div>
                                                <div>{`>>`}15</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>b*=3</td>
                                            <td>
                                                <div>b</div>
                                                <div>{`>>`}45</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>b</td>
                                            <td>
                                                <div>b</div>
                                                <div>{`>>`}45</div>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="tab_header">What’s the type?</div>
                                    <div class="paragraph">What if you created a variable and you wanted to know what data type the variable is assigned. Well, you can check what type of object is assigned to a variable by using Python's built-in type() function. A quick reminder of what the different data types in Python are:</div>
                                    <ul class="list">
                                        <li>int (for integer)</li>
                                        <li>float</li>
                                        <li>str (for string)</li>
                                        <li>list</li>
                                        <li>tuple</li>
                                        <li>dict (for dictionary)</li>
                                        <li>set</li>
                                        <li>bool (for Boolean True/False)</li>
                                    </ul>
                                    <div class="paragraph">To use the type function simply write out type(variable_name) and it will return to you the data type of the object found in that variable.</div>
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>a = (1,2)</div>
                                                <div>type(a)</div>
                                            </td>
                                            <td>
                                                <div>tuple</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x= 10</div>
                                            <div class="multi">x= 14</div>
                                            <div class="multi"><div class="purp">print</div>(x+x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What would the following output?",
                                              FindAnswer:["24", "20", "28", "4"], 
                                              rightAnswer:"28"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = <div class="str">'The sun is shining today'</div></div>
                                            <div class="multi">y = <div class="str">'and the sky is blue'</div></div>
                                            <div class="multi"><div class="purp">print</div>(x+y)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What would the following output?",
                                                FindAnswer:["The sun is shining todayand the sky is blue", "The sun is shining today and the sky is blue", "x + y", "Nothing will be printed out"], 
                                                rightAnswer:"The sun is shining todayand the sky is blue"
                                            }
                                        }
                                    />
                                     <div class="code_block">
                                        <div class="input">
                                            <div class="multi">a = 23.12</div>
                                            <div class="multi">a = a + a</div>
                                            <div class="multi"><div class="purp">print</div>(a)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What would the following output?",
                                                FindAnswer:[ "23.12", "46.24", "69.36", "84.57"], 
                                                rightAnswer:"46.24"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create multiple variables and assign different data types to them. Test around with the functionalities of the variables. Print them out, see if you can add them together, get a grasp of what you can do with variables in Python.
</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson3;