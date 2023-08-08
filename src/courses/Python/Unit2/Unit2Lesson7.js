import React, { Fragment } from "react";
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';
import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit2Lesson7 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/oFlU0bhEeto?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Print Formatting</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Print Formatting</div>
                                    <div class="paragraph">When using the print function in Python, you’ll often want to have flexibility to insert certain inputs into your statements. One of the ways we can do this is by using print formatting. Print formatting allows programmers to take liberties in inputting data into strings to have statements which are more fine tuned with what the programmers want outputted. There are a couple of ways to use print formatting so we’ll take a look at the first type. </div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class='purp'>print</div>(<div class='str'>‘print formatting {`{}`}’</div>.<div class='purp'>format</div>(<div class='str'>‘I inserted this here’</div>))</div>
                                        </div>
                                        <div class="output">
                                            <div>print formatting I inserted this here</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see from the example above, this is how you’d use print formatting. Start with a normal print statement followed by the string. Then, enter curly braces where you want your formatted statement to be. Outside of the quotations, put dot format and inside of parentheses, the string you wish to have formatted. </div>
                                    <div class='paragraph'>You can also have multiple strings formatted to a string. Take a look at the example below.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class='purp'>print</div>(<div class='str'>‘My {`{1} {0} {2}`}’</div>.<div class='purp'>format</div>(<div class='str'>‘grey’</div>, <div class='str'>‘tall’</div>, <div class='str'>‘hound’</div>))</div>
                                        </div>
                                        <div class="output">
                                            <div>My tall grey hound</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">This is another way you can have statements formatted. Because the statements inside of the dot format parentheses are indexed, that means that we can use the index position of the words and place them inside of the curly braces in order to format the words in the order we wish. We can also assign variables to our words and have the variable names placed inside of the curly braces to organize the string as seen in the example below. </div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class='purp'>print</div>(<div class='str'>‘My {`{t} {g} {h}`}’</div>.<div class='purp'>format</div>(<div class='str'>"g = <div class='str'>‘grey’</div>, t = <div class='str'>‘tall’</div>, h = <div class='str'>‘hound’</div>"</div>))</div>
                                        </div>
                                        <div class="output">
                                            <div>My tall grey hound</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Finally, you can also format your string in the following manner.</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class='multi'>color = <div class='str'>‘Blue’</div></div>
                                            <div class="multi"><div class='purp'>print</div>(<div class='str'>f’my favorite color is {`{color}`}’</div>)</div>
                                        </div>
                                        <div class="output">
                                            <div>my favorite color is Blue</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>This type of print formatting is called f-string literal. Rather than having the words we want to insert into a string in the same print statement, instead we declare them beforehand with variables and assign the variable wherever we want in the string by placing them in curly braces. </div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>‘I {`{} {}`}’</div>.<div class='purp'>format</div>(<div class='str'>‘love’</div>, <div class='str'>‘blue’</div>))</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["I love blue", "I blue love", "I {} {}.format", "I"], 
                                              rightAnswer:"I love blue"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>‘The {`{x} {y} {z}`}’</div>.<div class='purp'>format</div>(y = <div class='str'>‘barked’</div>, z = <div class='str'>‘loudly’</div>, x = <div class='str'>‘dog’</div>))</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:["The barked loudly dog", "The loudly barked dog", "The dog loudly barked", "The dog barked loudly"], 
                                                rightAnswer:"The dog barked loudly"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>product = 6/3</div>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>‘The value is {`{x}`}’</div>.<div class='purp'>format</div>(x=product))</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "2", "The value is x", "The value is 2", "The value is {x}.format()"], 
                                                rightAnswer:"The value is 2"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph">Use string formatting methods to output the phrase ‘I love to use print formatting in Python!’.</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit2Lesson7?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit2Lesson7;