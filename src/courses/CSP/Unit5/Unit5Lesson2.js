import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">Big Data</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">The amount of data that is getting created and being sent on the internet as well as getting stored is growing at a very rapid rate. These data sets are increasing more and more. Various devices nowadays store extremely high amounts of data. The scales at which we measure data have been changing rapidly, starting from kilobytes to gigabytes and more. Storing this data takes up a lot of space and can be challenging. But because data sets are getting extremely large now, there are more possibilities to analyze the data than when the data was smaller.</div>
                                    <div class="paragraph">You might wonder where all of these big bunches of data come from. Sometimes large data collections come from smaller sources, there are many people that use the internet so there are many individual people who provide data to the overall large system.</div>
                                    <div class="tab_header">Large Data and Scientific Research</div>
                                    <div class="paragraph">This data can be used for scientific research, things like satellites in the sky that work together and take pictures of the world constantly. This creates a lot of data that people can access to see pictures of the earth. Typically scientific research projects share the data they collect with others so people can see the data pieces together.</div>
                                    <div class="tab_header">Digital Libraries</div>
                                    <div class="paragraph">Digital libraries also contain a lot of data that can be quite large. Digital libraries contain various documents, pictures, and more about various times in history. They can include old documents or pictures of old historic events or more modern events in order to document all of history. These libraries store massive amounts of data because of this. They also keep many copies of this data so they don’t lose any pieces of the data if one storage space shuts down.</div>
                                    <div class="tab_header">Medical Records</div>
                                    <div class="paragraph">Medical records are another great example of where a lot of data gets stored as many people have their health information and result from testing stored under their name. The records have images from surgeries and records for all health-related visits so that they can be referenced by medical professionals in the future. This, of course, requires a lot of storage as there are many people who go to various medical facilities.</div>
                                    <div class="tab_header">User-Based Applications</div>
                                    <div class="paragraph">Finally, there are user-based applications. Applications that have many users collect data about their users to see what the users are doing and store their data.</div>
                                    <div class="tab_header">Storing The Data</div>
                                    <div class="paragraph">So how exactly is all of this large amount of data getting stored? Well, there are 2 things that are considered when storing data, first how the data is stored, and second, can the data be processed well.</div>
                                    <div class="paragraph">Our computers these days typically store data in gigabytes and sometimes in terabytes which is plenty for one user. But when you're storing data for a lot of devices and taking in so much more data, terabytes' worth of data might not be enough. So to combat this, hard drives can be connected together to form a disk array where more data can get stored on the system. You can add as many disks onto a disk array to increase the space the system can hold. This will take up a lot of space and typically big corporations have rooms dedicated to computer storage. These rooms tend to be climate controlled as the many drives produce a lot of heat.</div>
                                    <div class="paragraph">When storing data, you also have to consider how long it will take to process when storing it, so you have to decide whether it's better to store all the data of a set on one drive or split it across multiple drives. If you had an algorithm that sorts through all posts on a blog website, it could take a really long time to search through millions of blog posts to organize the content. So you could either create a better algorithm or use parallel computing in which the algorithm can solve the program at hand much faster. The work can be split across many machines and then the processing time will decrease.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following is an example of where massive amounts of data can be present?",
                                              FindAnswer:["Scientific Research", "Digital Libraries", "Medical Records", "All of the Above"], 
                                              rightAnswer:"March 2013"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What are things that are considered when storing large amounts of data?",
                                                FindAnswer:[ "How is the data stored and can it be processed well?", "Does the data get stored in binary?", "Is the data encrypted?", "None of the above"], 
                                                rightAnswer:"How is the data stored and can it be processed well?"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is done with a bunch of hard drives to make larger storage spaces to store large amounts of data?",
                                                FindAnswer:[ "Hard drives can be connected to form a disk array where more data can get stored on the system", "You can’t do much with a bunch of hard drives to store data, only one hard drive can store data at a time", "They can solve complex algorithms", "They allow for faster encryption of a computer when connecting to the internet"], 
                                                rightAnswer:"Hard drives can be connected to form a disk array where more data can get stored on the system"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How can processing time be decreased?",
                                                FindAnswer:[ "Use parallel computing in which the algorithm can solve the program at hand much faster", "The work can be split across many machines and then the processing time will decrease", "All of the above", "None of the above"], 
                                                rightAnswer:"All of the above"
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

export default Unit5Lesson2;