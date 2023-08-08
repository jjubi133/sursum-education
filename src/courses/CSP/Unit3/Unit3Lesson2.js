import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">Math in Python Along with Variables</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class='paragraph'>Computers do a great job at solving math problems which is what computers are mainly meant to do. Displaying various things on screen and outputting sound requires a lot of math which is what computers are good at and they can do these math problems in extremely short amounts of time. So let's see what kind of math a computer can do.</div>
                                    <div class='tab_header'>Basic Math Functions</div>
                                    <div class='paragraph'>Most programming languages come with various math functions that we can use to do various calculations. In python these include:</div>
                                    <table>
                                        <tr>
                                            <th>Function</th>
                                            <th>Symbol</th>
                                            <th>Example</th>
                                        </tr>
                                        <tr>
                                            <td>Addition</td>
                                            <td>+</td>
                                            <td>3+5 = 8</td>
                                        </tr>
                                        <tr>
                                            <td>Subtraction</td>
                                            <td>-</td>
                                            <td>9-6 = 3</td>
                                        </tr>
                                        <tr>
                                            <td>Multiplication</td>
                                            <td>*</td>
                                            <td>2*7 = 14</td>
                                        </tr>
                                        <tr>
                                            <td>Division</td>
                                            <td>/</td>
                                            <td>16/4 = 4</td>
                                        </tr>
                                        <tr>
                                            <td>Exponents</td>
                                            <td>**</td>
                                            <td>2**5 = 32</td>
                                        </tr>
                                        <tr>
                                            <td>Remainder</td>
                                            <td>%</td>
                                            <td>12%5 = 2</td>
                                        </tr>
                                    </table>
                                    <div class='tab_header'>Modulus</div>
                                    <div class='paragraph'>All of these functions are very common except for the remainder which uses a % sign. The % is used to find out the remainder of dividing 2 values. We divide 12/5 and because it doesn’t device perfectly, we are left with a remainder of 2 which is why we get an answer of 2. This operation is known as modulus which is why 12%5 would be called 12 mod 5.</div>
                                    <div class='tab_header'>Order of Operations</div>
                                    <div class='paragraph'>If we use various operations together, the order that they completed is through the order of operations meaning that if an operation is in parentheses, the computer will do it first then it does exponents, then division or multiplication, then finally addition or subtraction. So for example if we have the operation 4 * (1 +1). The computer does 1 + 1 first because it's in parentheses then it will do the multiplication and the final result of that operation is 8.</div>
                                    <div class='tab_header'>Variables</div>
                                    <div class='paragraph'>Oftentimes, we want to store our math operations into variables especially if we want to reuse the calculation later. We can do this in python by creating a variable. A variable can be any name it simply has to equal something.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>{`>>>`}newvariable = 5*3</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we make a variable called “newvariable” and make it equal to the equation 5*3. So if we were to type print(newvariable), python would now do the operation that newvariable is equal to and print out the number 15 as an output because newvariable is equal to 15.</div>
                                    <div class='paragraph'>It is also possible to store variables into other variables and do mathematical operations with them. For example, we can do variable = 2 * newvariable. newvariable is equal to 15 and variable is newvariable times 2 which gives us an output of 30 if we print variable.</div>
                                    <div class='tab_header'>Advanced math functions</div>
                                    <div class='paragraph'>Programming languages come with basic math operations like addition and multiplication which can be useful. But what about more complex functions like sine functions and logarithms? Well programming languages come with these procedures and other advanced mathematical functionality so let's take a look at some of these functions.</div>
                                    <div class='paragraph'>Let's begin by taking a look at absolute value. Python uses the abs() function to do this function and we simply need to put the number that we are trying to find the absolute value of in the parentheses. So if we were to do abs(-6) we would get an answer of 6 because the absolute value of -6 is 6. A benefit of the abs function is that you can put multiple operations in the parentheses of the abs function to calculate the final absolute value of the answer of the operations in the parentheses like if we did abs(-4 * 2) we would get 8 as our answer.</div>
                                    <div class='tab_header'>Math module</div>
                                    <div class='paragraph'>Python has a wide variety of these functions that we can complete math operations with such as the min(x,y,z...) and max(x,y,z...) functions which find the maximum value within the parenthesis. We can also do exponential functions with pow(base, exp) where the first value is the base of the exponent and the 2nd value is the exponent.</div>
                                    <div class='paragraph'>The math module comes with many operations as well. To use the math module we simply have to type in import math to use its functions. So for example if we wanted to find the cosine of 0 in radians.</div>
                                    <div class='paragraph'>The code would be the following:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>import</div> math</div>
                                            <div class='multi'>math.<div class='purp'>cos</div>(0)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>We would get an output of 1. We cos() function needs the math. In front of it to indicate the cos() function is from the math module. There are many other functions including math.sin() or math.tan().</div>
                                    <div class='paragraph'>The math module also comes with special numbers that are constants. The most common is the number pi. This is a number that continues forever. If we were to import that math module with import math, we can type math.pi to use the pi value. Because this value is a constant, it can’t be reassigned.</div>
                                    <div class='paragraph'>As you know, computer programs instruct computers on what to do with data but the user can also give data for the computer to process. This can be things like changing the volume and much more. Other data can include that a program stores data like how long the program was running. But the main idea is that this data is likely stored in variables, variables have their name and type of data they can store.</div>
                                    <div class='tab_header'>Data Types</div>
                                    <div class='paragraph'>The main 4 data types are ints which are integers or whole numbers, floats which are decimal values meaning the number has decimal points, then we have strings which can be any text that's found in quotation marks, and finally, there's boolean which consists of either true or false.</div>
                                    <div class='paragraph'>Variables can also store other data like lists and dictionaries.</div>
                                    <div class='paragraph'>As we’ve said before, to create a variable in python, we simply have to name it anything, then we make the variable equal to something whether that's text, a list, a number, and more. Then once again to display a variable on-screen, we simply need to use the print() function and put the variable name in the print function for the code to print out what the variable is equal to.</div>
                                    <div class='paragraph'>The main final thing you can do with variables changes the value that the variable is equal to, once you create a variable, you can change what it equals as the variable's value is not permanent. Let's take a look at an example of this:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>count = 5</div>
                                            <div class='multi'><div class='purp'>print</div>(count)</div>
                                            <div>count = 6</div>
                                            <div class='multi'><div class='purp'>print</div>(count)</div>
                                        </div>
                                        <div class='output'>
                                            <div>5</div>
                                            <div>6</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see here, the variable count was originally equal to the number 5 because that's what the print statement printed at first. Then we make the same variable count equal to the number 6. So now if we were to print the variable count again we don’t get an output of the number 5, we instead get the number 6 as our output because we assigned the value 6 to the variable count reassigning it a new value. This occurs because of the order the computer runs the statements which are in order so the computer first assigns count as 5 but then reassigns count with the value 6 and the value of the variable count changed.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which symbol is used for multiplication in python?",
                                              FindAnswer:["x", "**", "*", "/"], 
                                              rightAnswer:"*"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>{`>>>`}3 ** 4</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "-1", "7", "12", " 81"], 
                                                rightAnswer:" 81"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>{`>>>`}(3 + 5) * 2</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "10", "11", "13", "16"], 
                                                rightAnswer:"16"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class='tab_header'>Task</div>
                                    <div class='paragraph'>Create a program that creates a variable named “newvariable” and is equal to 4 x 8. Then after this multiply the variable “newvariable” by 3.</div>
                                    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/CSPUnit3Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson2;