import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson5 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/vHZGuvPOX1Q?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Indexing and Slicing with Strings</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">String Indexing</div>
                                    <div class="paragraph">From our previous lesson, we learned about Strings and the different nuances that we need to be aware of. One thing about Strings which we can utilize is the fact that Strings are a sequence. This means that the characters which make up a String are in a specific order. Think about your own name. Your own name is a sequence of characters that remains constant. If you were asked what the first letter of your name is, you’d be able to give an answer because the first letter of your name is part of a sequence that does not change. Because Strings are a sequence, we can use indexing to call (get) certain parts of a String.</div>
                                    <div class="paragraph">In Python, we use brackets [] after an object to call its index. It’s important to note that indexing starts at 0 for Python meaning that the first character of a sequence isn’t indicated by the value 1 but by the value 0. So if you wanted to grab the first letter of your own name by indexing, you’d grab index 0 since that is the position of the first letter. This concept is referred to as index position and it is extremely important so let’s go through one example of index positions.</div>
                                    <table>
                                        <tr>
                                            <td>H</td>
                                            <td>E</td>
                                            <td>L</td>
                                            <td>L</td>
                                            <td>O</td>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                        </tr>
                                    </table>
                                    <div class="paragraph">If someone were to ask you the numeric position of the last letter of the word “Hello” you'd say that it would be the 5th letter in the word. Now what if you wanted to grab that letter? Well, you’d probably tell someone to grab the 5th letter of Hello to get the last letter and if they were to follow your instructions they would have the letter “o”.</div>
                                    <div class="paragraph">But how would you do this in Python? If you wanted to grab the last letter of the word “Hello” in Python you would index at position 4 rather than 5. This is because the index position of the last letter in the word “Hello” is index position 4. Remember, index positions start with the number 0. So the first character of a string is always index position 0 and the following character 1 then 2 and so on.</div>
                                    <div class="paragraph">If you’re still confused, let’s look at some indexing examples to drive the point home.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Print the object</div>
                                            <div class="multi">b = <div class="str">‘Hello World’</div></div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">Let's start indexing.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Show first element (in this case a letter)</div>
                                            <div class="multi"><div class="purp">print</div>(b[0])</div>
                                            <div class="multi"><div class="purp">print</div>(b[1])</div>
                                            <div class="multi"><div class="purp">print</div>(b[2])</div>
                                        </div>
                                        <div class="output">
                                            <div>H</div>
                                            <div>e</div>
                                            <div>l</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We can use a ":" to perform slicing which grabs entire sections of Strings up to a designated point. </div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Grab everything past the first term all the way to the length of b which is len(b)</div>
                                            <div class="multi"><div class="purp">print</div>(b[1:])</div>
                                            <div class="comment"># Note that there is no change to the original b</div>
                                            <div class="multi"><div class="purp">print</div>(b)</div>
                                            <div class="comment"># Grab everything UP TO but not including the 3rd index</div>
                                            <div class="multi"><div class="purp">print</div>(b[:3])</div>
                                        </div>
                                        <div class="output">
                                            <div>ello World</div>
                                            <div>Hello World</div>
                                            <div>Hel</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">What is going on with the slicing example above? Here we're telling Python to grab everything from 0 up to 3 but not including that 3rd index.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Everything</div>
                                            <div class="multi"><div class="purp">print</div>(b[:])</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World</div>
                                        </div>
                                    </div>
                                    <div class="paragraph_NI">We can also use negative indexing to go backwards.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Last letter (one index behind 0 so it loops back around)</div>
                                            <div class="multi"><div class="purp">print</div>(b[-1])</div>
                                            <div class="comment"># Grab everything but the last letter</div>
                                            <div class="multi"><div class="purp">print</div>(b[:-1])</div>
                                        </div>
                                        <div class="output">
                                            <div>d</div>
                                            <div>Hello Worl</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">We can also use index and slice notation to grab elements of a sequence by a specified step size. A step size is the way Python goes through the characters of a String. The default step size is 1 which makes sense since Python reads every character in a string one after the other. However, if it were a step size of two, Python would only read characters that are 2 positions away from the last character. Let’s take a look at an example to clarify this.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="comment"># Grab everything, but go in steps size of 1</div>
                                            <div class="multi"><div class="purp">print</div>(b[::1])</div>
                                            <div class="comment"># Grab everything, but go in step sizes of 2</div>
                                            <div class="multi"><div class="purp">print</div>(b[::2])</div>
                                            <div class="comment"># We can use this to print a string backwards</div>
                                            <div class="multi"><div class="purp">print</div>(b[::-1])</div>
                                        </div>
                                        <div class="output">
                                            <div>Hello World</div>
                                            <div>HloWrd</div>
                                            <div>dlroW olleH</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>x = <div class='str'>‘abcdefg’</div></div>
                                            <div class='multi'><div class='purp'>print</div>(x[6])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["‘f’", "‘g’", "No output", "‘abcdef’"], 
                                              rightAnswer:"‘g’"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>word = <div class='str'>‘watermelonFruitCake’</div></div>
                                            <div class='multi'><div class='purp'>print</div>(word[:11])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["'watermelonF'", "‘watermelon’", "‘watermelonFruitCake’", "‘ruitCake’"], 
                                                rightAnswer:"'watermelonF'"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>word = <div class='str'>‘happyday’</div></div>
                                            <div class='multi'><div class='purp'>print</div>(word[2:6])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "‘appyd’", "‘appyda’", "‘ppyd’", "‘happyday’"], 
                                                rightAnswer:"‘ppyd’"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Create a variable and assign the string “Wow i’m going to eat icecream and iceberg lettuce”. Identify where the letter ‘i’ appears in the string and use indexing to output every ‘i’. Then slice the string so that only ‘icecream and iceberg’ are the output.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson5?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson5;