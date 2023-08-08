import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson4 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/Bjuel1CRue4?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Using Logic in Functions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Adding Logic to Internal Function Operations</div>
                                    <div class="paragraph">So far we know quite a bit about constructing logical statements with Python, such as if/else/elif statements, for and while loops, etc. Well, we can also implement logic into functions. In fact, it wouldn’t make sense if we were to exclude logical statements into functions. In this supplemental, you’ll learn about adding logical statements into Python. Let's now see how we can perform these operations within a function.</div>
                                   
                                    <div class="tab_header">Check if a number is even</div>
                                    <div class="paragraph_NI">Recall the mod operator % which returns the remainder after division, if a number is even then mod 2 (% 2) should be == to zero.</div>
                                        <table>
                                            <tr>
                                                <th>Syntax</th>
                                                <th>Outcome</th>
                                            </tr>
                                            <tr>
                                                <td>2 % 2</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>20 % 2</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>21 % 2</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>20 % 2 == 0</td>
                                                <td>True</td>
                                            </tr>
                                            <tr>
                                                <td>21 % 2 == 0</td>
                                                <td>False</td>
                                            </tr>
                                        </table>
                                        
                                        <div class="paragraph_NI">Let's use this to construct a function. Notice how we simply return the boolean check.</div>
                                            <div class = "code_block">
                                                <div class ="input">
                                                <div class="multi"><div class="blue">def</div> even_check(number):</div>
                                                <div class="multi in_1"><div class="purp">return</div> number % 2 == 0</div>
                                                <div class="multi">even_check(20)</div>
                                                <div class="multi">even_check(21)</div>
                                                <div class="multi">print_result(10,5)</div>
                                                </div>
                                                <div class = "output">
                                                        <div>True</div>
                                                        <div>False</div>
                                            </div>
                                            </div> 

                                    <div class="tab_header">Return all even numbers in a list</div>
                                    <div class="paragraph_NI">Let's add more complexity, we now will return all the even numbers in a list, otherwise return an empty list.</div>
                                    <div class = "code_block">
                                                <div class ="input">
                                                <div class="multi"><div class="blue">def</div> check_even_list(num_list):</div>
                                                <div class="multi">even_numbers = []</div>
                                                <div class="comment"># Go through each number</div>
                                                <div class="multi"><div class="blue">for</div> number <div class="blue">in</div> num_list:</div>
                                                <div class="comment in_1"># Once we get a "hit" on an even number, we append the even number</div>
                                                <div class="multi in_1"><div class="blue">if</div> number % 2 == 0:</div>
                                                <div class="in_1">even_numbers.<div class='purp'>append</div>(number)</div>
                                                <div class="comment  in_1"># Don't do anything if it’s not even</div>
                                                <div class="multi"><div class="blue">else</div>:</div>
                                                <div class="multi in_1 blue">pass</div>
                                                <div class="comment in_1"># Notice the indentation! This ensures we run through the entire for loop</div>
                                                <div class="multi"><div class='blue'>return</div> even_numbers</div>
<div></div>
                                                <div class="multi">check_even_list([1,2,3,4,5,6])</div>
                                                check_even_list([1,3,5])
                                                </div>
                                                <div class = "output">
                                                        <div>[2, 4, 6]</div>
                                                        <div>[]</div>
                                            </div>
                                            </div> 

                                  
                    
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> add(a,b):</div>
                                            <div class="multi in_1 in_1"><div class="blue">return</div> a+2, b+3</div>
                                            <div class="multi in_1">result = add(18, 9)</div>
                                            <div class="multi"><div class="purp">print</div>(result)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the following?",
                                              FindAnswer:["2", "12", "Syntax error", "(20, 12)"], 
                                              rightAnswer:"(20, 12)"
                                            }
                                        }
                                    />
                                        
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which is true about a Python Function:",
                                                FindAnswer:[ "A function will return nothing if a return statement is not added", "A function cannot be reused once parameters have been entered in", "A function is only executed once it is called", "Functions cannot be nested in Python"], 
                                                rightAnswer:"A function is only executed once it is called"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">myfunc</div>(name, color):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(name, color)</div>
                                            <div class="multi">myfunc(color = <div class="str">‘grey’</div>, name = <div class="str">‘Gandalf’</div>)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will the following output be?",
                                                FindAnswer:[ "The function will print Gandalf and grey", "There will be an error", "The function will not execute but no error will appear", "The function will print grey Gandalf"], 
                                                rightAnswer:"The function will print Gandalf and grey"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create a function that can calculate the volume of a rectangular prism. The formula to find the volume of a rectangular prism is L*W*H where L is the length, W is the width, and H is the height. Then have the function go through the result and print out only the values that are odd. An example would be if the volume of the sphere was 329 the values 3, 9 would be returned as they are odd. *Hint list comprehension will be useful*</div>

                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson4?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson4;