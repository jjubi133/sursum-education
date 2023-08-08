import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson5 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/KMz-Mgyb-sk?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Tuples Unpacking with Functions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Returning Tuples for Unpacking</div>
                                    <div class="paragraph">Recall we can loop through a list of tuples and "unpack" the values within them. Similarly, functions often return tuples, to easily return multiple results for later use.</div>
                                    <div class="paragraph_NI">Let's imagine the following list:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                        <div>fruit_list = [(<div class="str">'Apple'</div>, 3),(<div class="str">'Banana'</div>, 7),(<div class="str">'Cherry'</div>, 9)]</div>
                                        </div>
                                    </div>

                                    <div class="paragraph">The what fruit function will return both the name and price for the most expensive fruit (judged by number of hours worked).</div>
                                    
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">what_fruit</div>(fruit_list):</div>
                                            <div class="comment in_1"># Set some max value to initially beat, like zero hours</div>
                                            <div class='in_1'>current_max = 0</div>
                                            <div class="comment in_1"># Set some empty value before the loop</div>
                                            <div class='in_1'>highest_price = ' '</div>
                                            <div class="multi in_1"><div class="blue">for</div> fruit_price <div class="blue">in</div> fruit_list:</div>
                                                <div class="multi in_2"><div class="blue">if</div> price {'>'} current_max:</div>
                                                <div class="multi in_3">current_max = price</div>
                                                <div class="multi in_3">highest_price = fruit</div>
                                                <div class="multi in_1"><div class="blue">else</div>:</div>
                                                <div class="multi in_2 blue">pass</div>
        
                                            <div><div class="comment"># Notice the indentation here</div></div>
                                            <div class='multi'><div class='blue'>return</div> (highest_price,current_max)</div>
                                            <div>what_fruit(fruit_list)</div>

                                            </div>
                                            <div class = "output">
                                                    <div>('Cherry', 9)</div>
                                        </div>
                                    </div>   
                                        
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which is true about functions and tuple unpacking?",
                                              FindAnswer:["Functions cannot unpack tuples as they cannot properly access tuples unless given it’s a unique encryption key", "Functions can be created to unpack tuples", "Programmers never use functions to unpack tuples as normal tuple unpacking is satisfactory", "All of the above statements are false"], 
                                              rightAnswer:"Functions can be created to unpack tuples"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How would you normally unpack a tuple?",
                                                FindAnswer:[ "With a for loop", "With an else statement", "With an if statement", "With a combination of logical operators and booleans"], 
                                                rightAnswer:"With a for loop"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "When unpacking a tuple with a function, where does the tuple name go?",
                                                FindAnswer:[ "In the body of the function", "In the parameter when calling the function", "Right after the def keyword", "You do not mention the tuple name anywhere in the function"], 
                                                rightAnswer:"In the parameter when calling the function"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create a tuple that contains 3 of your favorite colors and your 3 favorite numbers. Format it like this (favorite_color, favorite_numbers). Then create a function that unpacks your tuple and determines which color has the longest amount of characters in its name.</div>
                                    <div class="paragraph">Example: ‘blue’ is 4 characters long</div>
                                    <div class="paragraph">Once the color with the longest character count has been found, add the character count with the number that was in that particular item and return it.</div>
                                    <div class="paragraph">Example: If you had (‘blue’, 18) then the character count would be 4. Then you’d add the two numbers together. 4 + 18 = 22</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson5?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson5;