import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit4Lesson3 extends React.Component {
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
                        <div class = "lesson_title grow">Parallel and Distributed Computing</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Parallel Computing</div>
                                    <div class="paragraph">A useful method to use to speed up certain kinds of algorithms is using parallel computing where the algorithm will be run across many processors at the same time. Normally when solving a problem, the computer solves it based on sequential computing where the computer executes each operation within the program in order one at a time. </div>
                                    <div class="paragraph">This typically would have to be the main way a computer that only has a single processor could solve problems, doing steps one at a time. But nowadays, most computers are multi-core processors where each core of the processor can run an operation on their own. So to make parallel computing possible, the program needs to be based in a sequential order that can be performed parallel and the operations are not dependent on each other meaning that one operation has to run to execute another.</div>
                                    <div class="paragraph">So a good way to determine if there are benefits between running a program using paralyzation and sequential execution is to measure the speedup which is the ratio of time that it takes to run the program in order vs the ratio of running it in parallel. But sometimes the execution times can vary because the segments of the program might not take the same amount of time to process especially if they deal with program input. The main objective of parallel computing is to improve the efficiency of solving problems. When you want to run tasks in parallel, the program detects how many threads your computer has so that it can run various operations at the same time. Then the number of tasks is considered because having more tasks to run can cause your computer to do more work. So to calculate the efficiency of running in parallel, we need to take the time of running the program in order one by one versus running the program in a parallel format to determine the speedup.</div>
                                    <div class="tab_header">Computer performance</div>
                                    <div class="paragraph">There are many things in your computer that can affect how well and how long it performs the various operations that a program might assign it so let's take a look at these factors.</div>
                                    <div class="paragraph">The first factor is Hyperthreading. Your computer might mention that it can run 4 threads while the computer might in reality have only 2 cores. This technology is known as hyperthreading which was created by Intel to allow one CPU core to run 2 threads at the same time. Because Intel makes a lot of computer CPUs, there's a good chance your computer has hyperthreading. Hyperthreading works well if the 2 threads are doing different kinds of operations but doing the same tasks and hyperthreading can’t speed the operations much.</div>
                                    <div class="paragraph">Another factor that can affect how fast your computer performs operations is other CPU tasks and activities. When you're online in a web browser, your CPU has to run other processes meaning there isn’t as much computer power available. Computers can run hundreds of activities at once which might be confusing because you were told cores can only do one application at a time. In reality, the computer switches between these processes so fast that humans won’t notice.</div>
                                    <div class="paragraph">The next factor is the User interface updates. When web pages need to generate many things on screen and constantly changing items, then the CPU will use more processing power to calculate what should be displayed which can slow down your computer.</div>
                                    <div class="paragraph">So what are some ways we can improve the speed that our computer completes various operations? Well, some things that we can do is improve your hardware meaning that you get a CPU with many cores so that it can complete many tasks and run operations in parallel. Next, you can run programs on a dedicated machine that won’t have many minor system processes running in the background so the computer dedicates more resources to the task at hand. Finally, you can run the program in the command line to get rid of the need for graphical user interfaces which can allow computer usage to go up.</div>
                                    <div class="tab_header">Distributed computing</div>
                                    <div class="paragraph">It can also solve various problems not with just one computer, but with multiple which is known as distributed computing allowing operations to be solved across many devices on one network. This is similar to parallel computing but in this system, we are using many devices to compute these tasks. Because many computers can now solve problems at the same time, this increases the performance and speed at which solutions are found making it possible to solve difficult problems faster. </div>
                                    <div class="paragraph">One of the problems of this system is that because the computers are all connected to each other, this means they have to talk to each other over the network to send data to each other which takes time. A fix to this is by using computer cluster computing which is where computers are on the same network and work on the same tasks, data doesn't have to travel far and it doesn’t have to travel over the internet meaning that there will be a decrease in processing time. But computer clusters take up a lot of space and can be very expensive. But nowadays, companies provide cloud computers where programmers can access the clusters and do work.</div>
                                    <div class="paragraph">Another way distributed computers can be used is by using various devices to complete various functions. An example of this would be a home security system with many cameras and sensors, these devices are great at showing if someone is present and it can send this data to a cluster which can determine if there are certain people present in a house. Each of the devices does something specific really well and together the system can determine who is in the house.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a useful method that can be used to speed up algorithms?",
                                              FindAnswer:["Parallel computing where the algorithm will be run across many processors at the same time", "Running many applications at once to allow the computer to complete them at the same time", "Adding extra pieces of code that might not help the algorithm solve the problem", "None of the above"], 
                                              rightAnswer:"Parallel computing where the algorithm will be run across many processors at the same time"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the speedup?",
                                                FindAnswer:[ "The speed that it takes for a packet to get sent from the sender to the receiver", "The ratio of time that it takes to run the program in order vs the time of running it in parallel", "The amount of time that it takes for a connection to be established between 2 computers", "The amount of time that it takes for the packet to get encrypted before getting sent to the receiver"], 
                                                rightAnswer:"The ratio of time that it takes to run the program in order vs the time of running it in parallel"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What are some things that can affect your system’s performance when computing various actions?",
                                                FindAnswer:[ "Hyperthreading", "Other CPU Tasks and activities", "User interface updates", "All of the above"], 
                                                rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which of the following is not a way we can improve the speed that our system performs tasks?",
                                                FindAnswer:[ "Getting better hardware", "Running programs on a dedicated machine so there aren’t many other side CPU tasks and activities", "Running a command or program in the command line to get rid of user interfaces that might use up computer power", "Running many applications on your computer at once so that the computer can easily complete tasks for each of the applications at the same time"], 
                                                rightAnswer:"Running many applications on your computer at once so that the computer can easily complete tasks for each of the applications at the same time"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is distributed computing?",
                                                FindAnswer:[ "When you allow operations to be solved on multiple devices on one network", "When you allow the computer to run many operations at the same time", "When you allow 2 computers to establish a proper connection to send information to each other", "None of the above"], 
                                                rightAnswer:"When you allow operations to be solved on multiple devices on one network"
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

export default Unit4Lesson3;