import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson2 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/B2CpbZb6q2A?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Numbers</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Types of numbers</div>
                                    <div class="paragraph">Python has various "types" of numbers. In this supplemental you’ll be looking at integers and floating point numbers.</div>
                                    <div class="paragraph">Integers are whole numbers, positive or negative. Examples of integers are: 5 and -5.</div>
                                    <div class="paragraph">Floating point numbers in Python are different from integers because they have a decimal point in them or use an exponential (e) to define the number. An example of a floating point number would be 5.0 or -8.3. Another way you might see floating point numbers written as is with the previously mentioned (e). An example would be something like: 3E2 (3 times 10 to the power of 2).</div>
                                    <div class="paragraph_NI">Here is a table of the two main types we will spend most of our time on:</div>                
                                    <table>
                                        <tr>
                                            <th>Examples</th>
                                            <th>Number "Type"</th>
                                        </tr>
                                        <tr>
                                            <td>1,2,-5,1000</td>
                                            <td>Integers</td>
                                        </tr>
                                        <tr>
                                            <td>1.2,-0.5,2e2,3E2</td>
                                            <td>Floating-point numbers</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph_NI">Below are some of the most commonly used Arithmetic Operators along with a few examples.</div> 
                                    <table>
                                        <tr>
                                            <th>Operator</th>
                                            <th>Example</th>
                                            <th>Definition</th>
                                        </tr>
                                        <tr>
                                            <td>Addition (+)</td>
                                            <td>x+3</td>
                                            <td>Adds two values together</td>
                                        </tr>
                                        <tr>
                                            <td>Subtraction (-)</td>
                                            <td>x-1</td>
                                            <td>Subtracts one value from another</td>
                                        </tr>
                                        <tr>
                                            <td>Multiplication (*)</td>
                                            <td>x*5</td>
                                            <td>Multiplies one value with another</td>
                                        </tr>
                                        <tr>
                                            <td>Division (/)</td>
                                            <td>x/y</td>
                                            <td>Divides one value from another</td>
                                        </tr>
                                        <tr>
                                            <td>Modulus (%)</td>
                                            <td>x%y</td>
                                            <td>Finds the remainder between two numbers after being divided with one another</td>
                                        </tr>
                                        <tr>
                                            <td>Floor (//)</td>
                                            <td>x//y</td>
                                            <td>Rounds the values of two divided values to the nearest whole number</td>
                                        </tr>
                                        <tr>
                                            <td>Exponent (**)</td>
                                            <td>x**y</td>
                                            <td>Raises one variable by the power of another</td>
                                        </tr>
                                    </table>
                                    <div class="tab_header">Basic Arithmetic</div>
                                    <table>
                                        <tr>
                                            <th></th>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <th>Addition</th>
                                            <td>
                                                <div>x=3</div>
                                                <div>x+5</div>
                                            </td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <th>Subtraction</th>
                                            <td>
                                                <div>x=8</div>
                                                <div>y=3</div>
                                                <div>x-y</div>
                                            </td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <th>Multiplication</th>
                                            <td>
                                                <div>x=9</div>
                                                <div>y=3</div>
                                                <div>x*y</div>
                                            </td>
                                            <td>27</td>
                                        </tr>
                                        <tr>
                                            <th>Division</th>
                                            <td>
                                                <div>x=60</div>
                                                <div>y=6</div>
                                                <div>x/y</div>
                                            </td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <th>Floor</th>
                                            <td>
                                                <div>x=66</div>
                                                <div>y=8</div>
                                                <div>x//y</div>
                                                <div class="comment">#The answer would be 8.25, however with Floor it rounds to the nearest whole number which is 8</div>
                                            </td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <th>Exponents</th>
                                            <td>
                                                <div>x=5</div>
                                                <div>y=3</div>
                                                <div>x**y</div>
                                            </td>
                                            <td>125</td>
                                        </tr>
                                    </table>
                                    
                                   
                                    
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(5**3+2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the following output?",
                                              FindAnswer:["17", "3125", "127", "25"], 
                                              rightAnswer:"127"
                                            }
                                        }
                                    />
                                      <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(9%2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the following output?",
                                                FindAnswer:["2", "9", "0", "1"], 
                                                rightAnswer:"1"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(9*3**2/3)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the following output?",
                                                FindAnswer:[ "0", "27", "27.0", "81"], 
                                                rightAnswer:"27.0"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI"> utilize the mathematical operators in Python to produce the output of 45. You must use multiplication, division, addition, and subtraction. Use a print statement and any values you wish to use to get the output of 45.
</div>
                                <div class = "paragraph_NI">Example:</div>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(x*y+z/a-b)</div>
                                        </div>
                                        <div class="input">
                                            <div class="multi">45</div>
                                        </div>
                                    </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson2;