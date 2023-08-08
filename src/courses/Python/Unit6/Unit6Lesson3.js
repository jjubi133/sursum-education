import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson3 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/qo7dSAJX4oo?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Methods</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Methods are functions defined inside of a class. They are used to perform operations with the attributes of our objects. Methods are extremely useful as they allow you to divide code into sections, thus organizing your code. Additionally, because methods are just functions that work with the attributes of a class, it means that for complex problems, once you’ve found a solution, you don’t need to rewrite that code every time you need it.</div>
                                    <div class="paragraph">Let’s take a look at the syntax for a method.</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">To create a method, inside of the class type in the keyword def followed by the method name which in our example was Method. Inside of parentheses pass in the self keyword which basically takes in the object of your class as the argument. This means that when you call your method on an object, all of the object’s attributes will be accepted as arguments for the method itself. It’s because of this that we can return attribute1 of our object along with the text “Hello my name is”. Now let’s create an instance of our class example to see what occurs.</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">As you can see in the example above, to call a method, simply type out the instance of your class (in our case Myname) followed by a dot and the name of your method with open and closed parentheses. When we called the method on our object, what happens is the method takes in our object in the self keyword that we passed in earlier. When it’s done that, all of the attributes of Myname (which in our case was only attribute1 = ‘Bobby’) is executed wherever they are called. Therefore, the return statement was able to successfully print out.</div>
                                    <div class="paragraph">So remember, methods are just functions that are inside of classes. The only difference is that the arguments they take in are the attributes of the class object.</div>                           
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div><div class='gre'>Dog</div>:</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self,breed,name</div>):</div>
                                            <div class='multi in_2'><div class='blue'>self</div>.<div class='purp'>breed</div><div class='blue'> = </div>breed</div>
                                            <div class='multi in_2'><div class='blue'>self</div>.<div class='purp'>name</div><div class='blue'> = </div>name</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>bark</div>():</div>
                                            <div class='multi in_2'><div class='blue'>return</div> 'bark bark!!' </div>
                                            <div class='multi'>molly<div class='blue'> = </div>Dog(<div class='str'>'Beagle'</div>,<div class='str'>'Molly'</div>)</div>
                                            <div class='multi'>molly.<div class='purp'>bark</div>()</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What would the above code output?",
                                                FindAnswer:["Beagle", "bark bark!!", "Error because bark has no argument", "Molly"], 
                                                rightAnswer:"Error because bark has no argument"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "A method is...",
                                              FindAnswer:["A function", "A function inside of a class", "An instance of a class", "A dictionary of objects and their attributes"], 
                                              rightAnswer:"A function inside of a class"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of these is the proper syntax to call a method?",
                                                FindAnswer:["object_name.method", ".method", "object_name.method()", "class_name.method()"], 
                                                rightAnswer:"object_name.method()"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph_NI'>Create a class that takes in the first name, last name, age, height, and favorite color. Then create a method that only returns a person’s first name, last name, and favorite color with the condition being that the number of letters in the person’s name must be even, the number of letters in the last name must be odd, and they have a height of greater than 5 feet. Only when the condition is met can the return statement be executed.</div>
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

export default Unit6Lesson3;