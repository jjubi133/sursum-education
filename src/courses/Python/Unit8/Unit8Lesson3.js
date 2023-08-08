import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit8Lesson3 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/pmv7ncQg5I0?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">01 Functions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">In Python and all other programming languages, mathematics serves as a crucial foundation to creating programs. As such, there is a built-in module called math and random that allows you to have far more mathematical functionalities available for your code.</div>
                                    <div class="paragraph_NI">Let’s look at an example.</div>

                                    <div class = "code_block">
                                        <div class="input">
                                            <div>import math</div>
                                            <div class="multi"><div class="purp">help</div>(math)</div>
                                            <div>x = 3.2</div> 
                                            <div class="multi">clock<div class="purp">.hour</div></div> 
                                            <div>y = 9.9</div> 
                                            <div class="multi">math.<div class="purp">floor</div>(y)</div> 
                                        </div>
                                    </div>


                                    <div class="paragraph">To utlize math, you’ll need to first import math from Python. If you wish to see what is available in the math module, simply do help(math) and it will have a roster of all the different methods you can use from math. Ceil in math allows you to round any number up. If the value you pass in has a decimal value that is greater than zero, it will raise your value to the next whole number. Floor does the opposite. If there is a number passed through it that has a decimal place greater than zero, then it will bring down the value so that it’s equal to the integer that was passed in</div>
                                    <div class="paragraph_NI">We also have random. Let’s look at an example:</div>

                                    <div class = "code_block">
                                        <div class="input">
                                            <div>import random</div>
                                            <div class="multi">random.<div class="purp">randInt</div>(1,100)</div>
                                            <div>{'>>'}random number</div> 
                                        </div>
                                    </div>
                                    
                                    <div class="paragraph">To utilize random in Python, you’ll need to import the random module. From there, you can use randint to generate random numbers from one number to another. In the example above we generated a random number from 1 to 100.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>mylist = <div class="green">list</div>(range(<div class="green">1</div>,<div class="green">11</div>))</div>
                                            <div class="multi">random<div class="purp">.choice</div>(mylist)</div>
                                            <div>{'>>'}random number</div> 
                                        </div>
                                    </div>
                                   
                                    <div class="paragraph">In the example above, we created a list with values from 1 to 10. Because we wanted to select a random number, all we needed to do was use random.choice() and pass in our list inside of the parentheses, then Python produced a random number for us which was selected from our list.</div>
                                    <div class="paragraph">If you want to select multiple numbers you have two options. One with replacement and the other without. Thank of replacement like this. If you select a card from a deck, you can place the card back into the pile which means you have a chance of picking that exact same card again. To randomly choose with replacement you use the choices method.</div>
                                   

                                    <div class = "code_block">
                                        <div class="input">
                                            <div>mylist = <div class="green">list</div>(range(<div class="green">1</div>,<div class="green">11</div>))</div>
                                            <div class="multi">random<div class="purp">.choice</div>(population = m ylist, k=<div class="green">7</div>)</div>
                                            <div>{'>>'}[10, 8, 3, 3,3,3,3]</div> 
                                        </div>
                                    </div>

                                    <div class="paragraph">As you can see, we need to pass in some parameters for choices. The first is population which is just a term for what you’ll be picking from so for us that’s mylist and the second parameter is k which is the number of items you’ll randomly select which we did 7. Then it randomly selected 7 numbers from mylist with replacement which is why some numbers were chosen multiple times</div>
                                   
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>mylist = <div class="green">list</div>(range(<div class="green">1</div>,<div class="green">11</div>))</div>
                                            <div class="multi">random<div class="purp">.sample</div>(population = m ylist, k=<div class="green">6</div>)</div>
                                            <div>{'>>'}[1, 2, 8, 10, 4, 7]</div> 
                                        </div>
                                    </div>
                                   
                                    <div class="paragraph">Sample is the same as choices with the only difference being that instead of random choosing with replacement, sample does not replace. This means that once a number is randomly chosen, it cannot be selected again.</div>
                                    
                                   
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following methods selects a number randomly with replacement?",
                                              FindAnswer:["Sample", "Choices", "Randint", "math"], 
                                              rightAnswer:"Choices"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>y=10.1</div>
                                            <div class='multi'>math.<div class='purp'>ceil</div>(y)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "10", "10.5", "10.9", "11"], 
                                                rightAnswer:"11"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                            question: "What is true about the math module?",
                                                FindAnswer:["It is a built-in module", "It is an imported module installed through Pip", "It is a function that utilizes mathematics from all fields", "None of the above"], 
                                                rightAnswer:"It is a built-in module"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class='paragraph'>Create a list of numbers with 3 values from 1 to 5. Then create a list with 3 randomly generated numbers that were selected from 1 to 6. Find a way to compare if the list of random numbers has the same values as the list you created. If so, have the program print, ‘Yay we have a match!’</div>    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit8Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit8Lesson3;