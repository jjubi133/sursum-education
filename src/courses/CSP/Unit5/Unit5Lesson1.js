import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit5Lesson1 extends React.Component {
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
                        <div class = "lesson_title grow">Data Tools</div>
                        <div class = "tabs">
                            <Tabs>
                                
                                <div class="tab_label" label="Supplemental">
                                    <div class="paragraph">You might wonder how our computers store our data considering that a lot of data gets sent through the internet and received by various devices across the network. A lot of data needs to get stored in some locations as various companies and organizations collect data on their users. Data might be stored on a computer program where various variables store the data but there also needs to be a physical location for the data to be stored once the program isn’t running. So let's take a look at some of these storage methods.</div>
                                    <div class="tab_header">Text Files</div>
                                    <div class="paragraph">The first method for storing data from a program on a computer is through the usage of text files commonly ending with .txt. These files as the name suggest store text on your computer that can be accessed through a program. Text files tend to store one piece of information per line.</div>
                                    <div class="tab_header">CSV File</div>
                                    <div class="paragraph">So what if we wanted to store many pieces of information on one line?</div>
                                    <div class="paragraph">Well, we can use a CSV file that stands for comma-separated values.</div>
                                    <div class="paragraph">CSV files allow you to store multiple different pieces of information on one line separated by commas. This allows the user to store the data in a table-based format where the columns are based on the commas separating values while the rows are based on the line number on the document. CSV files are common and tools like spreadsheets can read, organize, and analyze data in a CSV file. CSV files don’t automatically come with tools to manage data in the file so there needs to be an application like spreadsheets or a program that can read the data.</div>
                                    <div class="tab_header">Database</div>
                                    <div class="paragraph">Another method that data can get stored is a database which is a system that will store data on your computer with the benefit of easy access to specific data and changing data. Databases are stored in text files but the database manages the specifics like splitting the data across text files so the data is evenly spread. The way databases are used is by using a query language. SQL or structured query language is the most popular. Query languages are similar to programming languages as you can use commands to do certain functions. The data is stored in tables and then it can be accessed.</div>
                                    <div class="tab_header">Analyzing Data</div>
                                    <div class="paragraph">But what can we do with this data we’ve stored and organized? Well, now we come to the analysis part where we check the data to find patterns. Once again we can use spreadsheets or SQL to analyze data. One of the first things you can do is check how much data there is through how many rows or columns are present. Now within these columns, we can use functions that check to see average values in a column or row. There are more functions you can run on portions of data tables or the entire data table such as median, mode, the maximum value, the minimum value, the total value, and more.</div>
                                    <div class="paragraph">When we figure out information from portions or subsets of data, we are filter data as we might not need certain portions of data when we want to calculate something. We could calculate by using 1 row of data instead of the entire data set. We can answer many questions by creating more tables that specify answers from analyzing specific data by the group which is known as summarizing by group.</div>
                                    <div class="tab_header">Finding Trends</div>
                                    <div class="paragraph">The main reason we collect data is to find various patterns or trends in the data to see if various pieces of data are related to each other. We can easily see these trends and patterns in a table format or a graph format. There are many different kinds of graphs like bar charts, line graphs, and more.</div>
                                    <div class="paragraph">A trend is a general direction in which something is developing or changing weather that is either increasing or decreasing. A good example of this would be people using the internet versus time. We have 2 different sets of data but as time goes one, more people begin to use the internet meaning there is an upward trend.</div>
                                    <div class="paragraph">So if we put the year on the x-axis and the number of people on the y axis and create a line group. We can see that the line is going in the general up direction meaning that over time, more people will start to use the internet. Knowing this, we can predict how many people will use the internet by looking at the direction the line is going.</div>
                                    <div class="paragraph">Sometimes, however, the data line can be less straight and have many ups and downs. This is known as a fluctuation where it might be hard to figure out the trend. So we can calculate the trend line over the chart which smooths out the data making the trend clearer. But why would we do this?</div>
                                    <div class="paragraph">Well we analyze the data to make predictions to figure out what might happen in the future or see if there will be an increase or decrease in certain data.</div>
                                    <div class="paragraph">We can also find correlations which is a relationship between 2 sets of numbers. The correlation can be positive meaning that if one value goes up the other value goes up. The correlation can be negative where if one value goes up, the other one goes down. And there can be no correlation at all meaning the pieces of data are not related to each other and don’t affect each other. A great example of correlation is the data of people's heights vs their weight. The more height a person has, the heavy they tend to be which is a positive correlation as more height means there is a high chance that the person has more weight than someone who's shorter.</div>
                                </div>

                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <Quiz 
                                        quizdata={
                                            {
                                              question: "Which of the following are not one of the 3 common methods for storing data on a computer?",
                                              FindAnswer:["Text file", "CSV file", "Database", "Network"], 
                                              rightAnswer:"Network"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the difference between a text file and a CSV file?",
                                                FindAnswer:[ "Text Files tend to store one piece of information per line while CSV files allow you to store multiple different pieces of information on one line separated by commas", "Text Files tend to store multiple different pieces of information on one line separated by commas while CSV files tend to store one piece of information per line", "The text file is needed to connect 2 computers with each other while a CSV is what tells the computer how to encrypt the file", "None of the Above"], 
                                                rightAnswer:"Text Files tend to store one piece of information per line while CSV files allow you to store multiple different pieces of information on one line separated by commas"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is used to access various pieces of information of data in a database?",
                                                FindAnswer:[ "A Query Language", "Programming Language", "Binary", "Hexadecimal"], 
                                                rightAnswer:"A Query Language"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What are examples of analysis that can be run on data sets?",
                                                FindAnswer:[ "How much data there is through how many rows or columns are present", "Average values in a column or row", "Total value", "All of the above"], 
                                                rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is a trend?",
                                                FindAnswer:[ "A trend is a general direction in which something is developing or changing weather that is either increasing or decreasing", "The speed at which data is sent through a network", "The amount of time it takes for a computer to connect with another computer", "The process of using a query language to access a database"], 
                                                rightAnswer:"A trend is a general direction in which something is developing or changing weather that is either increasing or decreasing"
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

export default Unit5Lesson1;