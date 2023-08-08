import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit1Lesson3 extends React.Component {
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
                        <div class = "lesson_title grow">Storing numbers</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">When we talk about storing numbers in variables, computers need a specific way to show numbers in the computer’s memory. There are many methods present to determine whether a number is an integer or not. There are limits to computer memory which is why we can see roundoff, overflow, or precision of numeric variables in our programs.</div>
                                    
                                    <div class="tab_header">Integer representation</div>
                                    <div class="paragraph">An integer in any circumstance whether is programming or math is a number that doesn’t have a decimal point and a full value meaning that it would have a fraction value attached to it.</div>
                                    <div class="paragraph">Some examples of integers include the values: 4, 17, 30, -3</div>
                                    <div class="paragraph">So this brings up the question, how can we represent integers in computer memory, we’ve previously discussed that computer memory is represented in bits meaning that it's stored in a combination of 1s and 0s.</div>
                                    <div class='paragraph'>But this also brings in the fact that it might seem much more difficult to represent a negative number using only bits. Well, it is possible to represent an integer as either positive or negative. So if our system uses 8 bits to represent integers we can make the first bit of data determine if the integer is positive or negative by making the integer negative if the first bit is 0 and positive if the first bit is 1.</div>
                                    <div class="paragraph">Ex: 10000011 would be equal to 3 while 00000011 would be equal to negative 3</div>

                                    <div class="tab_header">Overflow</div>
                                    <div class="paragraph">So what would happen if we ran a program like this on the 8-bit computer, where the largest possible positive integer is 128?</div>
                                    <div class="paragraph">In this scenario, the computer can store the positive value 128 perfectly fine but storing a value 1 value higher than 128 might cause an overflow error or the program might say the number is too large.</div>
                                    <div class="paragraph">The program could also cause the number to truncate meaning the numbers would be capped at the value 128 or it could loop around meaning the value 129 would equal the value 1.</div>
                                    <div class="paragraph">So we must know the way our system handles data so we don’t get errors in our programs regarding overflows. Most modern computers use 64-bit systems which can store extremely large numbers so this won’t be a problem in most circumstances.</div>
                                    
                                    
                                    
                                    <div class="tab_header">Floating-point representation</div>
                                    <div class="paragraph">As we’ve seen with overflow errors showing up, there are limits to storing integers in computers, but what about fractions and decimals and other non - integer values. This can be much more difficult to represent in the computer memory which is where floating-point representation comes into play.</div>
                                    <div class="paragraph">So when it comes to floating-point representation, the number will be multiplied by its base value that will be raised to an exponent:</div>
                                    <ul>
                                        <li>9000 = 9 x 10^3</li>
                                        <li>10 = base</li>
                                        <li>3 = exponent</li>
                                    </ul>
                                    <div class="paragraph">Computers use the binary system so we use base 2 to create floating-point numbers.</div>
                                    <ul>
                                        <li>32 = 1 x 2^5</li>
                                    </ul>
                                    <div class="paragraph">What about numbers that aren’t powers of 2?</div>
                                    <ul>
                                        <li>24 = 1.5 x 2^4</li>
                                    </ul>
                                    <div class="paragraph">This applies to decimal values as well</div>
                                    <ul>
                                        <li>.5 = 1 x 2^-1</li>
                                    </ul>
                                    <div class="paragraph">This once again works with floating-point numbers that are between powers of 2</div>
                                    <ul>
                                        <li>0.750=1.5×2^-1</li>
                                    </ul>
                                    <div class="paragraph">So the moment the computer knows that floating-point representation for the number it gets stored in bits. Because most computers use 64-bit systems, the computer uses 1 bit for the sign, 11 bits for the exponent, and 52 bits for the number</div>
                                    
                                <div class="paragraph">So .375 in floating-point representation is </div>
                                     <ul>
                                        <li>0.750=1.5×2^-1</li>
                                    </ul>
                       
                                    <div class="tab_header">Roundoff errors</div>
                                    <div class="paragraph">Even with the floating-point representation, we can’t represent all the numbers with a program. This is because fractions like ⅙ are repeating numbers meaning that the entire number can’t be shown.</div>
                                    <div class="paragraph">So what the computer does is either chop off the last bit of data or rounds to the nearest floating-point number. You might think this is rare but it is a common thing for a computer to do even fractions like 1/10 can create roundoff errors as they are converted to infinitely repeating sequences in binary.</div>
                                    <div class="paragraph">For example, adding the numbers .1 + .1 +.1 into a program will not generate the expected value of .3. This is because of roundoff errors as .1 is a rounded number and adding .1 three times together with itself gives us an answer that is slightly off from .3So if a computer used more bits, the number would be more precise.
</div>

</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What are the main limits of computer memory when talking about storing numbers?",
                                              FindAnswer:["Runtime error", "404 Error", "Roundoff errors/Overflow errors", "Syntax error"], 
                                              rightAnswer:"Roundoff errors/Overflow errors"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is floating-point representation?",
                                                FindAnswer:[ "It is another way in programming to do multiplication and division", "When it comes to floating-point representation, the number will be multiplied by its base value that will be raised to an exponent", "Floating-point representation is a method for formatting various numbers", "None of the above"], 
                                                rightAnswer:"When it comes to floating-point representation, the number will be multiplied by its base value that will be raised to an exponent"
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

export default Unit1Lesson3;