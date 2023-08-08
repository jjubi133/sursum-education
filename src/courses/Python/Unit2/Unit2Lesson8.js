import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson8 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/Qb1iWOYApDw?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Lists</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Lists</div>
                                    <div class="paragraph">Previously, we learned about strings and how they are a sequence in Python. Lists can be thought of as the most general version of a sequence in Python. They hold elements in ordered quantities and these elements can be selected by calling their index position. But unlike strings which are immutable, elements inside a list can be changed.</div>
                                    <div class="paragraph">In this supplemental, you’ll learn about lists, how to create them, why we use them, and how we can maximize the usability of lists in Python.</div>
                                    <div class="paragraph">Lists are constructed with brackets [] and commas separating every element in the list.</div>
                                    <table>
                                        <tr>
                                            <td>
                                                <div class="comment"># Assign a list to an variable named my_list</div>
                                                <div>my_list = [1,2,3]</div>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">We just created a list of integers, but lists can actually hold different object types. Let’s take a look at an example.</div>
                                    <table>
                                        <tr>
                                            <td>my_list = ['A string',23,100.232,'o']</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">Just like strings, the len() function will tell you how many items are in the sequence of the list.</div>
                                    <table>
                                        <tr>
                                            <th>Syntax</th>
                                            <th>Outcome</th>
                                        </tr>
                                        <tr>
                                            <td>len(my_list)</td>
                                            <td>4</td>
                                        </tr>
                                    </table>
                                    <div class="tab_header">Indexing and Slicing</div>
                                    <div class="paragraph">Indexing and slicing work just like in strings. We will create a new list to remind ourselves of how this works:</div>
                                    <div class="paragraph_NI">Let <div class="bold">my_list = ['one','two','three',4,5]</div></div>
                                    <table>
                                        <tr>
                                            <td>
                                                <div class="comment"># Grab element at index 0</div>
                                                <div>my_list[0]</div>
                                            </td>
                                            <td>'one'</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="comment"># Grab index 1 and everything past it</div>
                                                <div>my_list[1:]</div>
                                            </td>
                                            <td>['two', 'three', 4, 5]</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="comment"># Grab everything UP TO index 3</div>
                                                <div>my_list[:3]</div>
                                            </td>
                                            <td>['one', 'two', 'three']</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph_NI">We can also use "+" to concatenate lists, just like we did for strings.</div>
                                    <table>
                                        <tr>
                                            <td>
                                                <div>my_list + ['new item']</div>
                                                <div class="comment"># Note: This doesn't actually change the original list.</div>
                                            </td>
                                            <td>['one', 'two', 'three', 4, 5, 'new item']</td>
                                        </tr>
                                        <tr>
                                            <td>my_list</td>
                                            <td>['one', 'two', 'three', 4, 5]</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="comment"># Reassign</div>
                                                <div>my_list = my_list + ['add new item permanently']</div>
                                                <div>my_list</div>
                                            </td>
                                            <td>['one', 'two', 'three', 4, 5, 'add new item permanently']</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph_NI">We can also use the "*" for a duplication method similar to strings:</div>
                                    <table>
                                        <tr>
                                            <td>
                                                <div>my_list * 2</div>
                                                <div class="comment"># Again, doubling not permanent</div>
                                            </td>
                                            <td>['one', 'two', 'three', 4, 5, 'add new item permanently', 'one', 'two', 'three', 4, 5, 'add new item permanently']</td>
                                        </tr>
                                        <tr>
                                            <td>my_list</td>
                                            <td>['one', 'two', 'three', 4, 5, 'add new item permanently']</td>
                                        </tr>
                                    </table>
                                    <div class="tab_header">Basic List Methods</div>
                                    <div class="paragraph">Unlike arrays in other programming languages, lists in Python tend to be more flexible for two primary reasons: they have no fixed size (meaning we don't have to specify how long the list will be), and they have no limitations as to what data types can be stored.</div>
                                    <div class="paragraph_NI">We’ll explore some more special methods for lists:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Create a new list</div>
                                            <div>my_list = [1,2,3]</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">Use the <div class="bold">append</div> method to permanently add an item to the end of a list:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Append</div>
                                            <div class="multi">my_list.<div class="purp">append</div>(<div class="str">'append me!'</div>)</div>
                                            <div class="multi"><div class="purp">print</div>(my_list)</div>
                                        </div>
                                        <div class="output">
                                            <div>[1, 2, 3, 'append me!']</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">Use <div class="bold">pop</div> to "pop off" or take off an item from the list. By default pop takes off the last index, but you can also specify which index to pop off. Let's see an example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Pop off the 0 indexed item</div>
                                            <div>my_list.pop(0)</div>
                                            <div class="multi"><div class="purp">print</div>(my_list)</div>
                                            <div class="comment"># Assign the popped element, remember default popped index is -1</div>
                                            <div>popped_item = my_list.<div class="purp">pop</div>()</div>
                                            <div class="multi"><div class="purp">print</div>(popped_item)</div>
                                            <div class="comment"># Show remaining list</div>
                                            <div class="multi"><div class="purp">print</div>(my_list)</div>
                                        </div>
                                        <div class="output">
                                            <div>[2, 3, 'append me!']</div>
                                            <div>append me!</div>
                                            <div>[2, 3]</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">It should also be noted that lists indexing will return an error if there is no element at that index. For example:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div>my_list[100]</div>
                                        </div>
                                        <div class="output">
                                            <div>IndexError                                Traceback (most recent call last)</div>
                                            <div>{`<ipython-input-22-af6d2015fa1f> in <module>()`}</div>
                                            <div>{`----> 1 my_list[100]`}</div>
                                            <div>IndexError: list index out of range</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We can use the <div class="bold">sort</div> method and the <div class="bold">reverse</div> methods to also change your lists:</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi">letter_list = [<div class="str">'a'</div>,<div class="str">'e'</div>,<div class="str">'x'</div>,<div class="str">'b'</div>,<div class="str">'c'</div>]</div>
                                            <div class="multi"><div class="purp">print</div>(letter_list)</div>
                                            <div class="comment"># Use reverse to reverse order. This will permanently change your list. </div>
                                            <div>letter_list.reverse()</div>
                                            <div class="multi"><div class="purp">print</div>(letter_list)</div>
                                            <div class="comment"># Use sort to sort the list (in this case alphabetical order, but for numbers it will go in an ascending order (least to greatest))</div>
                                            <div>letter_list.sort()</div>
                                            <div class="multi"><div class="purp">print</div>(letter_list)</div>
                                        </div>
                                        <div class="output">
                                            <div>['a', 'e', 'x', 'b', 'c']</div>
                                            <div>['c', 'b', 'x', 'e', 'a']</div>
                                            <div>['a', 'b', 'c', 'e', 'x']</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Nesting Lists</div>
                                    <div class="paragraph">A great feature of Python data structures is that they support nesting which allows for data structures within data structures. For example: A list inside a list.</div>
                                    <div class="paragraph_NI">Let's see how this works!</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Let's make three lists</div>
                                            <div>list_1=[1,2,3]</div>
                                            <div>list_2=[4,5,6]</div>
                                            <div>list_3=[7,8,9]</div>
                                            <div class="comment"># Make a list of lists to form a matrix</div>
                                            <div>matrix = [list_1,list_2,list_3]</div>
                                            <div class="multi"><div class="purp">print</div>(matrix)</div>
                                        </div>
                                        <div class="output">
                                            <div>[[1, 2, 3], [4, 5, 6], [7, 8, 9]]</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">We can again use indexing to grab elements, but now there are two levels for the index. The items in the matrix object and then the items inside that list.</div>
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="comment"># Grab first item in matrix object</div>
                                            <div class="multi"><div class="purp">print</div>(matrix[0])</div>
                                            <div class="comment"># To Grab the first item of the first item in the matrix object you need to call the index of the indexed element</div>
                                            <div class="multi"><div class="purp">print</div>(matrix[0][0])</div>
                                        </div>
                                        <div class="output">
                                            <div>[1, 2, 3]</div>
                                            <div>1</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>list = [1,2,3,4,5,6,7]</div>
                                            <div class='multi'><div class='purp'>print</div>(list[3])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["3", "2", "5", "4"], 
                                              rightAnswer:"4"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following statements is true about lists?",
                                                FindAnswer:["Lists cannot contain multiple data types", "There are only a certain number of items that can be stored in a list", "Items in lists are ordered by index positions", "Lists are immutable"], 
                                                rightAnswer:"Items in lists are ordered by index positions"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How can you add an item to the end of a list?",
                                                FindAnswer:[ "append", ".append()", ".append", ".pop()"], 
                                                rightAnswer:".append()"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Create a list that has 4 different data types. Then, remove the third item in the list and replace it with the string ‘I replaced this!’.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson8?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson8;