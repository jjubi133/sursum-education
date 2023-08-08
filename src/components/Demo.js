import React, { Fragment } from "react";
import './styles/Demo.css';
import Tabs from '../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from './quiz/Quiz.js';

class Demo extends React.Component {
    render() {
        return (
            <div class = "container">
                <div class = "split left">
                    <div class = "lesson_video">
                        <iframe src="https://www.youtube.com/embed/subY_QcWGSw?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Demo</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class="tab_header">for Loops</div>
                                    <div class="paragraph">A for loop acts as an iterator in Python; it goes through items that are in a sequence or any other iterable item. Objects that we've learned about that we can iterate over include strings, lists, tuples, and even built-in iterables for dictionaries, such as keys or values.</div>
                                    <div class="paragraph_NI">Here's the general format for a for loop in Python:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> item <div class="blue">in</div> object:</div>
                                            <div class="comment in_1">'''statements to do stuff'''</div>
                                        </div>
                                    </div>
                                    <div class="paragraph">The variable name used for the item is completely up to the coder, so use your best judgment for choosing a name that makes sense and you will be able to understand when revisiting your code. This item name can then be referenced inside your loop, for example if you wanted to use if statements to perform checks.</div>
                                    <div class="paragraph">Let's go ahead and work through several examples of for loops using a variety of data object types.</div>
                                    <div class="tab_header">Example 1</div>
                                    <div class="paragraph_NI">Iterating through a list:</div>
                                    <div class = "code_block">
                                        <div class="input">
                                            <div class = "comment"># We'll learn how to automate this sort of list in the next lecture</div>
                                            <div>list1 = [1,2,3,4,5,6,7,8,9,10]</div>
                                            <div class="multi"><div class="blue">for</div> num <div class="blue">in</div> list1:</div>
                                            <div class="in_1"><div class="purp">print</div>(num)</div>
                                        </div>
                                        <div class="output">
                                            <div>1</div>
                                            <div>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                            <div>6</div>
                                            <div>7</div>
                                            <div>8</div>
                                            <div>9</div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> x <div class="blue">in</div> <div class='gre'>range</div>(1,9,2):</div>
                                            <div class="multi in_1"><div class="purp">print</div>(x)</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What will be the output of the following?",
                                              FindAnswer:["1 3 5 7", "1 2", "1 3 5 7 9", "2 1"], 
                                              rightAnswer:"1 3 5 7"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "Which is a true statement about for loops?",
                                                FindAnswer:["for loops can go on forever until a particular condition is met, then the for loop will stop", "for loops are used to iterate through items in Python", "for loops cannot have other loops within them as it would cause errors", "for loops have an else loops much like an if statement that runs once a for loops terminates suddenly"], 
                                                rightAnswer:"for loops are used to iterate through items in Python"
                                            }
                                        }
                                    />
                                    <div class="code_block">
                                        <div class="input">
                                            <div class="multi"><div class="blue">for</div> x <div class="blue">in</div> <div class='gre'>range</div>(1, 10):</div>
                                            <div class="multi in_1"><div class="blue">for</div> y <div class="blue">in</div> <div class='gre'>range</div>(3,5):</div>
                                            <div class="multi in_2"><div class="blue">if</div> x%y == 0:</div>
                                            <div class="multi in_3"><div class="purp">print</div>(x)</div>
                                            <div class="blue in_3"><div class="blue">break</div></div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What will be the output of the following?",
                                                FindAnswer:[ "3 4 5 6 8 9", "3 4 6 8 9 10", "3 4 6 8 9", "1 3 5 7"], 
                                                rightAnswer:"3 4 6 8 9"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class = "tab_header">Task</div>
                                    <div class = "paragraph_NI">Create a program that takes only the words that start with the letter ‘a’ in the following sentence: sentence = ‘Apples and oranges are often used to compare differences, a classic idiom’ (*Hint = you will use a for loop, .split(), and an if statement*)</div>
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit4Lesson2?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div class = "bottom_section">
                    <Fade bottom><div><div class ="lesson_backbutton"><Link to='/Units'><button class="grow">View Other Lessons</button></Link></div></div></Fade>
                </div> 

            </div>
        )
      }
}

export default Demo;