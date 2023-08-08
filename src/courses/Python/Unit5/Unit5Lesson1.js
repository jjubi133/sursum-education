import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson1 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/paqsneWVwJ0?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Methods and Documentation</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Methods</div>
                                    <div class="paragraph">In previous lessons, you’ve heard us use the term methods and have even used methods yourself in your code. Methods are essentially functions built into objects. It’s going to be a little confusing at the start but we’ll go through many examples to strengthen your understanding of methods. Later on in the course you’ll learn about how to create your own objects and methods using Object Oriented Programming (OOP) and classes. But for this supplemental, you’ll learn about how methods are used to perform action on objects, how they take in arguments, and the similarities between methods and functions.</div>
                                   
                                    <div class="paragraph_NI">Methods follow this syntax: </div>
                                    <div class = "code_block">
                                        <div class="input">
                                        <div>object.<div class='purp'>method</div>(argument1,argument2,etc...)</div>
                                        </div>
                                    </div>

                                    <div class="paragraph">You'll later see that we can think of methods as having an argument 'self' referring to the object itself.</div>
                                    <div class="paragraph_NI">While you can’t see the ‘self’ argument, we’ll go over the concept in greater depth when we study Object Oriented Programming. We’ll look at an example of the various methods a list has:</div>
                                    <div class="code_block">
                                    <div class="input">
                                            <div class = "comment"># Create a simple list</div>
                                            <div>lst = [1,2,3,4,5]</div>
                                    </div>
                                    </div>    
                                        
                                    <div class="paragraph_NI">In Jupyter Notebook, we can quickly see all the possible methods by holding the tab key. The methods for a list are:</div>                                       
                                    <ul>
                                            <li>append</li>
                                            <li>count</li>
                                            <li>extend</li>
                                            <li>insert</li>
                                            <li>pop</li>
                                            <li>remove</li>
                                            <li>reverse</li>
                                            <li>sort</li>
                                        </ul>

                                    <div class="paragraph_NI">Here are a few of them:</div>                                       
                                    <div class="code_block">
                                    <div class="input">
                                            <div class = "comment"># append() allows us to add elements to the end of a list</div>
                                            <div>lst.<div class='purp'>append</div>(6)</div>
                                            <div>lst</div>
                                    </div>
                                    <div class="output">
                                            <div>[1, 2, 3, 4, 5, 6]</div>
                                    </div>
                                    </div>  

                                    <div class="paragraph_NI">Now how about count()? The count() method will count the number of occurrences of an element in a list.</div>                                       
                                    <div class="code_block">
                                    <div class="input">
                                            <div class = "comment"># Check how many times 2 shows up in the list</div>
                                            <div>lst.<div class='purp'>count</div>(2)</div>
                                    </div>
                                    <div class="output">
                                            <div>1</div>
                                    </div>
                                    </div> 
                    
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the proper syntax for using a method in Python?",
                                              FindAnswer:["object.methodname", "As long as you have a .methodname you can use a method", "object.methodname()", "There is no such syntax"], 
                                              rightAnswer:"object.methodname()"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "In the Jupyter Notebook, how can you see what methods and attributes are available to you?",
                                                FindAnswer:[ "There is no shortcut", "Hit dot then tab", "Type out the method name and run the cell", "Create a new cell to implement dot along with your object"], 
                                                rightAnswer:"Hit dot then tab"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">list = [1,2,3,4,5,6,7,8]</div>
                                            <div class="multi">list.<div class='purp'>pop</div>(2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will the following output be:",
                                                FindAnswer:[ "1", "8", "3", "7"], 
                                                rightAnswer:"3"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class="tab_header">Task</div>
                                    <div class="paragraph">As a refresher on using methods, create a list with a combination of integers, floats, and strings until it has 10 items. Then, remove the last item of the list and add the word “METHODS” to the end of the list. Then remove the 3rd item of the list and replace it with the number 45. </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson1;