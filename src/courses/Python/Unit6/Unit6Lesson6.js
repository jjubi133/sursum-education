import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson6 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/OB7qpEFDUzs?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Special Methods</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Let’s go over special methods in Python. Why use them? Well, we use special methods because we can’t have certain methods available to us such as the print method. If we tried to print out an instance of a class we wouldn’t be able to. Let’s look at an example.</div>
                                    <div class = "code_block">
                                        <div><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">In this supplemental, you’ll learn about how to create an Object type such as a list. Let’s begin by exploring some Objects within Python.As you can see, when we tried to print out an instance of our class we weren’t able to do so. Instead, Python gave us the memory location of our instance game1. To resolve this and have Python return something that is useful for us, what we can use are special methods. These methods allow us to perform actions such as printing out instances of our class. Now, why would we want to do this? Well, there might be scenarios where there’s another programmer who needs to create the exact same instance of a class as you created. So with the same object name, arguments, etc. To provide that type of information, what we can do is use the __repr__() method. You should note that all special methods have double underscores surrounding the method name followed by open and closed parentheses. You’ve already been working with a special method which was __init__ it’s just that you weren’t aware of it. So now that you can identify special methods, let’s go ahead and see them in action.</div>
                                    <div class = "code_block">
                                        <div><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">To use a special method, go into your class and do double underscores surrounding the method name which in our case is repr. Then place your parentheses and inside of the parentheses type in self. The reason as to why we do this is because we want our method to take in all of the arguments of our instance. By passing in self, we now have access to whatever instance we want to perform our action on. Inside of the method, you can go ahead and type in the code you want executed when you eventually print out the instance of your class and because we wanted other programmers to be able to create a perfect copy of our own instance, we want our print statement to return the name attribute for our instance. By using __repr__() we were able to successfully use the print function to call our instance game1.</div>
                                    <div class="paragraph">Another special method that can be used to print out instance of a class is the str method. The str special method is used just like the repr method, however, programmer use it for when we want to output something to a user rather than another programmer. So we use str when we want the outputted information to be more readable. Let’s look at an example.</div>
                                    <div class = "code_block">
                                        <div><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">As you can see, the formatting of the special method str is the exact same as repr but with a different method name. When we do print(game1) rather than giving us a memory location, we have a readable statement printed out on our screen. So we use the special method str for when we want to print out instances of our class and have them return readable statements.</div>
                                    <div class="paragraph">We also have a special method to find the length of an object. Let’s say you had an instance of a class with the number of movies showing at a theatre and you wanted to see how long the movies were. Let’s look at an example:</div>
                                    <div class = "code_block">
                                        <div><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">So you can see that we have an instance of the class movies called movie1 with the name Star Wars and a run time of 125 minutes. But when we tried to find the length of our object, we get back an error. To resolve this we can use the special method for length. Do the following:</div>
                                    <div class = "code_block">
                                        <div><div class="blue">def</div> <div class="purp">name_of_function</div>(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">By having the special method len return the run_time of our object, whenever we call the len of our object movie1, instead of running into errors we now get back how long the movie is.</div>
                                    <div class="paragraph">These are the basics of special methods. They allow you to execute method calls on your instances that would have otherwise been impossible to do.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question:"How can you tell if something is a special method?",
                                                FindAnswer:["Surrounded by double underscores with parentheses at the end", "Has a unique name with no special symbols", "Utilizes function calls", "Is nested inside of a dunder init"], 
                                                rightAnswer:"Surrounded by double underscores with parentheses at the end"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question:"What is the syntax for a special method?",
                                                FindAnswer:["(methodName)__", "__methodName__", "__methodName__()", "methodName()"], 
                                                rightAnswer:"__methodName__()"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question:"What is dunder repr used for?",
                                                FindAnswer:["Used to print out code for anyone to see", "Used to print out instances so that other programmers can recreate that specific object", "To avoid errors in print formatting objects", "None of the above"], 
                                                rightAnswer:"Used to print out instances so that other programmers can recreate that specific object"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph_NI'>Create a program that has a class and multiple instances of that class. Utilize special methods so that when you print out the instance of your class, you’ll receive all the information about the object so that if another programmer wished to create an instance with the exact same attributes, they would be able to do so by looking at the output of the print statement.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit6Lesson6?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit6Lesson6;