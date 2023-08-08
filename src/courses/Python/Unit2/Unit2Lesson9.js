import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson9 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/KQlbIn3FB8Q?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Dictionaries</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Dictionaries</div>
                                    <div class="paragraph">In previous lessons, you learned about sequences in Python. With sequences added to your knowledge of Python, mappings is the next concept which you’ll be able to fully utilize in Python. Mappings are a collection of objects that are stored by a key rather than their index positions. This is the primary difference between mappings and sequences since mappings won’t have any specific order since the objects themselves are defined by a key. If you’re confused, don’t worry, well look at plenty of examples to get familiar with the concept.</div>
                                    <div class="paragraph">In this supplemental, you’ll learn about dictionaries, how to create them, how to access the objects inside a dictionary, and other functionalities dictionaries can provide your programs.</div>
                                    <div class="tab_header">Creating a Dictionary</div>
                                    <div class="paragraph_NI">Let’s create our first dictionary:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Make a dictionary with {`{}`} and : to signify a key and a value. Commas are used to separate each key and object from the next key and object.</div>
                                            <div class="multi">my_dict = {`{`}<div class="str">'key1'</div>: <div class="str">'value1'</div>, <div class="str">'key2'</div>: <div class="str">'value2'</div>{`}`}</div>
                                            <div class="comment"># Call values by their key</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key2'</div>])</div>
                                        </div>
                                        <div class="output">
                                            <div>value2</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">It should be noted that dictionaries can store multiple data types. For example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">my_dict = {`{`}<div class="str">'key1'</div>: 123, <div class="str">'key2'</div>: [0, 1, 2], <div class="str">'key3'</div>: [<div class="str">'How'</div>, <div class="str">'Are'</div>, <div class="str">'You'</div>]{`}`}</div>
                                            <div class="comment"># Let’s call items from the dictionary</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key3'</div>])</div>
                                            <div class="comment"># Can call an index on that value</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key3'</div>][0])</div>
                                            <div class="comment"># Can then even call methods on that value</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key3'</div>][0]).<div class="purp">upper</div>()</div>
                                        </div>
                                        <div class="output">
                                            <div>['How', 'Are', 'You']</div>
                                            <div>How</div>
                                            <div>HOW</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We can affect the values of a key as well. For instance:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key1'</div>])</div>
                                            <div class="comment"># Subtract 123 from the value</div>
                                            <div class="multi">my_dict[<div class="str">'key1'</div>] = my_dict[<div class="str">'key1'</div>] - 123</div>
                                            <div class="comment"># Check</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key1'</div>])</div>
                                        </div>
                                        <div class="output">
                                            <div>123</div>
                                            <div>How</div>
                                            <div>HOW</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Python has a built-in method of doing a self subtraction or addition (or multiplication or division). We could have also used += or -= for the above statement. For example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Set the object equal to itself minus 123</div>
                                            <div class="multi">my_dict[<div class="str">'key1'</div>] -= 123</div>
                                            <div class="multi"><div class="purp">print</div>(my_dict[<div class="str">'key1'</div>])</div>
                                        </div>
                                        <div class="output">
                                            <div>-123</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">We can also create keys by assignment. For instance, if we started off with an empty dictionary, we could continually add to it:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Create a new dictionary</div>
                                            <div>d = {`{}`}</div>
                                            <div class="comment"># Create a new key through assignment</div>
                                            <div class="multi">d[<div class="str">'animal'</div>] = <div class="str">'Dog'</div></div>
                                            <div class="comment"># Can do this with any object</div>
                                            <div class="multi">d[<div class="str">'answer'</div>] = 42</div>
                                            <div class="comment"># Show</div>
                                            <div class="multi"><div class="purp">print</div>(d)</div>
                                        </div>
                                        <div class="output">
                                            <div>{`{'animal': 'Dog', 'answer': 42}`}</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Nesting with Dictionaries</div>
                                    <div class="paragraph">You can see how powerful Python is with its flexibility of nesting objects and calling methods on them. Let's see a dictionary nested inside a dictionary:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Dictionary nested inside a dictionary nested inside a dictionary</div>
                                            <div>d = {`{`}<div class="str">'key1'</div>: {`{`}<div class="str">'nestkey'</div>: {`{`}<div class="str">'subnestkey'</div>: <div class="str">'value'</div>{`}}}`}</div>
                                            <div class="comment"># Wow! That's quite the inception of dictionaries. Let's see how we can grab that value:</div>
                                            <div class="multi"><div class="purp">print</div>(d[<div class="str">'key1'</div>][<div class="str">'nestkey'</div>][<div class="str">'subnestkey'</div>])</div>
                                        </div>
                                        <div class="output">
                                            <div>value</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">A Few Dictionary Methods</div>
                                    <div class="paragraph">There are a few methods we can call on a dictionary. Here’s a quick introduction to a few of them:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Create a typical dictionary</div>
                                            <div class="multi">d = {`{`}<div class="str">'key1'</div>: 1, <div class="str">'key2'</div>: 2, <div class="str">'key3'</div>: 3{`}`}</div>
                                            <div class="comment"># Method to return a list of all keys</div>
                                            <div class="multi"><div class="purp">print</div>(d.<div class="purp">keys</div>())</div>
                                            <div class="comment"># Method to grab all values</div>
                                            <div class="multi"><div class="purp">print</div>(d.<div class="purp">values</div>())</div>
                                            <div class="comment"># Method to return tuples of all items  (we'll learn about tuples soon)</div>
                                            <div class="multi"><div class="purp">print</div>(d.<div class="purp">items</div>())</div>
                                        </div>
                                        <div class="output">
                                            <div>dict_keys(['key1', 'key2', 'key3'])</div>
                                            <div>dict_values([1, 2, 3])</div>
                                            <div>dict_items([('key1', 1), ('key2', 2), ('key3', 3)])</div>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is the value of the var after the for loop completes its execution?",
                                              FindAnswer:["20", "21", "10", "30"], 
                                              rightAnswer:"21"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which is true about a for loop?",
                                                FindAnswer:["Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string", "We use for loop when we want to perform a task indefinitely until a particular condition is met", "else clause of for loop is executed when the loop terminates naturally", "else clause of for loop is executed when the loop terminates abruptly"], 
                                                rightAnswer:"else clause of for loop is executed when the loop terminates naturally"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which two statements are used to implement iteration?",
                                                FindAnswer:[ "FOR and WHILE", "IF and ELSE", "IF and WHILE", "ELSE and WHILE"], 
                                                rightAnswer:"IF and ELSE"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create a dictionary where all keys are strings and all values are floats. </div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson9?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson9;