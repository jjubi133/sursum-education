import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson3 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/99VVmG2OnyQ?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Functions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Introduction to Functions</div>
                                    <div class="paragraph">In this supplemental, you’ll finally learn about functions in Python, how to create them, and why they are so important. Functions will be one of our main building blocks when we construct larger and larger amounts of code to solve problems. This will be one of your greatest assets while coding. Let’s get right into it!</div>
                                   
                                    <div class="tab_header">What is a function?</div>
                                    <div class="paragraph">A function is a useful device that groups together a set of statements capable of running more than once. Think of them as miniature programs that you code within the overall program itself. You can create these functions and use them (call them) whenever you wish. They can also let us specify parameters that can serve as inputs to the functions.</div>
                                    <div class="paragraph">Functions are useful because they allow us to not have to write the same code over and over again. An example that shows why we would want to create a function is, imagine you needed to go through a list of employees and check who worked the most. The catch is, you need to do this for 100 different companies. Writing the same code over and over again for all 100 companies is absurd and would not be effective. Instead, you could create a function that calculates who worked the most hours and call that function for each company. So once you’ve coded the function, you don’t need to code it 99 other times for each individual company.</div>

                                    <div class="tab_header">Why use functions?</div>
                                    <div class="paragraph">Put simply, you should use functions when you plan on using a block of code multiple times. The function will allow you to call the same block of code without having to write it multiple times. This allows you to create more complex Python programs.</div>

                                    <div class="tab_header">Function Topics</div>
                                        <ul>
                                            <li>Def keyword</li>
                                            <li>Simple example of a function</li>
                                            <li>Calling a function with ()</li>
                                            <li>Accepting parameters</li>
                                            <li>Print versus return</li>
                                        </ul>
                                        
                                    <div class="tab_header">def keyword</div>
                                        <div class="paragraph_NI">This is the syntax for functions in Python: </div>
                                        <div class = "code_block">
                                            <div class="input">
                                                <div class="multi"><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                                <div class="in_1 comment">""</div>
                                                <div class="in_1"><div class='comment'>This is where the function's Document String (docstring) goes.</div></div>
                                                <div class="in_1"><div class='comment'>When you call help() on your function it will be printed out.</div></div>
                                                <div class="in_1 comment">""</div>
                                                <div class='multi'><div class = "comment in_1"># Do stuff here</div></div>
                                                <div class='multi'><div class = "comment in_1"># Return desired result</div></div>
                                            </div>
                                        </div>

                                        <div class="paragraph">We begin with def then a space followed by the name of the function. The function name can be whatever you want it to be but it is highly recommended that you keep the function name relevant to what your function actually does. For example, if you have a function that serves as a calculator for taxes, you should name your function tax_calculator. That way you don’t confuse yourself or others with weird, ambiguous function names. Also be careful with names, you wouldn't want to call a function the same name as a built-in function in Python (such as len).</div>
                                        <div class="paragraph">Next come a pair of parentheses with a number of arguments separated by a comma. These arguments are the inputs for your function. Basically what your function will take in and work with. You'll be able to use these inputs in your function and reference them. After this you put a colon.</div>
                                        <div class="paragraph">Here is the important step: you must indent to begin the code inside your function correctly. In the Jupyter notebook, when you hit enter to go to the next line, it should automatically indent. However, if it doesn’t hit tab to indent. The syntax is very important! </div>
                                        <div class="paragraph">Next you'll see the docstring; this is where you write a basic description of the function. Using Jupyter and Jupyter Notebooks, you'll be able to read these docstrings by pressing Shift+Tab after a function name. Docstrings allow you or other people to easily understand the code you write and the purpose of your function.</div>
                                        <div class="paragraph">After all this you begin writing the code you wish to execute.</div>
                                        <div class="paragraph">Alright, let’s go ahead and look at some examples!</div>

                                    <div class="tab_header">Simple example of a function</div>
                                        <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">say_hello</div>():</div>
                                            <div class="multi in_1"><div class="purp">print</div>('<div class="str">hello'</div>)</div>

                                            </div>
                                        </div>
                                    <div class="tab_header">Calling a function with ()</div>
                                    <div class="paragraph_NI">Call the function:</div>
                                        <div class = "code_block">
                                                <div class ="input">
                                                <div class="multi">say_hello():</div>
                                                </div>
                                                <div class = "output">
                                                    <div>hello</div>
                                                </div>
                                            </div>
                                    <div class="paragraph">If you forget the parenthesis (), it will simply display the fact that say_hello is a function. Remember to call functions with ().</div>
                                    <div class = "code_block">
                                                <div class ="input">
                                                <div class="multi">say_hello</div>
                                                </div>
                                                <div class = "output">
                                                    <div> {'<function __main__.say_hello>'}</div>
                                                </div>
                                            </div>

                                    <div class="tab_header">Accepting parameters (arguments)</div>
                                    <div class="paragraph_NI">Let's write a function that greets people with their name:</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">greeting</div>(name):</div>
                                            <div class="multi  in_1"><div class="purp">print</div>(f<div class='str'>Hello {'{name}'}'</div>)</div>
                                            
                                            </div>
                                            <div class = "output">
                                                    <div>greeting(Charles)</div>
                                                    <div>Hello Charles</div>
                                                </div>
                                        </div>

                                    <div class="tab_header">Using return</div>
                                    <div class="paragraph">So far we've only seen print() used in the code of a function to print out a result to the user, but if we actually want to save the outcome. Look at the previous example. What if we wanted to save “Hello Charlie” in our code? Well we can’t do it with a print() so instead we need to use the return keyword.</div>
                                    <div class="paragraph">SLet's see some examples that use a return statement. Return allows a function to return a result that can then be stored as a variable, or however a user wishes.</div>

                                    <div class="tab_header">Example: Addition function</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">add_num</div>(num1,num2):</div>
                                            <div class="multi in_1"><div class="purp">return</div> num1+num2</div>
                                            <div>addnum(8,5)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>13</div>
                                        </div>
                                    </div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class = "comment"># Can also save as variable due to return</div>
                                            <div class="multi">result = <div class="purp">add_num</div>(8,5)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(result)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>13</div>
                                        </div>
                                    </div>
                                    
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class = "comment"># What happens if we input two strings?</div>
                                            <div class="multi">add_num(<div class="str">'one'</div>,<div class="str">'two'</div>)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>'onetwo'</div>
                                        </div>
                                    </div>

                                    <div class="tab_header">Very Common Question: "What is the difference between return and print?"</div>
                                    <div class="paragraph">The return keyword allows you to actually save the result of the output of a function as a variable. The print() function simply displays the output to you, but doesn't save it for future use. </div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">print_result</div>(a,b):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(a+b)</div>
                                            <div class="multi"><div class="blue">def</div> <div class="purp">return_result</div>(a,b):</div>
                                            <div class="multi in_1"><div class="blue">return</div> a+b</div>
                                            <div class="multi"><div class="purp">print_result(10,5)</div></div>
                                            </div>
                                            <div class = "output">
                                                    <div>15</div>
                                        </div>
                                    </div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class = "comment"># You won't see any output if you run this in a .py script</div>
                                            <div class="multi"><div class="purp">return_result</div>(10,5)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>15</div>
                                        </div>
                                    </div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class = "comment"># But what happens if we actually want to save this result for later use?</div>
                                            <div class="multi">my_result = <div class="purp">print_result</div>(20,20)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>40</div>
                                        </div>
                                    </div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class = "comment"># Be careful. Notice how print_result() doesn't let you actually save the result to a variable. It only prints it out, with print() returning None for the assignment.</div>
                                            <div class="multi">my_result</div>
                                            <div class="multi"><div class='gre'>type</div>(my_result)</div>
                                            </div>
                                            <div class = "output">
                                                    <div>NoneType</div>
                                        </div>
                                    </div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi">my_result = <div class="purp">return_result</div>(20,20)</div>
                                            <div class="multi"><div class='purp'>print</div>(my_result)</div>
                                            <div class="multi"><div class='purp'>print</div>my_result+my_result</div>
                                            </div>
                                            <div class = "output">
                                                    <div>40</div>
                                                    <div>80</div>
                                        </div>
                                    </div>
                                    
                    
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">hello</div>(name = <div class="str">‘noName’</div>):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(f<div class='str'>'hello{`{name}`}'</div>)</div>
                                            <div class="multi">hello()</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the following?",
                                              FindAnswer:["f'hello{name}'", "‘hello noName’", "hellonoName", "Syntax error"], 
                                              rightAnswer:"hellonoName"
                                            }
                                        }
                                    />
                                        <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">myfunc</div>(name)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'I love this name'</div></div>
                                            <div class="multi">myFavName = <div class="purp">myfunc</div>(Benji)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Is there anything wrong with the following code?",
                                                FindAnswer:[ "There is nothing wrong with the code above", "The syntax for creating this function is incorrect", "To save a function’s output to a variable you must use return instead of print", "In order for this function to work, there must be a default parameter in case the user does not enter one"], 
                                                rightAnswer:"To save a function’s output to a variable you must use return instead of print"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">maths</div>(a,b):</div>
                                            <div class="multi in_1"><div class="blue">return</div><div class="str">(a+b)</div></div>
                                            <div class="multi in_1"><div class="blue">return</div><div class="str">(a*b)</div></div>
                                            <div class="multi"><div class="purp">maths</div>(5, 3)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will the following output be?",
                                                FindAnswer:[ "8", "15", "125", "There would be no output"], 
                                                rightAnswer:"8"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create a function that takes in two values and checks if they are both even values. If both values are not even, return the statement ‘they are not even’. If they are both even, return the sum of the values. Then assign that value to a variable and print out the variable. </div>

                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson3;