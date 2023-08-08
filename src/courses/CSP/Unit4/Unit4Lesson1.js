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
                        <iframe src="https://www.youtube.com/embed/hDpmCXihL3s?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Creating and Understanding Algorithms</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Algorithms</div>
                                    <div class='paragraph'>So what exactly is an algorithm? Well, an algorithm simply refers to the process of solving a problem in a certain organized method that gives you the correct answer from the problem. The best algorithm is the one that solves a certain problem in the fastest way and some cases in the most efficient ways as well.</div>
                                    <div class='paragraph'>Programmings are always creating and using algorithms in their codes whether that's to solve a problem, make an array, and more. So by expanding our knowledge on algorithms, we can incorporate it in our code to allow for our algorithms to be more efficient being able to solve problems correctly and efficiently.</div>
                                    <div class='paragraph'>Algorithms have 3 main parts which are sequencing, then selection, and finally the iteration.</div>
                                    <div class="tab_header">Algorithm Process</div>
                                    <div class='paragraph'>Algorithms are based on a chronological process meaning the steps are ordered to allow the algorithm to correctly solve the problem.</div>
                                    <div class='paragraph'>For example, say if you wanted to duplicate any word and then add the letter V at the end of the words. Well, we can do this but if we were to reverse the order of these steps, we would get a completely different output which is why the sequencing of the algorithm is crucial for the problem to be solved.</div>
                                    <div class='paragraph'>Next is the selection in which the algorithm determines a different set of steps to run based on a boolean expression. This means that you check to see if a certain condition is true then run this but if it's not true, run this. So if we use our previous example, we can say if the word starts with the letter a, duplicate the word, but if not then skip this step and go to the next step to add a V at the end of the word.</div>
                                    <div class='paragraph'>Finally, there is the iteration step. This is part of the algorithm because typically Algorithms use repetition to run many steps for a certain number of times until a certain condition is met. So incorporating this for the previous example, we can add the condition that the algorithm should continue running all the steps for each word that is present in the set. This dictates the algorithm determining how many times it needs to run.</div>
                                    <div class="tab_header">Formats of Algorithms</div>
                                    <div class='paragraph'>There are many ways that algorithms can be expressed, whether it's natural language, pseudocode, flow charts, and actual programming languages.</div>
                                    <div class='paragraph'>Lets first begin by discussing algorithms in natural language, they are popular because they can easily convey the steps of the algorithm while making it easy to convey the information to people who may not know the programming language. But the problem is that it can be ambiguous sometimes and there is no solid structure to it.</div>
                                    <div class='paragraph'>Next, we can display algorithms in a flow chart format, essentially a diagram with boxes and arrows. Each of the rectangles represents a segment of the sequence and the arrows represent the flow of the algorithm from step to step. Various shapes in a flow chart can represent various functions that can be used to create an algorithm. Such as having a diamond represent a condition while a rectangle can represent a command. Each rectangle represents a step in the sequence, and the arrows flow from one step to the next. Flow charts can also depict the entire algorithm with the iterations. The arrows can show the direction of how the code should run and allow us to better section code.</div>
                                    <div class='paragraph'>Then we have pseudocode, in reality, most algorithms will become code that the computer can run. But before this, algorithms can be represented in pseudocode that is based on an actual programming language but it doesn’t get run. Pseudocode has no official standard and programmers create it differently, it simply allows programmers to display an algorithm in the form of actual code without worrying about syntax. Pseudocode is not constrained to one language but rather it simply can be read by any programmers so they can convert it into their language.</div>
                                    <div class='paragraph'>Finally, there is the actual programming language which is the final form an algorithm takes. We have planned out the algorithm with natural language, flowcharts, and pseudocode so now all of this information gets transferred into code. The code can be converted into any language.</div>
                                    <div class="tab_header">Finding problems in algorithms</div>
                                    <div class='paragraph'>Algorithms need to be correct to produce the needed output and allow for various inputs. So how might a programmer figure out if there are problems in an algorithm? Well, they would typically use empirical analysis but only formal reasoning can make sure an algorithm is accurate.</div>
                                    <div class='paragraph'>The empirical analysis is simply the action of performing actual experimentation and then viewing the results the algorithm produces. This means the algorithm must be in programming language format and they should run. You need to test the algorithm with multiple variants of inputs. So you would continue putting inputs for various kinds of inputs and if there is an error, you would modify the algorithm to fix the errors. There are many possibilities of input so it can take a while. Even if you do run a lot of various kinds of inputs, you might not get the expected output. You can’t prove that the algorithm is correct through empirical analysis.</div>
                                    <div class='paragraph'>So as we’ve said, the only way to prove that an algorithm is correct is through formal reasoning or mathematically which covers all possible inputs. One of these forms of reasoning is known as proof by induction which is used by mathematicians to prove various aspects of numerical sequences. A good way to think about this is with dominos. So if we knocked over dominos that are perfectly spaced, what will happen to the 100th domino. Well, we don’t have to check every domino we simply have to see what happens to the first domino and notice the pattern following the other dominos.</div>
                                    <div class='paragraph'>Algorithms need to be correct, producing correct output concerning the input. But it can also be important that the algorithm is efficient, meaning that it uses fewer computer resources or lines of code to run while also producing the right answer. We can determine the efficiency of an algorithm by counting how many operations it needs to get an answer.</div>
                                    <div class='paragraph'>The number of operations doesn’t specify the time it takes for the computer to run the algorithm. The time it takes to run an algorithm depends on the computer, programming language, and also the translation of language into machine code. But it can still be beneficial to know how long it can take for an algorithm to run as some operations can take a long time to run but running more operations that take little time can help with speed. Many algorithms can solve the same problem but with different efficiencies which is why measuring algorithm efficiency can matter a lot.</div>
                                    <div class='paragraph'>It can matter more because when a computer takes more time to solve a problem, it costs more resources and money which just wastes time. This can cause users to not like the program or application and just stop using it in general.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is an algorithm?",
                                              FindAnswer:["An algorithm simply refers to the process of solving a problem in a certain organized method that gives you the correct answer from the problem", "An advanced coding structure that can help programmers solve math problems", "Algorithms provide a guide for computers to complete certain tasks", "All of the above"], 
                                              rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following is not one of the 3 main parts of an algorithm?",
                                                FindAnswer:[ "Sequencing", "Selection", "Iteration", "connection"], 
                                                rightAnswer:"connection"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of these are ways algorithms can’t be represented",
                                                FindAnswer:[ "natural language", "Pseudocode", "flow charts", "hexadecimal"], 
                                                rightAnswer:"componentDidMount"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the purpose of Pseudocode?",
                                                FindAnswer:[ "It is the universal coding language agreed by all coders that allow for the testing of algorithms", "Pseudocode allows programmers to show algorithms while also taking into account syntax for coding languages.", "Pseudocode allows programmers to display an algorithm in the form of actual code but without worrying about the syntax of the code", "None of the above"], 
                                                rightAnswer:"Pseudocode allows programmers to display an algorithm in the form of actual code but without worrying about the syntax of the code"
                                            }
                                        }
                                    />
                                </Fragment> 
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

export default Unit4Lesson1;