import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';
//import tri from '../../../images/asciitri.png';

class Unit2Lesson4 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/t3-xk5qMVWw?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Strings</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Strings</div>
                                    <div class="paragraph">What are Strings in Python? Well, Strings are used in Python to record information that contains letters, words, and other characters. An example would be your own name! In this supplemental, you’ll be learning about Strings, how to print them out, and some basic functionalities you can use.</div>
                                    <div class="tab_header">Creating a String</div>
                                    <div class="paragraph">To create a string in Python you need to surround characters in either single quotes or double quotes.</div>
                                    <table>
                                        <tr><td>‘Hello World’</td></tr>
                                        <tr><td>‘This is a string’</td></tr>
                                        <tr><td>“This is also a string”</td></tr>
                                    </table>
                                    <div class="paragraph">Notice how we have the choice to use either single quotes or double quotes...why is that? Well it’s because certain lines of text would not work if it were surrounded by single quotes. The best way to see why is through an example.</div>
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>‘It’s so cool to learn about Strings’</td>
                                            <td>{`>>`}error</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph multi">The reason for the error above is because the single quote in <div class="bold">It’s</div> stopped Python from going through the entire string. When using single quotes, Python only looks for the second quote that proceeds the first quote. In our case, Python only read It and could not process the rest of the text. So if you ever have an apostrophe or a single quote in your string, use the double quotes to avoid running into errors!</div>
                                    <table>
                                        <tr><td>“It’s so cool to learn about Strings”</td></tr>
                                    </table>
                                    <div class="tab_header">Printing a String</div>      
                                    <div class="paragraph_NI">We can use a print statement to print a string.</div>      
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'Hello World 1'</div>)</div>
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'Hello World 2'</div>)</div>
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'Use \n to print a new line'</div>)</div>
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'\n'</div>)</div>
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'Cool?'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World 1</div>
                                            <div>Hello World 2</div>
                                            <div>Use</div>
                                            <div> to print a new line</div>
                                            <br/>
                                            <div>Cool?</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">String Basics</div>
                                    <div class="paragraph_NI">We can also use a function called len() to check the length of a string.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">len</div>(<div class="str">'Hello World'</div>)</div>
                                            
                                        </div>
                                        <div class="output">
                                            <div>11</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Python's built-in len() function counts all of the characters in the string, including spaces and punctuation.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(<div class="str">'I’m doing great today!'</div>)</div>
                                            
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will the output of the code above be?",
                                              FindAnswer:["I’m doing great today!", "I’m doing great today", "Syntax Error", "‘I’m doing great today!’"], 
                                              rightAnswer:"Syntax Error"
                                            }
                                        }
                                    />
                                    <div class = "code_block">
                                        <div class="output">
                                            <div>Hello </div>
                                            <div >world</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which code snippet outputs the above?",
                                                FindAnswer:["print(“Hello \\n world”)", "print(“Hello + world”)", "print(“Hello --> world”)", "print(“Hello \\t world”)"], 
                                                rightAnswer:"print(“Hello \\n world”)"
                                            }
                                        }
                                    />
                                    <div class = "code_block">
                                        <div class="output">
                                            <div>Hello 	  world</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which code snippet outputs the above?",
                                                FindAnswer:[ "print(‘Hello \\n world’)", "print(‘Hello \\ world’)", "print(‘Hello --> world’)", "print(‘Hello \\t world’)"], 
                                                rightAnswer:"print(‘Hello \\t world’)"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create an ascii triangle by only using the following lines: | \ / _</div>
                                    <div class = "paragraph_NI">Use \t and \n along with print statements to create the shape. Example of what it should look like:</div>
                                    {/*<img src={tri} class='ascii-art' alt="ascii_triangle"/>*/}
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson4?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson4;