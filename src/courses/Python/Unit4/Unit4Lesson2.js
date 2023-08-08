import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit4Lesson2 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/subY_QcWGSw?start=8" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">For Loops</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">for Loops</div>
                                    <div class="paragraph">A for loop acts as an iterator in Python; it goes through items that are in a sequence or any other iterable item. Objects that we've learned about that we can iterate over include strings, lists, tuples, and even built-in iterables for dictionaries, such as keys or values.</div>
                                    <div class="paragraph_NI">Here's the general format for a for loop in Python:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> item <div class="blue">in</div> object:</div>
                                            <div class="comment in_1"># '''statements to do stuff'''</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">The variable name used for the item is completely up to the coder, so use your best judgment for choosing a name that makes sense and you will be able to understand when revisiting your code. This item name can then be referenced inside your loop, for example if you wanted to use if statements to perform checks.</div>
                                    <div class="paragraph">Let's go ahead and work through several examples of for loops using a variety of data object types.</div>
                                    <div class="tab_header">Example 1</div>
                                    <div class="paragraph_NI">Iterating through a list:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class = "comment"># We'll learn how to automate this sort of list in the next lecture</div>
                                            <div>list1 = [1,2,3,4,5,6,7,8,9,10]</div>
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1"><div class="purp">print</div>(num)</div>
                                        </div>
                                        <div class="output">
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                            <div>6</div>
                                            <div>7</div>
                                            <div>8</div>
                                            <div>9</div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">Now let's add an if statement to check for even numbers.</div>
                                    <div class="tab_header">Modulo</div>
                                    <div class="paragraph">The modulo allows us to get the remainder in a division and uses the % symbol. For example:</div>
                                    <div class="paragraph">17 % 5 = 2</div>
                                    <div class="paragraph">This makes sense since 17 divided by 5 is 3 remainder 2. Let's see a few more quick examples:</div>
                                    <div class="list">
                                        <ul>
                                            <li>10 % 3 = 1 (3 Remainder 1)</li>
                                            <li>18 % 7 = 4 (2 Remainder 4)</li>
                                            <li>4 % 2 = 0 (2 no remainder)</li>
                                        </ul>
                                    </div>
                                    <div class="paragraph">Notice that if a number is fully divisible with no remainder, the result of the modulo call is 0. We can use this to test for even numbers, since if a number modulo 2 is equal to 0, that means it is an even number.</div>
                                    <div class="tab_header">Example 2</div>
                                    <div class="paragraph_NI">Let's print only the even numbers from that list.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1 multi"><div class="blue">if</div> num % 2 == 0:</div>
                                            <div class="in_2"><div class="purp">print</div>(num)</div>
                                        </div>
                                        <div class="output">
                                            <div>2</div>
                                            <div>4</div>
                                            <div>6</div>
                                            <div>8</div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We could have also put an else statement in there:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1 multi"><div class="blue">if</div> num % 2 == 0:</div>
                                            <div class="in_2"><div class="purp">print</div>(num)</div>
                                            <div class="in_1 multi"><div class="blue">else</div>:</div>
                                            <div class="in_2"><div class="purp">print</div>(<div class='str'>'Odd number'</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>Odd number</div>
                                            <div>2</div>
                                            <div>Odd number</div>
                                            <div>4</div>
                                            <div>Odd number</div>
                                            <div>6</div>
                                            <div>Odd number</div>
                                            <div>8</div>
                                            <div>Odd number</div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Example 3</div>
                                    <div class="paragraph">Another common idea during a for loop is keeping some sort of running tally during multiple loops. For example, let's create a for loop that sums up the list:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Start sum at zero</div>
                                            <div>list_sum = 0</div>
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1">list_sum = list_sum + num</div>
                                            <div class="multi in_1"  ><div class="purp">print</div>(list_sum)</div>
                                        </div>
                                        <div class="output">
                                            <div>55</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">Read over the above cell and make sure you understand fully what is going on. Also, we could have implemented a += to perform the addition towards the sum. For example:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Start sum at zero</div>
                                            <div>list_sum = 0</div>
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1">list_sum += num</div>
                                            <div class="multi in_1"><div class="purp">print</div>(list_sum)</div>
                                        </div>
                                        <div class="output">
                                            <div>55</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Example 4</div>
                                    <div class="paragraph">We've used for loops with lists, how about with strings? Remember strings are a sequence so when we iterate through them we will be accessing each item in that string.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>list_sum = 0</div>
                                            <div class="multi"><div class="blue">for</div> letter <div class="blue">in</div> <div class="str">'This is a string.'</div>:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(letter)</div>
                                        </div>
                                        <div class="output">
                                            <div>T</div>
                                            <div>h</div>
                                            <div>i</div>
                                            <div>s</div>
                                            <br></br>
                                            <div>i</div>
                                            <div>s</div>
                                            <br></br>
                                            <div>a</div>
                                            <br></br>
                                            <div>s</div>
                                            <div>t</div>
                                            <div>r</div>
                                            <div>i</div>
                                            <div>n</div>
                                            <div>g</div>
                                            <div>.</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Example 5</div>
                                    <div class="paragraph_NI">Let's now look at how a for loop can be used with a tuple:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>tup = (1,2,3,4,5)</div>
                                            <div class="multi"><div class="blue">for</div> t <div class="blue">in</div> tup:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(t)</div>
                                        </div>
                                        <div class="output">
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                        </div>
                                    </div>
                                    <div class="tab_header">Example 6</div>
                                    <div class="paragraph">Tuples have a special quality when it comes to for loops. If you are iterating through a sequence that contains tuples, the item can actually be the tuple itself, this is an example of tuple unpacking. During the for loop we will be unpacking the tuple inside of a sequence and we can access the individual items inside that tuple!</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>list2 = [(2,4),(6,8),(10,12)]</div>
                                            <div class="multi"><div class="blue">for</div> tup <div class="blue">in</div> list2:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(t)</div>
                                        </div>
                                        <div class="output">
                                            <div>(2,4)</div>
                                            <div>(6,8)</div>
                                            <div>(10,12)</div>
                                        </div>
                                        <div class="input">
                                            <div class="comment"># Now with unpacking!</div>
                                            <div>list2 = [(2,4),(6,8),(10,12)]</div>
                                            <div class="multi"><div class="blue">for</div> (t1,t2) <div class="blue">in</div> list2:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(t1)</div>
                                        </div>
                                        <div class="output">
                                            <div>2</div>
                                            <div>6</div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">With tuples in a sequence we can access the items inside of them through unpacking. The reason this is important is because many objects will deliver their iterables through tuples. We’ll now explore iterating through Dictionaries.</div>
                                    <div class="tab_header">Example 7</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>d = {`{`}<div class='str'>'k1'</div>:1,<div class='str'>'k2'</div>:2,<div class='str'>'k3'</div>:3{`}`}</div>
                                            <div class="multi"><div class="blue">for</div> item <div class="blue">in</div> d:</div>
                                            <div class="multi in_1"><div class="purp">print</div>(item)</div>
                                        </div>
                                        <div class="output">
                                            <div>k1</div>
                                            <div>k2</div>
                                            <div>k3</div>
                                        </div>
                                    </div>
                                    <div class="paragraph multi">Notice how this produces only the keys. So how can we get the values, or both the keys and the values? We're going to introduce three new Dictionary methods: <div class="bold">.keys()</div>, <div class="bold">.values()</div> and <div class="bold">.items()</div></div>
                                    <div class="paragraph">In Python each of these methods return a dictionary view object. It supports operations like membership test and iteration, but its contents are not independent of the original dictionary – it is only a view. Let's see it in action:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div>{`d = {'k1':1,'k2':2,'k3':3}`}</div>
                                            <div class="comment"># Create a dictionary view object</div>
                                            <div>d.items()</div>
                                            <div>dict_items([(<div class='str'>'k1'</div>, 1), (<div class='str'>'k2'</div>, 2), (<div class='str'>'k3'</div>, 3)])</div>
                                            <div class="comment">'''Since the .items() method supports iteration, we can perform dictionary unpacking to separate keys and values just as we did in the previous examples.'''</div>
                                            <div class="comment"># Dictionary unpacking</div>
                                            <div class="multi"><div class="blue">for</div> k,v <div class="blue">in</div> d.<div class="purp">items</div>():</div>
                                            <div class="multi in_1"><div class="purp">print</div>(k)</div>
                                            <div class="multi in_1"><div class="purp">print</div>(v)</div>
                                        </div>
                                        <div class="output">
                                            <div>k1</div>
                                            <div>1</div>
                                            <div>k2</div>
                                            <div>2</div>
                                            <div>k3</div>
                                            <div>3</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">If you want to obtain a true list of keys, values, or key/value tuples, you can cast the view as a list:</div>
                                    <div class="paragraph">list(d.keys())</div>
                                    <div class="paragraph">['k1', 'k2', 'k3']</div>
                                    <div class="paragraph">Remember that dictionaries are unordered, and that keys and values come back in arbitrary order. You can obtain a sorted list using sorted():</div>
                                    <div class="paragraph">sorted(d.values())</div>
                                    <div class="paragraph">[1, 2, 3]</div>
                                    <div class="tab_header">Conclusion</div>
                                    <div class="paragraph">We've learned how to use for loops to iterate through tuples, lists, strings, and dictionaries. It will be an important tool for us, so make sure you know it well and understand the above examples.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> x <div class="blue">in</div> <div class='gre'>range</div>(1,9,2):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the following?",
                                              FindAnswer:["1 3 5 7", "1 2", "1 3 5 7 9", "2 1"], 
                                              rightAnswer:"1 3 5 7"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which is a true statement about for loops?",
                                                FindAnswer:["for loops can go on forever until a particular condition is met, then the for loop will stop", "for loops are used to iterate through items in Python", "for loops cannot have other loops within them as it would cause errors", "for loops have an else loops much like an if statement that runs once a for loops terminates suddenly"], 
                                                rightAnswer:"for loops are used to iterate through items in Python"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> x <div class="blue">in</div> <div class='gre'>range</div>(1, 10):</div>
                                            <div class="multi in_1"><div class="blue">for</div> y <div class="blue">in</div> <div class='gre'>range</div>(3,5):</div>
                                            <div class="multi in_2"><div class="blue">if</div> x%y == 0:</div>
                                            <div class="multi in_3"><div class="purp">print</div>(x)</div>
                                            <div class="blue in_3"><div class="blue">break</div></div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the following?",
                                                FindAnswer:[ "3 4 5 6 8 9", "3 4 6 8 9 10", "3 4 6 8 9", "1 3 5 7"], 
                                                rightAnswer:"3 4 6 8 9"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create a program that takes only the words that start with the letter ‘a’ in the following sentence: sentence = ‘Apples and oranges are often used to compare differences, a classic idiom’ (*Hint = you will use a for loop, .split(), and an if statement*)</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit4Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit4Lesson2;