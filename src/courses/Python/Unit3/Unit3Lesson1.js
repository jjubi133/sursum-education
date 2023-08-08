import React, { Fragment } from "react";
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
                        <iframe src="https://www.youtube.com/embed/_ZjmlETRh40?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Comparison Operators</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Comparison Operators</div>
                                    <div class="paragraph">In this supplemental, you’ll learn about Comparison Operators in Python. These operators will allow us to compare variables and output a Boolean value (True or False).</div>
                                    <div class="tab_header">Table of Comparison Operators</div>       
                                    <div class="paragraph_NI">In the table below, a=3 and b=4.</div>     
                                    <table>
                                        <tr>
                                            <th>Operator</th>
                                            <th>Description</th>
                                            <th>Example</th>
                                        </tr>
                                        <tr>
                                            <td>==</td>
                                            <td>If the values of two operands are equal, then the condition becomes true.</td>
                                            <td>(a == b) is not true.</td>
                                        </tr>
                                        <tr>
                                            <td>!=</td>
                                            <td>If values of two operands are not equal, then the condition becomes true.</td>
                                            <td>(a != b) is true</td>
                                        </tr>
                                        <tr>
                                            <td>{`>`}</td>
                                            <td>If the value of the left operand is greater than the value of the right operand, then the condition becomes true.</td>
                                            <td>(a {`>`} b) is not true.</td>
                                        </tr>
                                        <tr>
                                            <td>{`<`}</td>
                                            <td>If the value of the left operand is less than the value of the right operand, then the condition becomes true.</td>
                                            <td>(a {`<`} b) is true.</td>
                                        </tr>
                                        <tr>
                                            <td>{`>`}=</td>
                                            <td>If the value of the left operand is greater than or equal to the value of the right operand, then the condition becomes true.</td>
                                            <td>(a {`>`}= b) is not true.</td>
                                        </tr>
                                        <tr>
                                            <td>{`<`}=</td>
                                            <td>If the value of the left operand is less than or equal to the value of the right operand, then the condition becomes true.</td>
                                            <td>(a {`<`}= b) is true.</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph_NI">Let's now work through examples of each of these.</div> 
                                    <div class="tab_header">Equal To</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Note that == is a comparison operator, while = is an assignment operator.</div>
                                            <div class="multi"><div class="purp">print</div>(3 == 3)</div>
                                            <div class="multi"><div class="purp">print</div>(3 == 0)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>False</div>
                                        </div>
                                    </div>  
                                    <div class="tab_header">Not Equal To</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(4 != 1)</div>
                                            <div class="multi"><div class="purp">print</div>(2 != 2)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>False</div>
                                        </div>
                                    </div> 
                                    <div class="tab_header">Greater Than</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(7 {`>`} 1)</div>
                                            <div class="multi"><div class="purp">print</div>(1 {`>`} 4)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>False</div>
                                        </div>
                                    </div>   
                                    <div class="tab_header">Less Than</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(3 {`<`} 4)</div>
                                            <div class="multi"><div class="purp">print</div>(5 {`<`} 1)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>False</div>
                                        </div>
                                    </div> 
                                    <div class="tab_header">Greater Than or Equal To</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(6 {`>`}= 2)</div>
                                            <div class="multi"><div class="purp">print</div>(3 {`>`}= 1)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>True</div>
                                        </div>
                                    </div>          
                                    <div class="tab_header">Less Than or Equal To</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(2 {`<`}= 2)</div>
                                            <div class="multi"><div class="purp">print</div>(2 {`<`}= 4)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                            <div>True</div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What boolean will be the output of 7 < 8",
                                              FindAnswer:["True", "False", "Int", "There is no output"], 
                                              rightAnswer:"True"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>x = 18</div>
                                            <div>y = 28</div>
                                            <div>z = x + y - 23</div>
                                            <div class='multi'><div class='purp'>print</div>(x {`>`} z)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["True", "False", "Type", "There is no output"], 
                                                rightAnswer:"False"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(32 {`<`}= 58 {`>`}= 23)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "Greater than or equal to", "False", "Syntax Error", "True"], 
                                                rightAnswer:"True"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Create a program that prints out the boolean when comparing the value between x and y. Check for the following:</div>
                                    <div class='paragraph'>x is equal to y, x is less than y, x is greater than y, x is less than or equal to y, x is greater than or equal to y, and x != y . You can assign x and y to be whatever values you wish. Run your program 3 times and each time you run your program, change the values of x and y to different values than the values previously assigned. For example, if the first time you ran your program, x = 3 and y = 7, the second time you run the program, you should assign new values to x and y such as x = 8 and y = 2.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit3Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson1;