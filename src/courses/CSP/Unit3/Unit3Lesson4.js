import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson4 extends React.Component {
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
                        <div class = "lesson_title grow">Loops and Conditional Statements</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class='paragraph'>Computers are excellent at repeating very boring and basic tasks many times without error or getting tired. Similarly, computer programs tend to have a lot of instances where the computer repeats tasks to allow the code to run more on its own. There is where a for loop comes in which can run commands a set number of times so let's take a look at for loops.</div>
                                    <div class='tab_header'>For Loop</div>
                                    <div class='paragraph'>So let’s say that we wanted to create a program that creates a multiplication table for the number 8, well we can do this easily with a bunch of print statements, but what if we want to go up to 100 or more, well that would take very long to type out. But a for loop solves this problem, so let's look at the code to create a multiplication table for the number 8.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>for</div> i <div class='blue'>in</div> <div class='gre'>range</div>(1,16):</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(8 * i)</div>
                                        </div>
                                        <div class='output'>
                                            <div>8</div>
                                            <div>16</div>
                                            <div>24</div>
                                            <div>32</div>
                                            <div>40</div>
                                            <div>48</div>
                                            <div>56</div>
                                            <div>64</div>
                                            <div>72</div>
                                            <div>80</div>
                                            <div>88</div>
                                            <div>96</div>
                                            <div>104</div>
                                            <div>112</div>
                                            <div>120</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As we can see here, we multiplied the number 8 by each number from 1 to 15 and got our output. So how does this for loop work? Let's break it down first we have the keyword for to indicate we are creating a for loop. </div>
                                    <div class='paragraph'>Next, we have the letter i which is known as the counting variable, the counting variable can be any letter or word, but usually it’s the letter i. The counting variable is used to keep track of how many times something gets repeated, you’ll see why this comes in handy shortly. </div>
                                    <div class='paragraph'>Next, we type “in” and range(1,16). The range(1,16) indicates that we are looping the code 15 times. Why did we put a 16 in the second parameter? Well, it's because the second parameter is 1 less than what you put in it so typing in 16 means you get 15. So essentially The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number. Using this we can make a for loop run a certain number of times which in this case is 15. Note it's important to put a colon after the end of the for loop statement to indicate to python that you have completed the for loop statement, so then when you hit enter after typing the colon, python automatically indents for you so that you are inside the for loop.</div>
                                    <div class='paragraph'>Finally, we have our print statement where we multiply 8 by the counting variable i. The reason this works is that every time we run our loop, the counting variable 1 takes in the 1 value of the range function starting from the beginning, so it is first equal to 1 when we use the loop once. But when the loop is run once, i will now equal 2 inheriting the value of the next number the range function creates. Using this to our advantage we can make it increase by 1 every time to use in our multiplication table.</div>
                                    <div class='paragraph'>We can easily change the range function to start at a different number or even change the range function so that it counts by steps of 2 which can be done by changing the 3rd parameter of the function.</div>
                                    <div class='paragraph bold'>range(starting point, stopping point, step value)</div>
                                    <div class='paragraph'>So range(3,20,2) returns the numbers 3-19 but in increments of 2 giving us the list of numbers 3,5,7,9,11,13,15,17,19.</div>
                                    <div class='paragraph'>We can also put loops inside other loops where the loop inside has to complete looping before the loop on the outside can run the code again. So let’s say we wanted to make a multiplication table for all the numbers between 1-10 and not just 8? Well, we can do that by doing the following.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>for</div> i <div class='blue'>in</div> <div class='gre'>range</div>(1,11):</div>
                                            <div class='multi in_1'><div class='blue'>for</div> j <div class='blue'>in</div> <div class='gre'>range</div>(1,11):</div>
                                            <div class='multi in_2'><div class='purp'>print</div>(i * j)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we once again take advantage of the counting variable for first do the multiplication tables for the number 1, then it moves to the number 2 until we reach the row for multiplying the numbers from 1-10 by 10. This works because we first set i equal to one in the first loop, then each time we run the second loop, we increase the value of the counting variable j by one and multiply it by i which in this case is one. Once the second for loop is done running, we run the first for loop again making i equal the number 2 until we complete all the numbers till 10 to get our completed multiplication table. Note it’s important to put a colon after the end of the for loop statement to indicate to python that you have completed the for loop statement, so then when you hit enter after typing the colon, python automatically indents for you so that you are inside the for loop.</div>
                                    <div class='tab_header'>While Loop + Conditional Statements</div>
                                    <div class='paragraph'>But what if we don't want to run our loop a certain number of times, but rather if a certain condition is met like if a variable is equal to a certain string? Well, this is where while loops come in which are loops that run only if a certain condition is true.</div>
                                    <div class='paragraph_NI'>Let's look at an example of a while loop:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 0</div>
                                            <div class='multi'><div class='blue'>while</div> i {`<`} 10:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(i)</div>
                                            <div class='in_1'>i = i + 1</div>
                                        </div>
                                        <div class='output'>
                                            <div>0</div>
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                            <div>6</div>
                                            <div>7</div>
                                            <div>8</div>
                                            <div>9</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>{`Here we first created the variable i and made it equal to the number 0. Then we created our while loop by typing in the keyword why and the condition which checks to see if the variable i is less than 10. If this condition is true which in this case it is, the loop code will get run which is why it is printed. Then the value of i increases by one because we make the variable i equal to itself plus one. This while loop will stop running once i is equal to 10 because then the condition i < 10 and if the condition is false the loop will stop.`}</div>
                                    <div class='paragraph'>We need to be careful when using while loops because sometimes we can run into infinite loops where the condition is always true meaning the code in the while loop gets run forever. An example of this would be:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 0</div>
                                            <div class='multi'><div class='blue'>while</div> i {`<`} 10:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(i)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>This is because i = 0 which is less than 0, but because i doesn’t change values, python will continue to print the value of i which is 0 forever. If you do end up getting an infinite loop and want to know how to stop it, you can either x out of the shell window and kill the code, or you can hold the ctrl key first then press the c key second and python will say there is a keyboard interrupt error which breaks the infinite loop.</div>
                                    <div class='paragraph'>So we just use a conditional statement, so let's take a closer look at the various aspects of a conditional statement the other various tasks we can use conditional statements for. Computers make decisions just like people, but with computers, they use boolean expressions where the output is either true or false, within conditional statements which can be a simple expression like i = 0 or an if, elif, or else statement.</div>
                                    <div class='paragraph'>Let's look at an example of an if statement with a condition.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 0</div>
                                            <div class='multi'><div class='blue'>if</div> i {`<`} 5:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is less than 5"</div>)</div>
                                        </div>
                                        <div class='output'>
                                            <div>i is less than 5</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we have the variable i = 0. Then we have the if statement where we first type the keyword if. Then after that, we have the condition which is if i is less than 5 followed by a colon which tells python the condition is completed.</div>
                                    <div class='paragraph'>Next, we have our print statement which will only run if the condition in the if statement is true. So if we were to make i = 6, the condition would be false and therefore the print statement would not run. </div>
                                    <div class='paragraph'>Let's look at a more complex example:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 16</div>
                                            <div class='multi'><div class='blue'>if</div> i == 5:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is equal to 0"</div>)</div>
                                            <div class='multi'><div class='blue'>elif</div> i {`<`} 5:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is less than 0"</div>)</div>
                                            <div class='multi'><div class='blue'>else</div>:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is not zero or less than 0"</div>)</div>
                                        </div>
                                        <div class='output'>
                                            <div>i is not zero or less than 0</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we have another if statement with i equal to 16 and we check to see if the i is equal to 0. We need 2 equal signs to see if something is equal to another thing and you’ll see why shortly. So in this case, the condition in the if statement is false and print statement in the if statement is not run. So what now?</div>
                                    <div class='paragraph'>Well because the if statement is false, python will now look at the condition in the elif statement to see if it's true or not. Elif is short for else if, we can have many elif statements but they must be followed after an if statement and before an else statement which we will look at soon. An elif statement is like another if statement but it allows us to put many of them. </div>
                                    <div class='paragraph'>So if we check the condition of the elif statement which checks to see if the variable i is less than 0 which in this case it is not. Therefore the print statement is not run. Its important to know that we still have to put colons after the conditional portion of if and elif statements. Another thing to not is that the if, elif and else keywords should all be aligned with each other. So now that the conditions for the if statements and all the elif statements present are false, python will run the else statement. The else statement will only run if all other conditions before it are false which is why the else statement needs not condition. So in this python prints out “i is not zero or less than 0” because i failed the first 2 conditions.</div>
                                    <div class='tab_header'>Comparison Operators</div>
                                    <div class='paragraph'>So let's take a look at the different kinds of comparison operators that you might use. These operators can be used to see if a variable is equal to a certain number or string or if a number is greater than another number. Here's what they look like:</div>
                                    <table>
                                        <tr>
                                            <th>Comparison</th>
                                            <th>Operator</th>
                                            <th>Example</th>
                                            <th>Output</th>
                                        </tr>
                                        <tr>
                                            <td>Greater than</td>
                                            <td>{`>`}</td>
                                            <td>5 {`>`} 3</td>
                                            <td>True</td>
                                        </tr>
                                        <tr>
                                            <td>Less than</td>
                                            <td>{`<`}</td>
                                            <td>3 {`<`} 3</td>
                                            <td>False</td>
                                        </tr>
                                        <tr>
                                            <td>Greater than or Equal to</td>
                                            <td>{`>=`}</td>
                                            <td>10 {`>=`} 9</td>
                                            <td>True</td>
                                        </tr>
                                        <tr>
                                            <td>Less than or equal to</td>
                                            <td>{`<=`}</td>
                                            <td>10 {`<=`} 10</td>
                                            <td>True</td>
                                        </tr>
                                        <tr>
                                            <td>Equal to</td>
                                            <td>==</td>
                                            <td>10 == 11</td>
                                            <td>False</td>
                                        </tr>
                                        <tr>
                                            <td>Not equal to</td>
                                            <td>!=</td>
                                            <td>10 != 4</td>
                                            <td>True</td>
                                        </tr>
                                    </table>
                                    <div class='paragraph'>Now that we know different kinds of comparison operators, let's look at the special keywords and, or.</div>
                                    <div class='paragraph'>So typically if we wanted to check multiple conditions at the same time, we would need to different if statements. But with the and or keywords, we can put more than one condition in an if statement so let's look at an example of the and keyword:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 10</div>
                                            <div class='multi'><div class='blue'>if</div> i == 9 <div class='blue'>and</div> i {`>`} 8:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is 9 and greater than 8"</div>)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we have the variable i set to the number 10. Then the 2 conditions we check in the if statement which is if i is equal to 9 and if i is greater than 8. With the and keyword, all of the conditions in the if statement must be true for the entire statement to be true and allow the code within the if statement to run. So running the code gives no output because even though i is greater than 0, i is not equal to 9 meaning that one of the conditions is not met so the entire if statement is false. So to recap, both conditions need to be true for the entire if statement to be true when using the and keyword combining the conditional statements. If both or one of the conditions is false, then the entire if statement is false.</div>
                                    <div class='paragraph'>So if we wanted the code to work, we would do the following:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 10</div>
                                            <div class='multi'><div class='blue'>if</div> i == 10 <div class='blue'>and</div> i {`>`} 8:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is 10 and greater than 8"</div>)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Now in this scenario, both conditions are true as i is equal to 10 and i is greater than 8 meaning because both conditions are true, the entire if statement is true allowing the print statement to run.</div>
                                    <div class='paragraph'>Now let's look at our examples for the or keyword:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 10</div>
                                            <div class='multi'><div class='blue'>if</div> i == 9 <div class='blue'>or</div> i {`>`} 8:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is 9 or greater than 8"</div>)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>{`Here we have the same code as the first example but instead, we use the word or in the if statement to combine the conditions. The or keyword will make the entire if statement true if either 1 of the conditions is true or if both of the conditions are true. For the entire if statement to be false when using the or keyword, both conditions must be false. So in this case, the first condition of i = 9 is false but because the condition i > 8 is true, the entire if statement is true which is why the print statement is run.`}</div>
                                    <div class='paragraph'>Let's look at the final example of us using the or keyword:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>i = 10</div>
                                            <div class='multi'><div class='blue'>if</div> i == 9 <div class='blue'>or</div> i {`<`} 8:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(<div class='str'>"i is 9 or less than 8"</div>)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>In this case, both conditions in the if statement are false meaning the entire statement is false, at least one of the conditions must be true when using the or keyword in order for the entire if statement to be true. Note to put the colon at the end of the if statement to tell python that it’s been completed.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>for</div> i <div class='blue'>in</div> <div class='gre'>range</div>(2,13,3):</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(i)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["4,6,8,10,12", "3,5,7,9,11", "3,6,9,12", "2,5,8,11"], 
                                              rightAnswer:"2,5,8,11"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>i = 0</div>
                                            <div class='multi'><div class='blue'>while</div> i {`<`} 5:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(i)</div>
                                            <div class='multi in_1'>i = i + 1</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "0,1,2,3,4", "1,2,3,4,5", "0,1,2,3,4,5", "1,2,3,4,5,6"], 
                                                rightAnswer:"0,1,2,3,4"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following conditional statements are false?",
                                                FindAnswer:[ "2 > 1", "5==4", "10 < 11", "6 <= 6"], 
                                                rightAnswer:"5==4"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class='tab_header'>Task</div>
                                    <div class='paragraph'>Create a program that uses 2 for loops to create a multiplication table of the values from 1 to 5.</div>
                                    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/CSPUnit3Lesson4?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson4;