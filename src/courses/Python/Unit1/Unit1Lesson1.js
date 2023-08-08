import React from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit1Lesson1 extends React.Component {
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

class Lesson extends React.Component{
    render() {
        return (
        <div class = "container">
            <div class = "split left">
                    <div class = "lesson_video">
                        <iframe src="https://www.youtube.com/embed/50c1xITA5kc?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">01 Functions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Introduction to Functions</div>
                                    <div class="paragraph">This lecture will consist of explaining what a function is in Python and how to create one. Functions will be one of our main building blocks when we construct larger and larger amounts of code to solve problems.</div>
                                    <div class="tab_header">What is a function?</div>
                                    <div class="paragraph">Formally, a function is a useful device that groups together a set of statements capable of running more than once. They can also let us specify parameters that can serve as inputs to the functions.</div>
                                    <div class="paragraph">On a more basic level, functions allow us to not have to repeatedly write the same code repeatedly. If you remember back to the lessons on strings and lists, we used a function len() to get the length of a string. Since checking the length of a sequence is a common task, you would want to write a function that can do this repeatedly at command.</div>
                                    <div class="paragraph">Functions will be a key aspect in reusing code and will allow us to think of program design (which we will learn about through Object Oriented Programming).</div>
                                    <div class="tab_header">Why use functions?</div>
                                    <div class="paragraph">Put simply, you should use functions when you plan on using a block of code multiple times. The function will allow you to call the same block of code without having to write it multiple times. This in turn will allow you to create more complex Python scripts.</div>
                                    <div class="tab_header">Function Topics</div>
                                    <div class="list">
                                        <ul>
                                            <li>Def keyword</li>
                                            <li>Simple example of a function</li>
                                            <li>Calling a function with ()</li>
                                            <li>Accepting parameters</li>
                                            <li>Print versus return</li>
                                            <li>Adding in logic inside a function</li>
                                            <li>Multiple returns inside a function</li>
                                            <li>Adding in loops inside a function</li>
                                            <li>Tuple unpacking</li>
                                            <li>Interactions between functions</li>
                                        </ul>
                                    </div>
                                    <div class="tab_header">def keyword</div>
                                    <div class="paragraph_NI">A function's syntax in Python has the following form:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                        <div class = "comment">'''This is where the function's Document String (docstring) goes.
                                        When you call help() on your function it will be printed out.'''</div>
                                        <div># Do stuff here</div>
                                        <div># Return desired result</div>
                                    </div>
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">There is no assignment for this lesson.</div>
                                    <div class = "paragraph_NI">Feel free to play around with code!</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit1Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
export default Unit1Lesson1;