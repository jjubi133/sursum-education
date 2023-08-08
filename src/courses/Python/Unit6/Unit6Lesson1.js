import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson1 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/V2zgvaAWrF0?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Intro to OOP</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Object Oriented Programming</div>
                                    <div class="paragraph">We’re finally here! Object Oriented Programming also known as OOP is the next step of becoming a more proficient Python programmer. It may be a little difficult at the start but with practice, the concepts of OOP will fall into place. Take your time, work with the code, and you’ll know about OOP in no time.</div>
                                    <div class="paragraph">We’ll begin by recalling Basic Python Objects. For example:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">In this supplemental, you’ll learn about how to create an Object type such as a list. Let’s begin by exploring some Objects within Python.</div>
                                    <div class="tab_header">Objects</div>
                                    <div class="paragraph">One thing that needs to be stressed here is that in Python, everything is an object. A good way of thinking about this is when we use the type function. By using type() to check the type of object something is, it reveals that everything within Python is inherently an object. Take a look at the example:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">This is the very basics of OOP in Python. In the next lesson, we’ll be going in depth into how we can create our own unique methods!</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does OOP stand for?",
                                              FindAnswer:["Optimal Object Positions", "Optimal Object Programming", "Object Oriented Python", "Object Oriented Programming"], 
                                              rightAnswer:"Object Oriented Programming"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the benefit of OOP?",
                                                FindAnswer:[ "It allows programmers to create code that is repeatable and organized", "Does not allow programmers to create their own objects that have methods and attributes", "Is not repeatable so it saves computer memory as it is only used once", "Eliminates built-in methods "], 
                                                rightAnswer:"It allows programmers to create code that is repeatable and organized"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How should you name your class?",
                                                FindAnswer:[ "Snake Casing", "Camel Casing", "Mountain Casing", "_init_"], 
                                                rightAnswer:"Camel Casing"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a class and comment on the different portions of the class that is necessary for building your own methods and attributes. Comment why they are necessary and what they do.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit6Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit6Lesson1;