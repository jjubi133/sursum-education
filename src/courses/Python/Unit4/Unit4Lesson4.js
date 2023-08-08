import React from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit4Lesson4 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/d7saYjsSvl8?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">List Comprehensions</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">
                                    In addition to sequence operations and list methods, Python includes a more advanced operation called a list comprehension. In this supplemental, you'll learn about list comprehension and what they allow you to do to lists in Python.
                                    </div>
                                    <div class="paragraph">
                                    The primary functionality of list comprehensions is that they allow you to build upon pre-existing lists.                                     
                                    </div>
                                    <div class="paragraph_NI">You can think of it as essentially a one line for loop built inside of brackets. Confused? Let's take a look an example:</div>
                                   
                                    <div class="tab_header">Example 1</div>
                                    <div class = "code_block">
                                    <div class="input">
                                            <div class="comment"># Grab every letter in string</div>
                                            <div class="multi">lst = [x <div class='blue'>for</div> x <div class='blue'>in</div> <div class="str">'hello'</div>]</div>

                                            <div class="comment"># Check</div>
                                            <div class="multi"><div class='purp'>print</div>(lst)</div>                                        
                                    </div>
                                    <div class="output">
                                            <div>['h', 'e', 'l', l', 'o']</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">
                                        This is the basic idea of a list comprehension. Let's see a few more examples of list comprehensions in Python: 
                                    </div>
                                    <div class="tab_header">Example 2</div>
                                    <div class = "code_block">
                                    <div class="input">
                                            <div class="comment"># Square numbers in range and turn into list</div>
                                            <div class="multi">lst = [x**2 <div class='blue'>for</div> x <div class='blue'>in</div> <div class='gre'>range</div>(0,11)]</div>

                                            <div class="comment"># Check</div>
                                            <div class="multi"><div class='purp'>print</div>(lst)</div>                                     
                                    </div>
                                    <div class="output">
                                            <div>[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</div>
                                        </div>
                                    </div>


                                    <div class="tab_header">Example 3</div>
                                    <div class="paragraph_NI">
                                    Let's see how to add in if statements:   

                                    <div class = "code_block">
                                    <div class="input">
                                            <div class="comment"># Check for even numbers in a range</div>
                                            <div class="multi">lst =  [x <div class='blue'>for</div> x <div class='blue'>in</div> <div class='gre'>range</div>(11) <div class='blue'>if</div> x % 2 == 0]</div>

                                            <div class="comment"># Check</div>
                                            <div class="multi"><div class='purp'>print</div>(lst)</div>                                         
                                    </div>
                                    <div class="output">
                                            <div> [0, 2, 4, 6, 8, 10]</div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class="tab_header">Example 4</div>
                                    <div class="paragraph_NI">
                                    Can also do more complicated arithmetic:
                                    </div>
                                    <div class = "code_block">
                                    <div class="input">
                                            <div class="comment"># Convert Celsius to Fahrenheit</div>
                                            <div class="multi">celsius = [0,10,20.1,34.5]</div>
                                            <div class="multi">fahrenheit = [((9/5)*temp + 32) <div class='blue'>for</div> temp <div class='blue'>in</div> celsius]</div>


                                            <div class="comment"># Check</div>
                                            <div class="multi"><div class='purp'>print</div>(fahrenheit)</div>                                          
                                    </div>
                                    <div class="output">
                                            <div>[32.0, 50.0, 68.18, 94.1]</div>
                                        </div>
                                    </div>


                                    <div class="tab_header">Example 5</div>
                                    <div class="paragraph_NI">
                                    We can also perform nested list comprehensions, for example:
                                    </div>
                                    <div class = "code_block">
                                    <div class="input">
                                            <div class="multi">lst = [ x**2 <div class='blue'>for</div> x <div class='blue'>in</div> [x**2 <div class='blue'>for</div> x <div class='blue'>in</div> <div class='gre'>range</div>(11)]]</div>
                                            <div class="multi"><div class='purp'>print</div>(lst)</div>                                        
                                    </div>
                                    <div class="output">
                                            <div>[0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561, 10000]</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">
                                    You should now feel comfortable reading and writing basic list comprehensions.
                                    </div>
                                </div>
                                
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">There is no assignment for this lesson.</div>
                                    <div class = "paragraph_NI">Feel free to play around with code!</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit4Lesson4?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit4Lesson4;