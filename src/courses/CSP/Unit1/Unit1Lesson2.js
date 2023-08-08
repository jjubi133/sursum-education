import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit1Lesson2 extends React.Component {
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
                        <div class = "lesson_title grow">Storing text in binary also converting to binary</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">Storing text in binary</div>
                                    <div class="paragraph">Computers have the potential to store more than simply numbers, we can also store text in binary. We simply have to encode letters in binary that will represent the various characters of the alphabet so let's take a look at this.</div>
                                    <div class="paragraph">We can simply define various symbols like a = 01 or b = 10.</div>
                                    <div class="paragraph">This is what is known as HPE encoding. So if we wanted to display the letter a, it needs to know the HPE encoding and the binary value of the letter. Because programs need to store many characters, programs typically string each character encoding together which is why programs typically create a program called msg.hpe. Then the computer has another program that understands the msg.hpe file to print various characters.</div>
                                    <div class="paragraph">Another method to convert text into binary is with Ascii encoding. Each ASCII character is encoded in binary with 7 bits. The column heading indicates the first 3 bits and the row heading indicates the final 4 bits. The very first character is "NUL", encoded as 0000000. It was usually used by more telegraphs and the first few characters represent various functions that move you to the next line of text etc. Then the other 96 Ascii characters are recognizable such as the letter A which is equal to 1000001 in binary and the letter B which is equal to 1000010 in binary.</div>
                                    <div class='paragraph'>The problem with Ascii is that it only has a certain few symbols represented, there are no accented letters. Also because Ascii uses 7-bit encoding but then computers use 8-bit encoding it can waste computer memory.</div>
                                    <div class="paragraph">Unicode and UTF-8 encompass more of these characters and are more memory efficient. Unicode is simply a character set and not an encoding format. It simply defines various symbols and emojis.</div>
                                    <div class="paragraph">UTF-8 fixes this as it is compatible with Ascii but fixes the memory problems of Ascii. Most programming languages these days have UTC-8 built-in which is very convenient for programmers.</div>

                                    <div class="tab_header">Converting data to binary</div>
                                    <div class="paragraph">When we think about data that is present in the real world, there's so much information that can be represented. This can be a problem when we want to convert real-world data into computer data which is limited. There are just so many small pieces of information that can be included in the real world that won’t entirely fit in computer data. So how might we store real-world data in the format of computer data? The answer is sampling.
</div>

                                    <div class="tab_header">Sampling data</div>
                                    <div class="paragraph">Let's take a look at sound to see how we can represent it in computer data form through the usage of sampling.</div>
                                    <div class="paragraph">When we are sampling data, we first have to consider time as one of our variables as sound is continuous. Sound changes of pitch over time so we must collect data about time and associate it with a certain pitch.</div>
                                    <div class="paragraph">Now when we are considering the sound graph, we mark down certain points of the curve. We do this by making intervals of a certain time and then determining the pitch of sound at that point then moving on to the next time interval and checking the pitch at that point in time.</div>
                                    <div class="paragraph">Slicing the data points of the sound into intervals gets rid of the infinite amount of data points present and makes them more manageable and countable.</div>
                                    <div class="paragraph">This allows us now to create a bunch of points on a graph where the first number on the point represents the time of the certain sound and the 2nd number of the point represents the pitch of the sound at that certain time. It is important to know that the pitch value is only as accurate as the computer can make it and it will round off some of the sound values.</div>
                                    <div class="paragraph">The inverse of the sample interval is the sample rate which is measured in samples per second usually. Music recordings tend to be 48khz which stands for kilohertz meaning that it's 48000 samples per second. It's best if the samples per second are 2 times higher than than the highest frequency value and because we can hear up to about 20khz music recordings are roughly 48khz. Phone calls tend to be around 8hz because 4 kHz tends to be the highest frequency.</div>

                                    <div class="paragraph">So now that we’ve completed sampling, we are just left with a bunch of points. This is where quantization comes into play. Quantization decreases the amplitude into discrete levels. We make the pitch of the sound a certain value that matches an interval to prevent a wide range of really complex numbers from appearing as the Y value or pitch.</div>
                                    <div class="paragraph">Quantization mainly depends on the limits of the computer, if the computer has the space to keep track of precise Y levels then a small quantization interval level could be used but if the computer doesn’t have space a larger interval number will be needed.</div>
                                </div>
                                <div class="paragraph">Finally, we have binary encoding which is the final step to convert data into binary format. We don’t need to store the exact value of the pitch of the sound of the Y value. So it is possible to store the value in a reduced format to represent the quantized y value. The computer will need a description of how the sample was recorded and then encoded so that it can be recreated on the computer. The computer will reconstruct the sound more smoothly to match the original sound graph. The more data the computer can take in, the closer it will become to the real thing.</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is an encoding method that can be used to store text in binary?",
                                              FindAnswer:["HPE Encoding", "Ascii", "Unicode/UTF-8", "All of the Above"], 
                                              rightAnswer:"All of the Above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What method is used from converting data to binary format?",
                                                FindAnswer:[ "Sampling", "Encoding", "Encryption", "None of the above"], 
                                                rightAnswer:"Sampling"
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

export default Unit1Lesson2;