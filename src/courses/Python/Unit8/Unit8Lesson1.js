import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit8Lesson1 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/KNBypWXC2q4?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>

                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Collection Module</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">Collection modules is a built-in module in python that allows you to import specified container datatypes to provide more functionality for when you’re programming.</div>
                                    <div class="paragraph">What are container datatypes? Well they’re datatypes such as dictionaries and tuples which you already know how to work with but with the collection modules, these containers have more specific purposes. Let’s take a look at some examples.</div>
                                    
                                    <div class = "code_block">
                                        <div class="input">
                                            <div><div class="blue">from</div> collections import Counter</div>
                                            <div>nums = [<div class="green">1,1,1,1,1,2,2,3,4,5</div>]</div>
                                            <div><div class="green">Counter</div>(nums)</div> 
                                            <div>math.ei(x)</div>
                                        </div>

                                        <div class = "output">
                                            <div>{'>>Counter({1: 5, 2: 2, 3: 1, 4: 1, 5: 1})'}</div> 
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="paragraph"> What the counter object allows you to do is count how many times an object appears in an object such as a list In the example above the Counter allows us to see how many times each object within nums appears It ranks them by the greatest number of occurrences to the least number of occurrences.</div>
                                  
                                    <div class="tab_header">namedtuple</div>
                                    <div class="paragraph">Next, we have namedtuple and what this allows you to do is create tuples that act like classes. Let’s take a look at an example.</div>
                                   
                                   
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>character = namedtuple(‘person’, ['name', 'age', 'height'])</div>
                                            <div>steve = character(name = 'Steve', age = 10, height = 6)</div>
                                            <div class="multi">steve.<div class="purp">name</div></div> 
                                            <div class="multi">steve.<div class="purp">age</div></div> 
                                            <div class="multi"><div class="green">type</div>(steve)</div> 
                                            <div class="multi">steve[2]</div> 
                                        </div>

                                        <div class = "output">
                                           <div>{'>>'}Steve</div>
                                           <div>{'>>'}10</div>
                                           <div>{'>>'}person</div>
                                           <div>{'>>'}6</div>
    
                                        </div>
                                    </div>
                                        
                                     <div class="paragraph">As we can see we start by importing namedtuple from our collections module. Then we create a variable which is the equivalent of a class name and then set that equal to named tuple. Inside of the parentheses, you pass in what the type will be along with the arguments it will take in. Think of the arguments like you would the attributes of a class. Once that’s done, simply set an “instance” of your named tuple and assign the attributes you want for your object. As you can see, by using namedtuple, we’re able to call the attributes of our tuple and even utilize indexing to call it’s attributes.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does Counter do?",
                                              FindAnswer:["Counts the number of arguments in a function calln", "Counts the number of objects that appears in an objects", "Counts the number of spaces present in a strings", "None of the above"], 
                                              rightAnswer:"Counts the number of objects that appears in an objects"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What does namedtuple do?",
                                                FindAnswer:["Acts as a class to create instances of unique tuples", "Acts as a class to create instances of unique dictionaries", "Acts as a class to create instances of unique lists", "Acts as a class to create instances of unique functions"], 
                                                rightAnswer:"Acts as a class to create instances of unique tuples"
                                            }
                                        }
                                    />

                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the Collections Module?",
                                                FindAnswer:["An imported module that brings functionality to classes", "A built-in module that imports specified container datatypes", "A function call that imports specified container datatypes", "None of the above"], 
                                                rightAnswer:"A built-in module that imports specified container datatypes"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a class that takes in the name, age, and favorite color of a person. Create multiple instances of the class. Then inside the class, create a method that will take in the information and sorts the information into lists. For the names list, order the names by greatest lengths. For age, order from oldest to youngest. For favorite color, order by primary colors first, then secondary colors. Once that’s been done and all the attributes are assigned to lists, import an object from the collection module that will count how many items are in each list and how many times they appear..</div>    
                                    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit8Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit8Lesson1;