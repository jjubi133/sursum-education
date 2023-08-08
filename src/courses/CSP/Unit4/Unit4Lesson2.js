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
                        <iframe src="https://www.youtube.com/embed/hDpmCXihL3s?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Solving Hard Problems</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class='paragraph'>Typically the computer science problems in which when the input size increases, there is a doubling in the number of steps required each time are the most difficult to solve. It can be easy to solve these problems if there are small inputs but the time it takes can increase exponentially meaning it can take years to solve such problems. So to solve these problems, computer scientists don’t find the perfect solution but rather the approximate solution. This can be done using a heuristic which is a method that allows an algorithm to find good choices in solutions instead of looking at every possible solution which means that it gives up some accuracy to actually solve the problem. So let's take a look at an example of heuristics.</div>
                                    <div class='tab_header'>Heuristics</div>
                                    <div class='paragraph'>The problem is known as the traveling salesperson problem where you're supposed to figure out the shortest possible route that visits each city and returns to the original city given a list of cities and their distances between each pair of cities. </div>
                                    <div class='paragraph'>The main reason this problem is difficult to solve with many inputs is that it's a combination based problem where the computer would have to try every single combination of each path between cities to find the shortest distance which is known as the brute force approach. This won’t take very long for a computer to solve if the inputs are small but increasing the inputs will cause the processing time to increase exponentially which can be problematic.</div>
                                    <div class='paragraph'>So let's see how we can solve this problem with heuristics. When you want to create a heuristic, you simply need to consider how you would solve the problem. We are better at finding shortcuts that are a good enough solution to a problem. This doesn’t waste time, but not all heuristics are equal as some can provide more accurate solutions and take less time.</div>
                                    <div class='paragraph'>A good heuristic for the problem above is known as the nearest neighbor heuristic in which the computer picks the nearest unvisited city as the next city path. Simply by doing this, we can figure out which route between cities is the fastest. Remember that this solution is an approximate and not the 100% correct solution. So many heuristics are developed to see what will get the closest to figuring out the perfect solution while also considering the time it will take to solve the problem.</div>
                                    <div class='tab_header'>Undecidable problems</div>
                                    <div class='paragraph'>There can be some problems that computers can’t solve as they would take all the time in the world to find the solution and they wouldn’t decide on it. So this leads us to an undecidable problem which is a problem that should give a yes or no output but no algorithm can do this correctly accounting for all inputs. Other undecidable problems are based on determining various attributes of input and output of programs. So the program can’t give a yes or no for all of the inputs. An example of this is an infinite loop. Programs can't determine if it's an infinite loop because it's undecidable. So the way to solve this is to create an approximate solution by timing to see how long the loop takes and if it takes longer than needed the code can stop.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What do computer scientists do if a problem would take a computer years to find the solution?",
                                              FindAnswer:["Computer scientists don’t find the perfect solution but rather the approximate solution", "Computer scientists move on and try to solve a similar problem", "Computer scientists improve the computer’s hardware so that the computer can solve problems faster", "Computer scientists try remaking the algorithm to solve the problem in a different method"], 
                                              rightAnswer:"Computer scientists don’t find the perfect solution but rather the approximate solution"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is a heuristic?",
                                                FindAnswer:[ "A method that speeds up the computer to allow for the computer to be able to solve problems faster", "A method that allows an algorithm to find good choices in solutions instead of looking at every possible solution", "A method that allows an algorithm to only use a few inputs to get a solution at a faster speed", "None of the above"], 
                                                rightAnswer:"A method that allows an algorithm to find good choices in solutions instead of looking at every possible solution"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What makes a problem an unsolvable problem for a computer?",
                                                FindAnswer:[ "When a problem that should give a yes or no output but no algorithm can do this correctly while still using all inputs", "If it takes more than a year for the computer to solve the problem", "All of the above", "None of the above"], 
                                                rightAnswer:"When a problem that should give a yes or no output but no algorithm can do this correctly while still using all inputs"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What's an example of an unsolvable problem for a computer?",
                                                FindAnswer:[ "Sorting and searching databases with algorithms", "Extremely advanced mathematics", "Graph algorithms", "An infinite loop"], 
                                                rightAnswer:"An infinite loop"
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

export default Unit4Lesson2;