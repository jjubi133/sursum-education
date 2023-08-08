import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit7Lesson4 extends React.Component {
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
                        <div class = "lesson_title grow">Data Encryption Techniques</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">A lot of data gets sent throughout the internet every second. The problem is that it's easy for people to view private data that gets sent through the internet easily. So to prevent this encryption has been made where the original data is changed into an alternate form hiding the actual data from outsiders but still making it possible to gain access to the original data if someone has a key to decrypt the data. There are 2 types of encryption we will cover in this lesson, there is symmetric encryption and public-key encryption.</div>
                                    <div class="tab_header">Symmetric Encryption</div>
                                    <div class="paragraph">Symmetric encryption is an encryption method where the key can be used to encrypt as well as decrypt data. The Caesar Cipher is one of the simplest symmetric encryption techniques, and of course, one of the easiest to crack.</div>
                                    <div class="paragraph">Since then, cryptologists have invented many more symmetric encryption techniques like the vigenere cipher, including the ones used today to encrypt data like passwords.</div>
                                    <div class="paragraph">One great example of this is called the Caesar Cipher, it was a simple cipher to use. So let's take a look at an example of Caesar cipher encryption.</div>
                                    <div class="paragraph">So let's say our secret message was: “This text is encrypted”</div>
                                    <div class="paragraph">Well then the encryption could look like “Uijt ufyu jt fodszqufe”</div>
                                    <div class="paragraph">The encrypted text looks like a lot of random text but in reality, the secret message and the encrypted message are similar. This is because the letters were shifted. What this means is that one letter in the original message is substituted for another letter in the encrypted version. This substitution is determined by a shift in the alphabet by a certain amount, in this case, the alphabet gets shifted by 1 letter meaning that the letter a in the original message would appear as a b in the encrypted version. That means b would equal c, c would equal d, and so on.</div>
                                    <div class="paragraph">The shift amount can be any number from 1 to 25 as if the receiver knew the shift of the code, they could figure out the original message. So what if someone gets the encrypted message, how would they solve it? Well, there are 3 main methods to decrypt the encryption on the original data. They can use frequency analysis, known-plaintext, or brute force.</div>
                                    <div class="paragraph">With frequency analysis, you check to see if many of one letter is present. Vowels tend to be very common letters used often in words, and this can be used to determine a few estimates on how much a message has been shifted.</div>
                                    <div class="paragraph">The plaintext is simply another word for the original message. Knowing a portion of the plain text, you can figure out how the message was encrypted and decrypt the message.</div>
                                    <div class="paragraph">Finally, there is brute-force which essentially means that you try every possible shift or combination, in this case, to see if you get any meaningful results on the message. There are 25 shifts with the caesar cipher and someone could try all 25 shifts to decrypt a message.</div>
                                    <div class="paragraph">This leads us to things we need to consider when dealing with encryption and that is the encryption itself, the decryption, and finally the ability to crack to code.</div>
                                    <div class="paragraph">With encryption, you change the original data based on a key that is kept secret.</div>
                                    <div class="paragraph">Decryption is the ability to recover the original data by unscrambling the encrypted data using the key.</div>
                                    <div class="paragraph">Finally, there is cracking the code where you figure out the original message without using the key.</div>
                                    <div class="paragraph">Ciphers back then were incredibly difficult to brute force or crack the code because there were many combinations to try with ciphers that could take a person an extremely long time to figure out. But now with computers that can run billions of operations per second, it becomes much easier to crack these kinds of ciphers.</div>
                                    <div class="paragraph">So how do ciphers fare nowadays because computers have become incredibly powerful? Well, some ciphers are made that are difficult for computers to solve and they are improved often. A common encryption method is AES-128 which is a block cipher that is used for transferring files securely. So how can this method of encryption be safe from computers? Well, it's because the key is 128 bits long meaning there is an extremely large number of possible combinations making it take so much longer for a computer to solve. AES ciphers also don't reveal information about the original text due to a many step sequence on blocks of bits preventing frequency analysis.</div>
                                    <div class="paragraph">Symmetric encryption requires both the sender and receiver to have the same key to encrypt and decrypt the data. But when it comes to public-key encryption, different keys are used for encryption and decryption which allows for a more stable communication method between devices. So let's take a look at the steps in place to use public-key encryption.</div>
                                    <div class="paragraph">First, there is the key generation where each computer needs to create a pair of keys known as a public key and a private key. These keys are created through the RSA algorithm where the keys are created when 2 huge prime numbers are multiplied together. The algorithm randomly generates 2 large numbers until 2 large prime numbers are found. It can take a while and also the keys can be 512 bits, 2048 bits long, or more.</div>
                                    <div class="paragraph">Next is the key exchange where the computer send each other their public key through TCP while the private keys are not sent.</div>
                                    <div class="paragraph">Next is encryption where the sender encrypts the data by using the data of the receiver's computer’s public key. This function can be encrypted but it is very difficult to reverse this process to get the original data meaning that the public key can’t be used to decrypt the data.</div>
                                    <div class="paragraph">Then the encrypted data gets sent through the internet to the receiver.</div>
                                    <div class="paragraph">Finally, the message will be deciphered by the receiver using the private key which is the only key that can decrypt the message.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What are the 2 main types of data encryption?",
                                              FindAnswer:["Symmetric encryption and public-key encryption", "So that it can speed up the process of sending emails between people", "So that 2 computers can establish a proper connection with each other", "None of the above"], 
                                              rightAnswer:"Symmetric encryption and public-key encryption"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following is not one of the 3 main ways to decrypt data?",
                                              FindAnswer:["Brute Force", "Known-plaintext", "Frequency Analysis", "Guessing"], 
                                              rightAnswer:"Guessing"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What is a cipher that is difficult for Computers to decrypt?",
                                              FindAnswer:["Vigenere Cipher", "Caesar Cipher", "Monoalphabetic Cipher", "AES-128"], 
                                              rightAnswer:"AES-128"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of these is not a step for public-key encryption?",
                                              FindAnswer:["Key generation occurs where each computer needs to create a pair of keys known as a public key and a private key", "Keys get exchanged between computers as a public key is sent but not a private key. encryption where the sender encrypts the data by using the data of the receiver's computer’s public key", "Then the encrypted data gets sent through the internet to the receiver where the data is deciphered by the receiver using the private key", "All of these are steps for public-key encryption"], 
                                              rightAnswer:"All of these are steps for public-key encryption"
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

export default Unit7Lesson4;