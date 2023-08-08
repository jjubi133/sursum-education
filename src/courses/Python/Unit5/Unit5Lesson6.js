import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson6 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/pftyDs193Hw?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Arguments and Keyword Arguments</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">*args and **kwargs</div>
                                    <div class="paragraph">Continuing with functions, you'll eventually encounter *args and **kwargs. These terms stand for arguments and keyworded arguments and are the next steps you can take to further polish your functions. In this supplemental, you’ll learn what they do and how to use them?</div>
                                    <div class="paragraph_NI"> Let's review a simple function:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                        <div class="multi"><div class="blue">def</div> myfunc(a,b):</div>
                                        <div class="multi in_1"><div class="blue"></div> sum((a,b))*.05</div>
                                        <div>myfunc(40,60)</div>
                                        </div>
                                        <div class="output">
                                            <div>5.0</div>
                                        </div>
                                    </div>

                                    <div class="paragraph">This function returns 5% of the sum of a and b. In this example, a and b are positional arguments; that is, 40 is assigned to a because it is the first argument, and 60 to b. Notice also that to work with multiple positional arguments in the sum() function we had to pass them in as a tuple.</div>
                                    <div class="paragraph">Well what if we want to work with more than two numbers? To resolve this problem in the traditional way we’ve learned, we’d need to assign a lot of parameters and give each one a default value.</div>

                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> myfunc((a=0,b=0,c=0,d=0,e=0)):</div>
                                            <div><div class="purp in_1">return</div> sum((a,b,c,d,e))*.05</div>
                                        <div>myfunc(40,60,20)</div>
                                        </div>
                                        <div class="output">
                                            <div>6.0</div>
                                        </div>
                                    </div> 

                                    <div class="paragraph">Obviously this is not a very efficient solution, and that's where *args come in.</div>
                                        

                                    <div class="tab_header">*args</div>
                                    <div class="paragraph">When a function parameter starts with an asterisk, it allows for an arbitrary number of arguments, and the function takes them in as a tuple of values. Rewriting the above function:</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> myfunc(*args):</div>
                                            <div><div class="purp in_1">return</div> sum(args)*.05</div>
                                        <div>myfunc(40,60,20)</div>
                                        </div>
                                        <div class="output">
                                            <div>6.0</div>
                                        </div>
                                    </div> 
                                    <div class="paragraph">Notice how passing the keyword "args" into the sum() function did the same thing as a tuple of arguments.</div>
                                    <div class="paragraph">It is worth noting that the word "args" is itself arbitrary. Any word will do so as long as it's preceded by an asterisk. To demonstrate this:</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> myfunc(*spam):</div>
                                            <div><div class="purp in_1">return</div> sum(spam)*.05</div>
                                        <div>myfunc(40,60,20)</div>
                                        </div>
                                        <div class="output">
                                            <div>6.0</div>
                                        </div>
                                    </div> 

                                    <div class="tab_header">**kwargs</div>
                                    <div class="paragraph">Similarly, Python offers a way to handle arbitrary numbers of keyworded arguments. Instead of creating a tuple of values, **kwargs builds a dictionary of key/value pairs. For example:</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi"><div class="blue">def</div> myfunc(**kwargs):</div>
                                            <div class="multi"><div class="blue in_1">if</div> <div class='str'>'fruit'</div> <div class="blue">in</div> kwargs:</div>
                                            <div class="multi"><div class="purp in_2">print</div>(f<div class='str'>"My favorite fruit is {`{kwargs['fruit']}`}"</div>)</div>
                                            <div class="comment in_2"># review String Formatting and f-strings if this syntax is unfamiliar
                                            </div>
                                            <div class="multi"><div class="blue in_1">else</div>:</div>
                                            <div class="multi"><div class="purp in_2">print</div>(<div class="str">"I don't like fruit"</div>)</div>
                                            <div class="multi">myfunc(fruit=<div class="str">'pineapple'</div>)</div>

                                        </div>
                                        <div class="output">
                                            <div>My favorite fruit is pineapple </div>
                                            <div>myfunc()</div>
                                            <div>I don't like fruit</div>
                                        </div>
                                    </div> 

                                    <div class="tab_header">*args and **kwargs combined</div>
                                    <div class="paragraph">You can pass *args and **kwargs into the same function, but *args have to appear before **kwargs</div>
                                    <div class = "code_block">
                                        <div class ="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">myfunc</div>(*args, **kwargs):</div>
                                            <div class="multi"><div class="blue in_1">if</div> <div class='str'>'fruit'</div> <div class="blue">and</div> <div class='str'>'juice'</div> <div class="blue">in</div> kwargs:</div>
                                            <div class="multi"><div class="purp in_2">print</div>(f<div class='str'>"I like {`{' and '.join(args)}`} and my favorite fruit is {`{kwargs['fruit']}`}"</div>)</div>
                                            <div class="multi"><div class="purp in_2">print</div>(f<div class='str'>"May I have some {`{kwargs['juice']}`} juice?"</div>)</div>
                                            <div class="multi"><div class="blue in_1">else</div>:</div>
                                            <div class="multi"><div class="blue in_2">pass</div></div>
                                            <div class="multi">myfunc(<div class='str'>'eggs'</div>,<div class='str'>'spam'</div>,fruit=<div class='str'>'cherries'</div>,juice=<div class='str'>'orange'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>I like eggs and spam and my favorite fruit is cherries</div>
                                            <div>May I have some orange juice?</div>
                                        </div>
                                    </div> 

                                    <div class="paragraph">Placing keyworded arguments ahead of positional arguments raises an exception:</div>
                                    <div class = "code_block">
                                            <div class ="input">
                                            <div class="multi">myfunc(fruit=<div class='str'>'cherries'</div>,juice=<div class='str'>'orange'</div>,<div class='str'>'eggs'</div>,<div class='str'>'spam'</div>)</div>
                                            <div class="multi"> File {'"<ipython-input-8-fc6ff65addcc>"'}, line 1</div>
                                            <div class="multi">myfunc(fruit=<div class="str">'cherries'</div>,juice=<div class="str">'orange'</div>,<div class="str">'eggs'</div>,<div class="str">'spam'</div>)</div>
                     
                                        </div>
                                        <div class="output">
                                            <div>SyntaxError: positional argument follows keyword argument</div>
                                      
                                        </div>
                                    </div> 
                                    <div class="paragraph">As with "args", you can use any name you'd like for keyworded arguments - "kwargs" is just a popular convention.</div>

                                
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "How can you create a function that can accept an infinite amount of non-keyword arguments?",
                                              FindAnswer:["Parameter arguments", "args", "*args", "**kwargs"], 
                                              rightAnswer:"*args"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How can you create a function that can accept an infinite amount of keyword arguments?",
                                                FindAnswer:[ "kwargs", "**kwargs", "No such type exists", "*args"], 
                                                rightAnswer:"**kwargs"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">def</div> <div class="purp">func</div>(*args):</div>
                                            <div class="multi in_1"><div class="blue">for</div> x <div class="blue">in</div> args:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(x)</div>
                                            <div class="multi">func(2,3,1,2)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the following?",
                                                FindAnswer:[ "2", "2 3 1 2", "2 1 3 2", "Syntax error"], 
                                                rightAnswer:"2 3 1 2"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create a function that can take in an arbitrary number of arguments, returns the sum, the product of those arguments, and how many even numbers were passed through the argument.</div>

                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson6?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson6;