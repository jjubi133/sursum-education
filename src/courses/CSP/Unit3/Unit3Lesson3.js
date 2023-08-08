import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson3 extends React.Component {
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
                        <div class = "lesson_title grow">Strings</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Strings</div>
                                    <div class='paragraph'>Whenever we are making programs, we usually want to store data into variables and we can store different kinds of data into variables. Well, let’s take a look at the string data type in more depth. In programming talk, a list is a character while a sequence is a string.</div>
                                    <div class='paragraph_NI'>Lets look at examples of strings:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>variable1 = <div class='str'>“Cake”</div></div>
                                            <div class='multi'>variable2 = <div class='str'>“Sun”</div></div>
                                            <div class='multi'>variable3 = <div class='str'>“Table”</div></div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Strings can have any amount of characters and these characters can be virtually anything including numbers, letters, and symbols. Strings must be surrounded by a pair of double quotes or a pair of single quotes. </div>
                                    <div class='paragraph'>But why can it be single quotes or double quotes, well it’s because sometimes in a string we might want to use a single quote within the string so to not confuse python, we use double quotes instead? This works in the opposite case as well. So if we wanted to store the string “I’m busy now” it would look like this:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>variable = <div class='str'>“I’m busy now”</div></div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As we can see, we have a single quote within the string but to prevent confusion for python, we complete the string by surrounding the characters in double-quotes.</div>
                                    <div class="tab_header">String Modification</div>
                                    <div class='paragraph'>We can also modify strings by cutting them up, combining them, or changing them up in many more ways so let's look at the possibilities.</div>
                                    <div class='paragraph'>So let's begin by looking at how we can combine strings. The name of combining strings together is known as concatenation. So let's see how to do this in python.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>name = <div class='str'>“Barry”</div></div>
                                            <div class='multi'>statement = <div class='str'>“My name is ”</div>+ name</div>
                                            <div class='multi'><div class='purp'>print</div>(statement)</div>
                                        </div>
                                        <div class='output'>
                                            <div>My name is Barry</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>We created the variables name and statement, but within the statement variable we combine the string “My name is “ and the variable name together to get a final output of “My name is Barry”. This works because the name variable is equal to the string barry and we combine that with the string within the statement variable. We call this a string literal and we can combine mane strings together.</div>
                                    <div class='paragraph'>We can also slice strings into smaller parts known as substrings. We can do this if we know at what index values we want to slice the list at. So what is an index value? Well, simply the index value is the position of a character in a string, starting with the number 0. So how would the index values of the word “hello” be ordered? They would look like this:</div>
                                    <table>
                                        <tr>
                                            <th>H</th>
                                            <th>e</th>
                                            <th>l</th>
                                            <th>l</th>
                                            <th>o</th>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                        </tr>
                                    </table>
                                    <div class='paragraph'>As you can see the first character has an index value of 0 and then it increases by one every time we go down the string. So what if we want to print the first 2 letters of the string hello? We would do the following:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>a = <div class='str'>'hello'</div></div>
                                            <div class='multi'><div class='purp'>print</div>(a[0:2])</div>
                                        </div>
                                        <div class='output'>
                                            <div>he</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>This might seem weird that we are using the number 2 to call for index values 0 and 1 which can be weird. This is a common theme with indexes, the last index value you call is off by one.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>a = <div class='str'>'hello'</div></div>
                                            <div class='multi'><div class='purp'>print</div>(a[0:3])</div>
                                        </div>
                                        <div class='output'>
                                            <div>hel</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see now, we get the letter “l” by calling for the 3rd index value which once again demonstrates that there is an off by one error present. This only applies to the second number or ending number within the square brackets not the first number or the starting number.</div>
                                    <div class='paragraph'>We can do much more with strings like turning all the characters to uppercase or all of them to lower case. We can find the index value of certain letters or find the length of a string. We can also do multiple operations on strings at once, let's look at this in our example:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>string = <div class='str'>'hello'</div></div>
                                            <div class='multi'>newstring = string.<div class='purp'>upper</div>().<div class='purp'>replace</div>(<div class='str'>"H"</div>), <div class='str'>""</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(newstring)</div>
                                        </div>
                                        <div class='output'>
                                            <div>ELLO</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we create a variable string that's equal to the string hello. Then we create a new variable called newstring and then make newstring equal to string but uppercase which is what the .upper() function does and then the .replace function here changes the capital H with a blank space which is why when we print newstring, we get an output of HELLO in capital letters but the H is missing.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>{`>>>`}name = <div class='str'>“Alan”</div></div>
                                            <div class='multi'>{`>>>`}statement = <div class='str'>“My name is “</div> + name</div>
                                            <div class='multi'>{`>>>`}<div class='purp'>print</div>(statement)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["My name is Alan", "My name is name", "My name is", "My name is + name"], 
                                              rightAnswer:"My name is Alan"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>{`>>>`}a = <div class='str'>'Morning'</div></div>
                                            <div class='multi'>{`>>>`}<div class='purp'>print</div>(a[1:4])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "morn", "ing", "orn", "ning"], 
                                                rightAnswer:"orn"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Moke",
                                                FindAnswer:[ "componentWillMount", "componentDidMount", "use function", "bruh"], 
                                                rightAnswer:"componentDidMount"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class='tab_header'>Task</div>
                                    <div class='paragraph'>Create a program that creates a variable named “string” and make it equal to the string “Programming”. Then create a new variable titled “newstring” and make it equal to the variable “string” while also using the upper() and replace() functions to replace the letter “P” in programming with a blank space and print the final result.</div>
                                    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/CSPUnit3Lesson3?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson3;