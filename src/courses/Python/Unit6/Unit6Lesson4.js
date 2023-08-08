import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson4 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/Zy_olHrtSzw?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Class Object Attributes</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Attributes</div>
                                    <div class="paragraph">To create an attribute, the syntax is as following: </div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">There is a special method called:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">This method is used to initialize the attributes of an object. For example:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Confused? Let’s take a look at what exactly is going on in the example above.The special method __init__() is called automatically right after the object has been created:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Each attribute in a class definition begins with a reference to the instance object. It is always named self. The breed is the argument. The value is passed during the class instantiation.</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Now we have created two instances of the Dog class. With two breed types, we can then access these attributes like this:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Because it is an attribute and doesn't take any arguments, we don't need to place any parentheses after breed.</div>
                                    <div class="paragraph">In Python there are also class object attributes. Think of these as the default attributes that will always remain true for a class. For example, we could create the attribute of scientific Kingdom for the Dog class. Dogs, regardless of their breed, name, or other attributes, will always be in the Kingdom animalia. For example:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Note that the Class Object Attribute is defined outside of any methods in the class. Also by convention, we place them first before the init.</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>

                                    <div class="tab_header">Methods</div>
                                    <div class="paragraph">Methods are functions defined inside the body of a class. The cool thing about these methods within our class is that they perform operations with the attributes we create for our objects. These methods are what sets apart OOP from anything else in Python as they allow us to break apart programs into parts that carry out different operations.</div>
                                    <div class="paragraph">This might be confusing but let’s take a look at an example to bring this point home.</div>
                                    <div class="paragraph">Let's go through an example of creating a Circle class:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Now let's change the radius and see how that affects our Circle object:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>                                    
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a class object attribute?",
                                              FindAnswer:["An attribute that is created within the __init__", "An attribute that can be influenced by self", "An attribute that remains the same for every instance of a class", "All of the following statements are false"], 
                                              rightAnswer:"An attribute that remains the same for every instance of a class"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is true about methods in OOP?",
                                                FindAnswer:[ "Methods are function defined inside the body of a class", "Methods cannot use the attributes created with each instance of a class", "They are not actions", "They cannot be utilized in Classes without importing a new library"], 
                                                rightAnswer:"Methods are function defined inside the body of a class"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>Dog</div>():</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>bark</div>(<div class='blue'>self</div>):</div>
                                            <div class='multi in_2'><div class='yel'>print</div>(<div class='str'>'Woof'</div>)</div>
                                            <div class='multi'>dog = <div class='gre'>Dog</div>()</div>
                                            <div class='multi'>dog.<div class='purp'>bark</div></div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "Syntax error", "<bound method Dog.bark of <__main__.Dog object at 6x1111111111112321>>", "Woof", "No message or output will be shown"], 
                                                rightAnswer:"<bound method Dog.bark of <__main__.Dog object at 6x1111111111112321>>"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph_NI'>Create a class for a certain group of animals. For example, Cats:</div>    
                                    <ul class='list'>
                                        <li>Find 4 common traits that will always be true for the animals and have them be your class object attributes (Ex: dogs will always be a mammal, snakes have no legs, etc.)</li>
                                    </ul>
                                    <div class='paragraph'>Create attributes that you can assign and call. Create 4 different instances of the animal and test the functionality of your class, methods, and attributes.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit6Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit6Lesson4;