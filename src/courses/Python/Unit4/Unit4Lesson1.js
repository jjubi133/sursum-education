import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit4Lesson1 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/cj0PqJmKX18?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">if, elif, else Statements</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">if, elif, else Statements</div>
                                    <div class="paragraph">if Statements in Python allows us to tell the computer to perform alternative actions based on a certain set of results.</div>
                                    <div class="paragraph">It’s the same as telling a computer "Hey if this case happens, perform some action".</div>
                                    <div class="paragraph">We can then expand the idea further with elif and else statements, which allow us to tell the computer:</div>
                                    <div class="paragraph">"Hey if this case happens, perform some action. Else, if another case happens, perform some other action. Else, if none of the above cases happened, perform this action." Else is basically the same as saying “otherwise” or “do this instead”.</div>
                                    <div class="paragraph">Let's go ahead and look at the syntax format for if statements to get a better idea of this:</div>

                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">if</div> situation1:</div>
                                            <div class="multi in_1"><div class="blue">perform</div> action1</div>
                                            <div class="multi"><div class="blue">elif</div> situation2:</div>
                                            <div class="multi in_1"><div class="blue">perform</div> action2</div>
                                            <div class="multi"><div class="blue">else</div>:</div>
                                            <div class="multi in_1"><div class="blue">perform</div> action3</div>

                                        </div>
                                    </div>

                                    <div class="tab_header">First Example</div>
                                    <div class="paragraph">Let's see a quick example of this:</div>
                                   
                                    <div class="code_block">
                                        <div class="input">
                                        <div class="multi"><div class="bold"><div class="blue">if</div> <div class="blue">True</div>:</div></div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'It was true!'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>It was true!</div>
                                        </div>
                                    </div>
                                 
                                    <div class="paragraph">Let's add in some else logic:</div>
                                    <div class="paragraph">x = <div class="bold">False</div></div>

                                    <div class="code_block">
                                        <div class="input">
                                        <div class="multi"><div class="blue">if</div> x:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'x was true!'</div>)</div>
                                            <div class="blue">else</div>:
                                            <div class="multi in_1"><div class="purp">print</div>(<div class='str'>'I will be printed in any case where x is not true'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>I will be printed in any case where x is not true</div>
                                        </div>
                                    </div>
                                 

                                    <div class="tab_header">Multiple Branches</div>
                                    <div class="paragraph">Now that we have the basics, let’s see what if, elif, and else can do!</div>
                                    <div class="paragraph">We write this out in a nested structure. Look carefully at the order of which if, elif, and else line up in the code. The order of these statements matter! </div>

                                    <div class="code_block">
                                        <div class="input">
                                        <div>loc = <div class='str'>'house'</div></div>
                                        <div class="multi"><div class="blue">if</div> loc == <div class="str">'grocery store'</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Welcome to the grocery store!'</div>)</div>
                                        <div class="multi"><div class="blue">elif</div>  loc == <div class="str">'house'</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Welcome to the house!'</div>)</div>
                                        <div class="multi"><div class="blue">else</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'No place to go?'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>Welcome to the house!</div>
                                        </div>
                                    </div>

                                    <div class="paragraph">Let's create two more simple examples for the if, elif, and else statements:</div>
                                   
                                    <div class="code_block">
                                        <div class="input">
                                        <div>person = <div class='str'>'Gordon'</div></div>
                                        <div class="multi"><div class="blue">if</div> person == <div class="str">'Gordon’</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Welcome Gordon!'</div>)</div>
                                        <div class="multi"><div class="blue">else</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">"Sorry, forgot your name!"</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>Welcome Gordon!</div>
                                        </div>
                                    </div>
                                   
                                    <div class="code_block">
                                        <div class="input">
                                        <div>person = <div class='str'>'Tabby'</div></div>
                                        <div class="multi"><div class="blue">if</div> person == <div class="str">'Tabby'</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Welcome Tabby!'</div>)</div>
                                        <div class="multi"><div class="blue">elif</div>  person ==<div class="str">'Gordon'</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">'Welcome Gordon!'</div>)</div>
                                        <div class="multi"><div class="blue">else</div>:</div>
                                        <div class="multi in_1"><div class="purp">print</div>(<div class="str">"Sorry, forgot your name!"</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>Welcome Tabby!</div>
                                        </div>
                                    </div>

                                   
                                   
                                    </div>

                                   



                                   
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">if</div> <div class="str">'lion'</div> == <div class="str">'zebra'</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'time to eat!!'</div>)</div>
                                            <div class="multi"><div class='blue'>else</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'what are you?'</div>)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the following?",
                                              FindAnswer:["what are you?", "Time to eat!!", "What are you?", "time to eat!!"], 
                                              rightAnswer:"what are you?"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 7</div>
                                            <div class="multi">y = 8</div>
                                            <div class="multi"><div class="blue">if</div> (x != y):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">“comp ops”</div>)</div>
                                            <div class="multi"><div class='blue'>else</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(<div class="str">'nope not true'</div>)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the following?",
                                                FindAnswer:[ "Not Equal", "False", "comp ops", "nope not true"], 
                                                rightAnswer:"comp ops"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">x = 7</div>
                                            <div class="multi">y = 13</div>
                                            <div class="multi">z = 2</div>
                                            <div class="multi"><div class="blue">if</div> (x {'>'} 5):</div>
                                            <div class="multi in_1"><div class="blue">if</div> (z {'<'} 12):</div>
                                                <div class="multi in_2">x = x + 3</div>
                                            <div class="multi in_1"><div class='blue'>elif</div> x {'>'} 4:</div>
                                                <div class="multi in_2">x = x + 12</div>
                                            <div class="multi in_1"><div class='blue'>else</div>:</div>
                                                <div class="multi in_2">x = x + 1</div>
                                            <div class="multi"><div class='blue'>else</div>:</div>
                                            <div class="multi in_1">x = x </div>
                                            <div class="multi"><div class="purp">print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the following?",
                                                FindAnswer:[ "19", "8", "7", "10"], 
                                                rightAnswer:"10"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="paragraph">Create a program that checks if the length of a word is even or odd. Let it print out ‘Hey the length of this word is even’ if it is even and ‘Hey the length of this word is odd’ if it is odd.</div>
                                <div class="code_block">
                                    <div class="input">
                                        <div class="multi">word1 = <div class="str">‘I love waking up on Monday mornings’</div></div>
                                        <div class="multi">word2 = <div class="str">‘word1 is a lie’</div></div>
                                        <div class="multi">word3 = <div class="str">‘I just like to sleep in if I’m being honest’</div></div>
                                    </div>
                                </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit4Lesson1?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit4Lesson1;