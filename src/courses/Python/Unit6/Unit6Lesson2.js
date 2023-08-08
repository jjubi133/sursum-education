import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson2 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/ZTKkjImju3w?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Attributes and Class Keywords</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Class and class keyword</div>
                                    <div class="paragraph">User defined objects (an object that you create) are created using the class keyword. The class is a blueprint that defines the nature of a future object. From classes we can construct instances. An instance is a specific object created from a particular class. For example, above we created the object list which was an instance of a list object.</div>
                                    <div class="paragraph">Let see how we can use class:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">The rule with class names is that they should always start with a capital letter so keep that in mind. Note how my_class is now the reference to our new instance of a Sample class. In other words, we instantiate the Sample class.</div>
                                    <div class="paragraph">Inside of the class we currently just have pass. However, we can define class attributes and methods within our objects.</div>
                                    <div class="paragraph">We need to be able to tell the difference between attributes and methods. In an object, an attribute is a characteristic of that specific object while a method is an operation (action) we can perform with the object.</div>
                                    <div class="paragraph">For example, we can create a class called Dog. An attribute (or characteristic) of a dog can be its breed or its color, while a method (or action that can be carried out) of a dog may be defined by a .bark() method which returns a sound. So remember, attributes are the characteristics while methods are the specific actions. Let’s take a look at an example to solidify this idea.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Evaluate the following statement: Everything in Python is an object!",
                                              FindAnswer:["This statement is false", "This statement is true", "This statement only applies when making unique objects and methods in Python", "This statement only applies when creating unique attributes"], 
                                              rightAnswer:"This statement is true"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What must be placed within the parentheses in def_init_(   )?",
                                                FindAnswer:[ "Dunder", "Parameter", "self", "Class name"], 
                                                rightAnswer:"self"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>Cars</div>():</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div> (<div class='blue'>self</div>,color):</div>
                                            <div class='multi in_2'><div class='blue'>self</div>.<div class='purp'>color</div> = color</div>
                                            <div class='multi'>my_car = <div class='gre'>Cars</div>(color=<div class='str'>'blue'</div>)</div>
                                            <div class='multi'>my_car.<div class='purp'>color</div></div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "Cars", "Error", "blue", "self.color"], 
                                                rightAnswer:"blue"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a class named "Grocery" that takes in the name, price, and color of different fruits. Then call each attribute.</div>      
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit6Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit6Lesson2;