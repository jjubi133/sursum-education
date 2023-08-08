import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit1Lesson4 extends React.Component {
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
                        <div class = "lesson_title grow">Storing numbers</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">When we talk about storing numbers in variables, computers need a specific way to show numbers in the computer’s memory. There are many methods present to determine whether a number is an integer or not. There are limits to computer memory which is why we can see roundoff, overflow, or precision of numeric variables in our programs.</div>
                                    <div class="paragraph">Lossless compression file size reduction where no information from the original file is lost when the compression algorithm compresses the file. This means that you can recreate the original file from the newly compressed file when using lossless compression.</div>
                                    <div class="paragraph">The other compression method is lossy compression which can greatly reduce file size but this comes at the cost of losing some of the lesser important information of a file. This will affect the quality of the file and it won’t be possible to reconstruct the original file from the newly compressed file when using lossy compression.</div>

                                    <div class="tab_header">Lossless compression</div>
                                    <div class="paragraph">So now let's take a look at examples of using lossless compression.</div>
                                    <div class="paragraph">So you might be wondering how a computer can compress text. Well, it is a very simple process that we sometimes do ourselves. So what if we wanted to compress the phrase “Have a Great Day”</div>
                                    <div class="paragraph">Well, it can be compressed by looking for certain patterns within the string and then replacing certain groupings of characters with a symbol. So in this case we can change the word “Great” to Gr8” to compress it. We can reconstruct the original word but now we use only 3 letters to represent the word great which means we are saving space.
</div>
                                    <div class='paragraph'>So a computer will do this as much as possible, find patterns and create tables with various letters and their associated replacement symbol. Not all text can be compressed like the letters of the alphabet as trying to associate symbols with each letter of the alphabet will simply take up more space.</div>
                                    <div></div>
                                    <div class="paragraph">So if we want to incorporate lossless compression for images, the image has to be a singular color. Images can tend to take up a lot of space on our computer’s storage. Computers tend to use the RLE Algorithm to compress single-color images. RLE stands for run-length encoding.</div>
                                    <div class="paragraph">Bitmaps are grids that have images overlaid over them to separate each individual pixel of the image for the user to observe.When dealing with single-color images, the pixel can either be colored or blank. We can represent there be color in the pixel as 1 and no color as 0, so now if you wanted to compress this, you can group the 0s and 1s to save storage space.</div>
                                    <div class="paragraph">So let's say our line of pixels were 0,0,1,1,1</div>
                                    <div class="paragraph">Well, we could either say that the numbers are 0,0,0,1,1 or that there are three 0s then two 1s.</div>
                                    <div class="paragraph">So our computer can group the values to save space and now the computer represents 0,0,0,1,1 as 3,2. The first grouping is always representative of there being no color in that pixel.</div>
                                    <div class="paragraph">So if our numbers were 1,1,0,0,0, the grouping for that would be 0,2,3</div>
                                    <div class="paragraph">Because this is a lossless compression format we can recreate the original image with the data present from the compressed image.</div>


                                    <div class="tab_header">Lossy Compression</div>
                                    <div class="paragraph">With regards to lossy compression, as we’ve said before, it removes unnecessary pieces of information from the file that typically the human can’t perceive and it greatly cuts on the file size. This kind of compression is beneficial on extremely large files. Most of the time, the algorithms that compress files using lossy compression try to remove parts of the file that we won’t perceive.</div>
                                    <div class="paragraph">For example, compression algorithms can use the fact that we are great at noticing brightness changes compared to color changes. This is why these algorithms get rid of certain pieces of color data from an image.</div>
                                    <div class="paragraph">This is what is known as chroma subsampling and it is hard for us to notice the difference between the original and the compressed version while cutting down on file size.</div>
                                    <div></div>
                                    <div class="paragraph">We can also compress audio because as humans, we can’t hear every sound as we have a range that we can perceive sounds. So a compression algorithm can cut out some of these unnecessary sounds. These compression algorithms are based on the limits of our ear and then get rid of the various bits of audio that we can’t hear.</div>
                                    <div class="paragraph">Whenever we are using lossy compression, we have to decide if we want to prioritize quality from size.</div>

</div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Why is it possible to recreate the original file from a lossless compression based?",
                                              FindAnswer:["no information from the original file is lost when the compression algorithm compresses the file. This means that you can recreate the original file from the newly compressed file when using lossless compression", "the original file can be recreated as the lossless compression algorithm simply makes the image lower quality making to possible to recreate the original image", "It is not possible to recreate the original file from lossless compression, it can be done with lossy compression", "It is not possible to recreate the original file from lossless compression because you lose data when you do any form of compression meaning that it’s impossible to recreate the original file"], 
                                              rightAnswer:"no information from the original file is lost when the compression algorithm compresses the file. This means that you can recreate the original file from the newly compressed file when using lossless compression"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What does the RLE algorithm do?",
                                                FindAnswer:[ "The RLE Algorithm is used to compress multicolor images. RLE stands for run-length encoding", "The RLE Algorithm is used to convert binary data into color data", "Computers tend to use the RLE Algorithm to compress single-color images. RLE stands for run-length encoding", "The RLE Algorithm is used to convert sound data into color data"], 
                                                rightAnswer:"Computers tend to use the RLE Algorithm to compress single-color images. RLE stands for run-length encoding"
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

export default Unit1Lesson4;