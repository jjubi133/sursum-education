import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson8 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/3i-hJuDR4ao?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Nested Statements and Scope</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Nested Statements and Scope</div>
                                    <div class="paragraph">Now that we have gone over writing our own functions, it's important to understand how Python deals with the variable names you assign. In this supplemental, you’ll learn about how to create a variable name in Python and understand how the  name is stored in a name-space. You’ll also learn about scopes and how that affects how the variable name is used throughout your code.</div>
                                    <div class="paragraph_NI">Let's start with a quick thought experiment; imagine the following code:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                        <div>x = 25</div>
                                        <div class="multi"><div class="blue">def</div> <div class='purp'>printer</div>():</div>
                                        <div class="in_1">x = 50</div>
                                        <div class="multi in_1"><div class="blue">return</div> x</div>
                                        <div class='multi'><div class='comment'># print(x)</div></div>
                                        <div class='multi'><div class='comment'># print(printer())</div></div>
                                        </div>
                                    </div>
                                    <div class="paragraph">What do you imagine the output of printer() is? 25 or 50? What is the output of print x? 25 or 50?</div>

                                    <div class='code_block'>
                                        <div class="input">
                                            <div class='multi'><div class='purp'>print</div>(x)</div>
                                        </div>
                                        <div class="output">
                                            <div>25</div>
                                        </div>
                                        <div class="input">
                                            <div class='multi'><div class='purp'>print</div>(<div class='purp'>printer</div>())</div>
                                        </div>
                                        <div class="output">
                                            <div>50</div>
                                        </div>
                                    </div>

                                    <div class="paragraph">Interesting! But how does Python know which x you're referring to in your code? This is where the idea of scope comes in. Python has a set of rules it follows to decide what variables (such as x in this case) you are referencing in your code. This idea of scope in your code is very important to understand in order to properly assign and call variable names.</div>
                                    <div class="paragraph_NI">The idea of scope can be described by 3 general rules:</div>
                                    <ol>
                                        <li>Name assignments will create or change local names by default.</li>
                                        <li>Name references search (at most) four scopes, these are:
                                            <ul>
                                                <li>local</li>
                                                <li>enclosing functions</li>
                                                <li>global</li>
                                                <li>built-in</li>
                                            </ul>
                                        </li>
                                        <li>Names declared in global and nonlocal statements map assigned names to enclosing module and function scopes.</li>
                                    </ol>

                                    <div class="paragraph">The statement in #2 above can be defined by the LEGB rule.</div>
                                <ul>
                                    <li>L: Local — Names assigned in any way within a function (def or lambda), and not declared global in that function.</li>
                                    <li>E: Enclosing function locals — Names in the local scope of any and all enclosing functions (def or lambda), from inner to outer.</li>
                                    <li>G: Global (module) — Names assigned at the top-level of a module file, or declared global in a def within the file.</li>
                                    <li>B: Built-in (Python) — Names preassigned in the built-in names module : open, range, SyntaxError, etc.</li>
                                </ul>

                                <div class="tab_header">Quick examples of LEGB</div>
                                <div class="tab_header">Local</div>
                                <div class='code_block'>
                                    <div class="input">
                                        <div class="comment"> # x is local here:</div>
                                        <div>f = <div class='blue'>lambda</div> x:x**2</div>
                                    </div>
                                </div>
                                <div class="tab_header">Enclosing function locals</div>
                                <div class="paragraph">This occurs when we have a function inside a function (nested functions)</div>
                                <div class = "code_block">
                                            <div class ="input">
                                            <div class='multi'>name = <div class='str'>'This is a global name'</div></div>
                                            <div class="multi"><div class="blue">def</div> <div class='purp'>greet</div>():</div>
                                            <div class="comment in_1"># Enclosing function</div>
                                            <div class='multi in_1'>name = <div class='str'>'Sammy'</div></div>

                                            <div class="multi in_1"><div class="blue">def</div> <div class='purp'>hello</div>():</div>
                                            <div class="multi in_2"> print(<div class='str'>'Hello '</div>+name)</div>
                                            <div class="multi in_1">hello()</div>
                                            <div>greet()</div>
                     
                                        </div>
                                        <div class="output">
                                            <div>Hello Sammy</div>
                                      
                                        </div>
                                    </div> 
                                <div class="paragraph">Note how Sammy was used because the hello() function was enclosed inside of the greet function.</div>
                                
                                <div class="tab_header">Global</div>
                                <div class="paragraph">A quick way to test for global variables is to see if another cell recognizes the variable.</div>
                                <div class="code_block">
                                    <div class="input">
                                        <div class='multi'><div class='purp'>print</div>(name)</div>
                                        <div class='comment'># This is a global name</div>
                                    </div>
                                </div>

                                <div class="tab_header">Built-in</div>
                                <div class="paragraph">These are the built-in function names in Python (don't overwrite these).</div>
                                <div class="code_block">
                                    <div class="input">
                                    <div class='multi'><div class='purp'>len</div></div>
                                    <div class='multi'>{'<function '}<div class='purp'>len</div>{'>'}</div>
                                    </div>
                                </div>

                                <div class="tab_header">Local Variables</div>
                                <div class="paragraph">When you declare variables inside a function definition, they are not related in any way to other variables with the same names used outside the function - i.e. variable names are local to the function. This is called the scope of the variable. All variables have the scope of the block they are declared in starting from the point of definition of the name.</div>
                                <div class="paragraph_NI">Example:</div>
                                <div class = "code_block">
                                            <div class ="input">
                                            <div>x = 50</div>
                                            <div class="multi"><div class="blue">def</div> <div class='purp'>func</div>(x):</div>
                                            <div class="multi in_1">print(<div class='str'>'x is'</div>, x)</div>
                                            <div class="in_1">x = 2</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'Changed local x to'</div>, x)</div>
                                            <div>func(x)</div>
                                            <div class="multi"><div class="purp">print</div>(<div class='str'>'x is still'</div>, x)</div>
                                            </div>
                                            <div class="output">
                                                <div>x is 50</div>
                                                <div>Changed local x to 2</div>
                                                <div>x is still 50</div>
                                            </div>
                                </div>
                                        
                                <div class="paragraph">The first time that we print the value of the name x with the first line in the function’s body, Python uses the value of the parameter declared in the main block above the function definition.)</div>
                                <div class="paragraph">Next, we assign the value 2 to x. The name x is local to our function. So, when we change the value of x in the function, the x defined in the main block remains unaffected.</div>
                                <div class="paragraph">With the last print statement, we display the value of x as defined in the main block, thereby confirming that it is actually unaffected by the local assignment within the previously called function.</div>

                                <div class="tab_header">The global statement</div>
                                <div class="paragraph">If you want to assign a value to a name defined at the top level of the program then you have to tell Python that the name is not local, but it is global. We do this using the global statement. It is impossible to assign a value to a variable defined outside a function without the global statement.</div>
                                <div class="paragraph">You can use the values of such variables defined outside the function (assuming there is no variable with the same name within the function). However, this is not encouraged and should be avoided since it becomes unclear to the reader of the program as to where that variable’s definition is. Using the global statement makes it very clear that the variable is defined in an outermost block.</div>
                                <div class = "code_block">
                                        <div class ="input">
                                            <div>x = 50</div>
                                            <div class="multi"><div class="blue">def</div> <div class="purp">func</div>():</div>
                                            <div class="multi in_1"><div class="blue">global</div> x</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'This function is now using the global x!'</div>)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'Because of global x is: '</div>, x)</div>
                                            <div class="multi in_1">x = 2</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'Ran func(), changed global x to'</div>, x)</div>
                                            <br></br>
                                            <div class="multi"><div class="purp">print</div>(<div class='str'>'Before calling func(), x is: '</div>, x)</div>
                                            <div>func()</div>
                                            <div class="multi"><div class="purp">print</div>(<div class='str'>'Value of x (outside of func()) is: '</div>, x)</div>
                                        </div>
                                            <div class="output">
                                                <div>Before calling func(), x is:  50</div>
                                                <div>This function is now using the global x!</div>
                                                <div>Because of global x is:  50</div>
                                                <div>Ran func(), changed global x to 2</div>
                                                <div>Value of x (outside of func()) is:  2</div>
                                            </div>
                                </div>
                                        
                                <div class="paragraph">The global statement is used to declare that x is a global variable - hence, when we assign a value to x inside the function, that change is reflected when we use the value of x in the main block.</div>
                                <div class="paragraph">You can specify more than one global variable using the same global statement e.g. global x, y, z.</div>
                                
                                <div class="tab_header">Conclusion</div>
                                <div class="paragraph">You should now have a good understanding of Scope. One last mention is that you can use the globals() and locals() functions to check what are your current local and global variables.</div>
                                <div class="paragraph">Another thing to keep in mind is that everything in Python is an object. You can assign variables to functions just like you can with numbers.</div>



                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does LEGB stand for in Python?",
                                              FindAnswer:["Logic, Eligibility, Global, Boolean", "Last, Engage, Grapple, Barrel", "Local, Enclosing, Global, Built-in", "Logistical, Eligibility, Global, Boolean"], 
                                              rightAnswer:"Local, Enclosing, Global, Built-in"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which statement is true regarding nested statements?",
                                                FindAnswer:[ "They are not possible in Python as they require Virtual Machines (VMs) to run", "Nested statements can be created in Python following the LEGB rule", "There can only be created through logical operators", "They are an outdated portion of Python 2.4"], 
                                                rightAnswer:"Nested statements can be created in Python following the LEGB rule"
                                            }
                                        }
                                    />
                                     <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 100</div>
                                            <div class="multi"><div class="blue">def</div> <div class="purp">func</div>(x):</div>
                                            <div class="multi in_1"><div class="purp">print</div>{"(f'x is equal to {x}')"}</div>
                                            <div class="multi in_1">x = 13</div>
                                            <div class="multi in_1"><div class="purp">print</div>(f<div class='str'>'Local change!'</div>)</div>
                                            <div class="multi">func(2,3,1,2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will the output of the following be?",
                                                FindAnswer:[ "13", "Local Change!", "x is equal to 100", "x is equal to 100 Local change!"], 
                                                rightAnswer:"x is equal to 100 Local change!"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create a program that has a global variable, x. It can be any number you assign. Then create a function that has a local variable with a new value of x. When this local x is passed through the function, make the function return a number different than the global and local x.</div>
                                    <div class="paragraph">For example, if your global x = 5 and your local x = 8, then the number returned by the function shouldn’t be 5 or 8. Instead, you should make the function return a completely different value of your choice. Once this has been returned, divide the global x with the function to see what you get.</div>
                                    <div class="paragraph">*Hint, This should be the final line of code for this program*</div>
                                    <div class="paragraph">print(x/func_name(x))</div>
           
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson8?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson8;