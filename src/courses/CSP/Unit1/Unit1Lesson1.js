import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit1Lesson1 extends React.Component {
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
                        <div class = "lesson_title grow">Bits, Bytes and Binary</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">When talking about computers, you might think of images and various things that you might see on the screen. However, to a computer, all of these small pieces of information are all just binary which is represented by the numbers 0 and 1. All the information is stored in a data format that is solely based on these two numbers to create all the various images and things that we see on screen.
</div>
                                    <div class="tab_header">Binary in a computer</div>
                                    <div class="paragraph">As you might already know, computers have many electrical components that carry electrical systems throughout the system. Electricity is flowing through the wires so how might this be able to carry data?</div>
                                    <div class="paragraph">The current can be either on or off which is very simple but the foundation for information being passed throughout the computer’s system. When electricity is passing through and on this is related to 1 in binary, while if the electricity is not passing through it is 0 in binary. 1 and represent true and 0 and represent false. So with more wires and electrical connections, there is more possibility to transfer more information and more complex information.</div>
                                    <div class="paragraph">So now you might be wondering how we can count all the numbers in the binary number system. To answer this let's take a look at the decimal number system which we have all learned to count which has 10 different numbers from 0-9 which then can create all the numbers.</div>
                                    
                                    <div class="tab_header">Decimal Number System</div>
                                    <div class="paragraph">In the decimal number system, each number slot is 10x greater than the last slot as we start from the 1s place, then go to the 10s place, then 100s place, and so on. This system allows us to create all the numbers possible.</div>

                                    <div class="tab_header">Binary Number System</div>
                                    <div class="paragraph">With the binary number system, each number slot is 2x bigger than the last slot. So the first slot starts at the value 1, then the next slot is 2 times bigger meaning it is the 2s slots, then is the 4s spot, then the 8s spot, and so on. So the number above indicates that we have 1 eight, 1 four, 0 two, and 1 one meaning that this value is equal to 13.So when we have 8 wires, we can create 8 different binary outputs that are either 1 or 0 meaning that we can create a number from 0 to 255.</div>
                                    <div class="paragraph">Binary is also used to create data for text and images. With regards to the alphabet, each letter has a certain value like the letter a would be the value 1 and the letter z would be the value 26. Because these are numbers, we can represent these letters with binary associating a binary value with the value of a letter. This means that text can be stored as an electrical signal</div>

                                    <div class="tab_header">Images stored in binary</div>
                                    <div class="paragraph">Images also get stored as binary data because images are made up of very small individual points of color known as pixels. Think of pixels like small lights that make up a much larger image, we can control the color of the lights to make up this image using binary. This works because each pixel has a color and the color can be represented by numbers which can be converted into binary. Images have millions of pixels and videos are simply the combination of many images that play at a certain rate to make things on-screen appear to move so they contain lots of data.</div>

                                    <div class="tab_header">Sound storing in binary</div>
                                    <div class="paragraph">Sound is a wave that is based on vibration and can be represented graphically. Because of this, various points on the sound wave vibration graph can be associated with a number and therefore stored in binary data format on your computer which is how sound is stored. Higher quality sound will have a higher range of numbers used to categorize the points on the sound wave vibration graph.</div>
                                    <div class="paragraph">A bit refers to a unit that can either store information as a 1 or 0, true or false, or on or off. So we know that bits represent the smallest piece of information that we can use on a computer.</div>
                                    <div class="paragraph">So bytes simply refers to a collection of 8 bits. Bytes are present as a grouping because while computers process information is bit format, they store it in byte formatBytes are typically the smallest unit when talking about storing data on a computer. We will get to learn more information about this in future lessons.</div>

                                  
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Convert the following numbers from decimal values into binary values: 7, 36, 16, 54, 9",
                                              FindAnswer:["111, 100100, 10000, 110110, 1001", "001, 101010, 11000, 110101, 1101", "000, 101011, 10011, 010101, 0110", "110, 011000, 10110, 100000, 1000"], 
                                              rightAnswer:"111, 100100, 10000, 110110, 1001"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Convert the following numbers from binary values to decimal values: 101101, 101, 1100111, 111001, 11101",
                                                FindAnswer:[ "46, 2, 94, 27, 90", "23, 1, 73, 23, 70", "45, 5, 103, 57, 29", "36, 4, 150, 43, 89"], 
                                                rightAnswer:"45, 5, 103, 57, 29"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Explain how binary is used to create/store images",
                                                FindAnswer:[ "storing and creating images in binary is possible as the binary numbers can be arranged in a certain way to make a picture", "each pixel has a color and the color can be represented by numbers which can be converted into binary", "the binary numbers of 1 and 0 determine which pixels stay on and off which creates and stores the image", "the computer cannot use binary to store and create images"], 
                                                rightAnswer:"each pixel has a color and the color can be represented by numbers which can be converted into binary"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Explain how binary is used to create/store sound",
                                                FindAnswer:[ "Sound is a wave that is based on vibration and can be represented graphically. Because of this, various points on the sound wave vibration graph can be associated with a number and therefore stored in binary data format on your computer which is how sound is stored", "the binary numbers determine if there is sound playing at a certain time by using the number 1 for on meaning sound is playing while 0 would mean no sound is playing", "binary can be used to store and create sound as the numbers 1 and 0 can be used as the number 1 means that a high pitch is playing while the number 0 means a low pitch is playing", "binary is not used to create or store sound "], 
                                                rightAnswer:"Sound is a wave that is based on vibration and can be represented graphically. Because of this, various points on the sound wave vibration graph can be associated with a number and therefore stored in binary data format on your computer which is how sound is stored"
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

export default Unit1Lesson1;