import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit6Lesson5 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/bvqg4Ydq-lE?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Inheritance and Polymorphism</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Inheritance</div>
                                    <div class="paragraph">We’ve learned how to create our own class and how to create attributes and methods. In this supplemental, you’ll learn about inheritance and why it’s important.</div>
                                    <div class="paragraph">Inheritance, when it comes to classes, is exactly what it sounds like. It’s a way for a class to inherit (take) the features and functionalities of classes that have already been defined. The new classes which inherit from existing classes are called child classes while the class which is being inherited from are known as parent classes. Inheritance is an important part of classes because it allows you to not only reuse code but also add onto or override the functionalities from the class it is inheriting from.</div>
                                    <div class="paragraph">Let's see an example by incorporating our previous work on the Dog class:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Here, we’ve created two classes Animal and Dog. The Animal is the parent class, the Dog is the child class.</div>
                                    <div class="paragraph">The child class inherits the functionality of the parent class so all of the attributes from the Animal class is passed onto the Dog class. That’s why when we created the Dog class and didn’t put anything for an eat attribute, when we call the Dog class, “Eating” is printed out because when we inherited from the Animal class, def eat was inherited by Dog without need for it to be called.</div>
                                    <div class="paragraph">However, the child class (Dog) extends the functionality of the parent class (Animals), by defining a new bark() method.</div>

                                    <div class="tab_header">Polymorphism</div>
                                    <div class="paragraph">In Python, polymorphism refers to the way in which different object classes can share the same method name, and those methods can be called from the same place even though a variety of different objects might be passed in. The best way to explain this is by example:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>
                                    <div class="paragraph">Here we have a Dog class and a Cat class, and each has a .speak() method. When called, each object's .speak() method returns a result unique to the object.</div>
                                    <div class="paragraph">There are a few different ways to demonstrate polymorphism. First with a for loop:</div>
                                    <div class = "code_block">
                                        <div>def name_of_function(arg1,arg2):</div>
                                    </div>                                
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>animal</div>():</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self</div>):</div>
                                            <div class='multi in_2'><div class='yel'>print</div>(<div class='str'>"I'm an animal!"</div>)</div>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>dog</div>():</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is hindering the dog class from inheriting the features of the animal class in the code above?",
                                                FindAnswer:[ "Nothing is hindering it, dog class has successfully inherited from the animal class", "It should be: class dog(animal):", "It should be: class dog(self):", "It should be: class dog(__init__(self))"], 
                                                rightAnswer:"It should be: class dog(animal):"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>automobile</div>():</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self</div>):</div>
                                            <div class='multi in_2'><div class='yel'>print</div>(<div class='str'>'I have wheels'</div>)</div>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>car</div>(automobile):</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self</div>):</div>
                                            <div class='bold in_2'>???????</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Look at the classes above. What statement must go in ??????? to allow the car class to properly inherit the features of the automobile class?",
                                                FindAnswer:[ "Traceback feed __init__", "automobile.__init__()", "automobile.__init__(self)", "There is nothing that needs to be added for the car class to inherit from the automobile class"], 
                                                rightAnswer:"automobile.__init__(self)"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>automobile</div>():</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self</div>):</div>
                                            <div class='multi in_2'><div class='yel'>print</div>(<div class='str'>'I have wheels'</div>)</div>
                                            <div class='multi'><div class='blue'>class</div> <div class='gre'>car</div>(automobile):</div>
                                            <div class='multi in_1'><div class='blue'>def</div> <div class='purp'>__init__</div>(<div class='blue'>self</div>):</div>
                                            <div class='multi in_2'>automobile.<div class='purp'>__init__</div>(<div class='blue'>self</div>)</div>
                                            <div class='multi'>myCar = <div class='gre'>car</div>()</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "Syntax error", "Feedback error", "__init__(self)", "I have wheels"], 
                                                rightAnswer:"I have wheels"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a class called Converter and have the class convert inches to centimeters (1 inch is 2.54 centimeters). Then create a class called CylinderCalculator and have it take in values of the radius and height of the cylinder (assume the radius and height are in inches). Create methods that find the cylinder’s surface area and volume. Inherit from the Converter class to convert the surface area and volume of the cylinder from inches to centimeters.</div>    
                                    <div class='paragraph'>Hint: for the methods in the CylinderCalculator class, make them the equations used to find the volume and surface area of a cylinder.</div>
                                    <ul class='list'>
                                        <li>Volume of a cylinder = (pi)r<sup>2</sup>h, where r is the radius and h is the height</li>
                                        <li>Surface area of a cylinder = 2(pi)rh+2(pi)r2</li>
                                    </ul>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit6Lesson4?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit6Lesson5;