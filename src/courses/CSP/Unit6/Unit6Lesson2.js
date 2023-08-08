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
                        <iframe src="https://www.youtube.com/embed/hDpmCXihL3s?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Using Simulations For Randomness</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">As you might know, computers are excellent at solving math. But computers struggle at creating a random value. A random value is a number that is created with no other reasons or decisions. Random numbers are used to make random decisions as well as simulate various natural processes.</div>
                                    <div class="paragraph">Computers are really good at calculating various outputs and doing calculations that are more predictable which is not randomness. To actually get a computer to generate a truly random number, the computer would need to monitor a process where you can’t predict the outcome as it would be nearly impossible. But this can be very slow and expensive.</div>
                                    <div class="paragraph">So programmers have created ways that mimic random number generation in computer programming which are random enough for most use cases.</div>
                                    <div class="paragraph">Programming languages usually have methods that create mildly random numbers.</div>
                                    <div class="paragraph">For example, in python, we have the random module which can be imported by typing import random. Then we can type in random.randint(start number, end number), and then python will generate a random integer within the range of the start and minus 1 of the end number so the end number is not included in the range of random numbers.</div>
                                    <div class="paragraph">Well, what if we wanted to create random decimal values?</div>
                                    <div class="paragraph">Well, we can use the random.random() command to create a random number between 0 and 1 but not including 1.</div>
                                    <div class="paragraph">We can also generate random float numbers or decimal values from certain ranges with the random.uniform(start number, end number) command. It's once again important to note that the start number is included in the range or random decimal numbers but not the end number.</div>
                                    <div class="paragraph">When creating simulations, it's important that we test them multiple times to see if they work as expected, try running the various random commands many times to see if they truly generate random numbers or if there is a pattern present. You can run it many times to keep track of if there is an even distribution of the random numbers or there are more numbers generated than others. Either way, it's important to run simulations many times to test if they work properly and with different inputs.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a random value?",
                                              FindAnswer:["A number created for no other reasons or decisions", "A whole number that is not a fraction", "A number that has a decimal point", "A number that repeats on forever"], 
                                              rightAnswer:"A number created for no other reasons or decisions"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What can random numbers be used for?",
                                              FindAnswer:["Random numbers are used to make random decisions", "Simulate various natural processes", "All of the above", "None of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does the random.random() function do?",
                                              FindAnswer:["Create a random number between 0 and 1 but not including 1", "Creates a random number between 0 and 1 including 1", "Creates a random number from 0 to 10", "Creates a random number from 0 to 100"], 
                                              rightAnswer:"Create a random number between 0 and 1 but not including 1"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>

                            </Tabs>
                        </div>
                    </div>
                </div>

                <div class = "bottom_section">
                    <Fade bottom><div><div class ="lesson_backbutton"><Link to='/CSP'><button class="grow">View Other Lessons</button></Link></div></div></Fade>
                </div> 

            </div>
        )
      }
}

export default Unit6Lesson2;