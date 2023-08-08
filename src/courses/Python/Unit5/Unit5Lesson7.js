import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson7 extends React.Component {
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
                        <iframe src="https://www.youtube.com/embed/ESAO6tyEzTA?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div> 
                </div>
                <div class = "split right">
                    <div class = "lesson_content">
                        <div class = "lesson_title grow">Lamdas and Map Filters</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class='tab_header'>Lamdas and Map Filters</div>
                                    <div class='paragraph'>When working with functions in Python, you’ll eventually want to pass through iterable objects as arguments for your functions. Well, one way that you could do this is by use of a conventional for loop. However, Python has built functions that allow you to pass in the items of your iterable objects as individual arguments for your functions.</div>
                                    <div class='tab_header'>Map</div>
                                    <div class='paragraph'>The first of these functions is the map function. Let’s take a look at an example.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>def</div> <div class='purp'>myfunc</div>(iterable):</div>
                                            <div class='multi in_1'><div class='blue'>return</div> iterable</div>
                                            <div class='multi'>mylist = [<div class='str'>'hello'</div>, <div class='str'>'world'</div>]</div>
                                            <div class='multi'><div class='blue'>for</div> x <div class='blue'>in</div> <div class='purp'>map</div>(myfunc, mylist):</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(x)</div>
                                        </div>
                                        <div class='output'>
                                            <div>hello</div>
                                            <div>world</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see from the example above, we have a function that will return the item we pass through. Now the issue here is that we have a list called mylist and we want to pass in mylist through myfunc but we can’t since our function won’t take in an iterable object. However, when we used the map function along with a for loop, we were able to successfully pass in the items of mylist as individual arguments of myfunc. Let’s break this down. What the map function does is it takes in the function and iterable object in its parentheses. Then when the for loop begins to iterate through map, myfunc is called and the map function grabs the first item from mylist (which is ‘hello’) and passes that into myfunc. Then myfunc returns ‘hello’ which completes the map cycle. However, because we have our for loop, x becomes the output of our function and we can see that in the for loop we have the code to print(x) and because of that, ‘hello’ is printed onto our screen. Then, the for loop executes again and iterates through map once more repeating the cycle but this time with the next iterable object inside of mylist which is ‘world’. So that’s how we use the map function in Python to allow iterable objects to be passed as arguments inside of functions.</div>
                                    <div class='tab_header'>Filter</div>
                                    <div class='paragraph'>The next function that allows you to pass in iterable objects as arguments is the filter function. The filter function is the exact same as the map function but with one key difference. That being, the filter function will only output results of a function that meets a condition. Let’s look at an example.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>def</div> <div class='purp'>myfunc</div>(name):</div>
                                            <div class='multi in_1'><div class='blue'>if</div> <div class='purp'>len</div>(name) == 4:</div>
                                            <div class='multi in_2'><div class='blue'>return</div> name</div>
                                            <div class='multi'>mylist = [<div class='str'>'hello'</div>, <div class='str'>'world'</div>, <div class='str'>'cars'</div>, <div class='str'>'dogs'</div>, <div class='str'>'cats'</div>,]</div>
                                            <div class='multi'><div class='purp'>map</div>(myfunc, mylist)</div>
                                            <div class='multi'><div class='blue'>for</div> x <div class='blue'>in</div> <div class='purp'>filter</div>(myfunc, mylist):</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(x)</div>
                                        </div>
                                        <div class='output'>
                                            <div>cars</div>
                                            <div>dogs</div>
                                            <div>cats</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see, the example above shows a function that has a condition that’ll only print out arguments that have a character length of 4. Now what the filter function does is the same as the map function. It takes in our function along with the iterable object. Then a for loop iterates through filter and once it’s done that, the filter function will call myfunc and pass in the first item of our list, ‘hello’. However, because ‘hello’ does not meet our condition for len(name) == 4, the filter function will not allow our for loop to print the word hello. This goes on until the filter function iterates to a word that has a character length of 4. Once the condition is met, then and only then will the filter function allow our for loop to print out the outcome. So think of the filter function as filtering out an iterable object that does not meet a condition that is in our function.</div>
                                    <div class='tab_header'>Lambdas</div>
                                    <div class='paragraph'>Finally, we have lambda functions. Lambdas are functions that exist to be used only once. Why would we need these? Well, imagine you have a problem but don’t want to take up space by creating a function which you’ll only use once to solve the problem. It’s not practical and because you won’t use it again, it’ll most likely not be worth creating at all. To resolve this issue, we use lambda functions. The syntax for lambdas looks like this.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'><div class='blue'>lambda</div> name: <div class='str'>'Hello my name is '</div> + name</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see, we start by typing out lambda then the argument which we’ll take in which in this case we just called name. We then follow that with a colon and the code that will run when our lambda runs. But a lambda by itself won’t do anything. So let’s go ahead and see a lambda being used.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>name_hello = <div class='blue'>lambda</div> name: <div class='str'>'Hello my name is '</div> + name</div>
                                            <div class='multi'>name_hello(<div class='str'>‘Albert’</div>)</div>
                                        </div>
                                        <div class='output'>
                                            <div>Hello my name is Albert</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As you can see, once we set our lambda equal to the variable name_hello, all we did was pass in the argument ‘Albert’ which the lambda then took and concatenated with the string ‘Hello my name is’. So remember, lambdas are created as functions that will only ever be used one time.</div>

                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "What does the map function do?",
                                              FindAnswer:["It creates a csv for items to be added to", "It creates a pdf for function calls to be added to", "It allows iterable objects to be passed in as arguments for functions", "It is used with filter functions to add iterable objects into lists"], 
                                              rightAnswer:"It allows iterable objects to be passed in as arguments for functions"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What does the filter function do?",
                                                FindAnswer:[ "It is used to sift through outputs of class calls", "It is used to pass iterable objects as arguments for functions and only returns the items that meet a functions condition", "It is used as a one time function", "None of the above"], 
                                                rightAnswer:"It is used to pass iterable objects as arguments for functions and only returns the items that meet a functions condition"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the proper syntax for a lambda function?",
                                                FindAnswer:[ "argument : (function_name,condition)", "lambda argument: argument", "lambda():argument", "lambda argument(): argument"], 
                                                rightAnswer:"lambda argument: argument"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                <div class="tab_header">Task</div>
                                    <div class="paragraph">Create an iterable object (list) with the names of your favorite movies. Create another iterable object but have this be empty. Then create a function that will only be used once and have the iterable objects be passed into the function. Append the outputs of the function to the empty list. </div>
           
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/Unit5Lesson7?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit5Lesson7;