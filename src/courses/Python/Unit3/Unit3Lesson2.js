import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson2 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/vzfFz7zT-6E?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Using Comparison Operators with Logical Operators</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Chained Comparison Operators</div>
                                    <div class="paragraph">An interesting feature of Python is the ability to chain multiple comparisons to perform a more complex test. You can use these chained comparisons as shorthand for larger Boolean Expressions.</div>
                                    <div class="paragraph">In this lecture we will learn how to chain comparison operators and we will also introduce two other important statements in Python: <div class="bold">and</div> and <div class="bold">or</div>.</div>
                                    <div class="paragraph_NI">Let's look at a few examples of using chains:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 {`<`} 2 {`<`} 3)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>  
                                    <div class="paragraph">The above statement checks if 1 was less than 2 <div class="bold">and</div> if 2 was less than 3. We could have written this using an <div class="bold">and </div> statement in Python:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 {`<`} 2 <div class="blue">and</div> 2 {`<`} 3)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>  
                                    <div class="paragraph">The <div class="bold">and</div> is used to make sure two checks have to be true in order for the total check to be true. Let's see another example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 {`<`} 3 {`>`} 2)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>   
                                    <div class="paragraph">The above checks if 3 is larger than both of the other numbers, so you could use <div class="bold">and</div> to rewrite it as:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 {`<`} 3 <div class="blue">and</div> 3 {`>`} 2)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>   
                                    <div class="paragraph">It's important to note that Python is checking both instances of the comparisons. We can also use <div class="bold">or</div> to write comparisons in Python. For example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 == 2 <div class="blue">or</div> 2 {`<`} 3)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>  
                                    <div class="paragraph">Note how it was true; this is because with the <div class="bold">or</div> operator, we only need one or the other to be true. Let's see one more example to drive this home:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(1 == 1 <div class="blue">or</div> 100 == 1)</div>
                                        </div>
                                        <div class="output">
                                            <div>True</div>
                                        </div>
                                    </div>  
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(1{`<`}4 <div class='blue'>and</div> 7{`>`}2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the output of the code above?",
                                              FindAnswer:["and", "False", "True", "equals"], 
                                              rightAnswer:"True"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(182 {`<`} 293 <div class='blue'>or</div> 132 {`>`}= 423)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["True", "False", "or", "Comparison operator"], 
                                                rightAnswer:"True"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(3 {`<= 4 <`} 9 <div class='blue'>and</div> 51 {`>= 51 >`} 32)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["True", "False", "error", "This will return the type for ‘and’"], 
                                                rightAnswer:"True"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Create a program that prints out the boolean when comparing the value between x, y, z. Do the following:</div>
                                    <ul class='list'>
                                        <li>Set x above the value of 100, set the value of y above 200, set the value of above 300</li>
                                        <li>Then, utilize the following comparison operators and logical operators: {`<=, <, >, >=`}, ‘and’, ‘or’</li>
                                        <li>Mix and match the comparison operators and logical operators with your values of x, y, and z (Example: {`x < y >= z and z >= `}x)</li>
                                    </ul>
                                    <div class='paragraph'>Switch around your values and write down the results. Once you’re comfortable with the program, include other values and variables and try to navigate how your program decided the output.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit3Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson2;