import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson6 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/22Q4NaRMtao?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">String Properties and Methods</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">String Properties</div>
                                    <div class="paragraph">Now that we’ve gone over Strings and how we can use indexing and slicing, let’s take a look at some other governing principles of String properties. It's important to note that Strings have an important property known as immutability, meaning once a string is created the elements within it can not be changed or replaced. Here’s a quick example.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi">b = <div class="str">‘Hello World’</div></div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World</div>
                                        </div>
                                        <div class="input">
                                            <div class="comment"># Let's try to change the first letter to 'x'</div>
                                            <div class="multi">b[0] = <div class="str">'x'</div></div>
                                        </div>
                                        <div class="output">
                                            <div>TypeError                                 Traceback (most recent call last)</div>
                                            <div>{`<ipython-input-26-976942677f11> in <module>()`}</div>
                                            <div>      1 # Let's try to change the first letter to 'x'</div>
                                            <div>----{`>`} 2 b[0] = 'x'</div>
                                            <div>TypeError: 'str' object does not support item assignment</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">The error is telling us that we cannot change the item assignment. In english, this means we can’t just replace the characters in a String.</div>
                                    <div class="paragraph">So do we have any options? Well what we can do is concatenate Strings. Concatenation allows us to add onto a String. Let’s take a look at an example.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi">b = <div class="str">‘Hello World’</div></div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                            <div class="comment"># Concatenate strings!</div>
                                            <div class="multi"><div class="purp">print</div>(b + <div class="str">' concatenate me!'</div>)</div>
                                            <div class="comment"># We can reassign b completely though</div>
                                            <div class="multi">b = b + <div class="str">‘concatenate me!’</div></div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World</div>
                                            <div>Hello World concatenate me!</div>
                                            <div>Hello World concatenate me!</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We can use the multiplication symbol to create repetition.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi">letter = <div class="str">‘a’</div></div>
                                            <div class="multi"><div class="purp">print</div>(letter*10)</div>
                                        </div>
                                        <div class="output">
                                            <div>aaaaaaaaaa</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Basic Built-in String Methods</div>
                                    <div class="paragraph">Objects in Python usually have built-in methods. These methods are functions inside the object that can perform actions or commands on the object itself. We’ll explore methods and functions later on in future lessons but for now, think of methods as cool tips and tricks  that easily allow you to alter the output of your programs.</div>
                                    <div class="multi"><div class="paragraph">Now how do we call methods in Python? Well, we call methods by using a period and then the method name. An example would be like this:<div class="bold">object.method(parameters)</div></div></div>
                                    <div class="paragraph">We can pass extra arguments into the method where parameters exist. If you don’t fully understand the details about arguments, functions, and objects don’t worry about it! As mentioned before, we’ll take a look at these concepts in greater detail in future lessons. For now, let’s see how we can use built-in methods on Strings.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi">s = <div class="str">'Hello World concatenate me!’</div></div>
                                            <div class="comment"># Upper Case a string</div>
                                            <div class="multi"><div class="purp">print</div>(s.upper())</div>
                                            <div class="comment"># Lower Case a string</div>
                                            <div class="multi"><div class="purp">print</div>(s.lower())</div>
                                            <div class="comment"># Split a string by blank space (this is the default)</div>
                                            <div class="multi"><div class="purp">print</div>(s.split())</div>
                                            <div class="comment"># Split by a specific element (doesn't include the element that was split on)</div>
                                            <div class="multi"><div class="purp">print</div>(s.split(<div class="str">'W'</div>))</div>
                                        </div>
                                        <div class="output">
                                            <div>HELLO WORLD CONCATENATE ME!</div>
                                            <div>hello world concatenate me!</div>
                                            <div>['Hello', 'World', 'concatenate', 'me!']</div>
                                            <div>['Hello ', 'orld concatenate me!']</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>x = <div class='str'>‘words’</div></div>
                                            <div class='multi'>x[0] = <div class='str'>‘c’</div></div>
                                            <div class='multi'><div class='purp'>print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["‘cords’", "‘words’", "Type error as strings are immutable", "Syntax error"], 
                                              rightAnswer:"Type error as strings are immutable"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>x = <div class='str'>‘Hi’</div></div>
                                            <div class='multi'>x = x + <div class='str'>" it’s a wonderful morning!"</div></div>
                                            <div class='multi'><div class='purp'>print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["Hi", "Hiit’s a wonderful morning!", "Hi it’s a wonderful morning!", "Type Error"], 
                                                rightAnswer:"Hi it’s a wonderful morning!"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following methods uppercases every character in a string?",
                                                FindAnswer:[ ".upper", ".upper()", ".Upper()", ".Upper"], 
                                                rightAnswer:".upper()"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Below are two statements. Replace the first letter of the string in x with the letter ‘z’ and replace the third letter of the string in y with the letter ‘d’. Then combine the two words together and use the built-in Python method to uppercase every character in the two words.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>x = <div class='str'>‘Bebras’</div></div>
                                            <div class='multi'>y = <div class='str'>‘adhress’</div></div>
                                        </div>
                                    </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson6?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson6;