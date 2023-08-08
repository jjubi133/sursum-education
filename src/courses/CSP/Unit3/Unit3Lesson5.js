import React, { Fragment } from 'react';
import '../../../components/styles/Demo.css';
import Tabs from '../../../tabs/Tabs.js';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Quiz from '../../../components/quiz/Quiz.js';

import fire from '../../../config/Fire';
import Login from '../../../components/Login.js';

class Unit3Lesson5 extends React.Component {
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
                        <div class = "lesson_title grow">Lists</div>
                        <div class = "tabs">
                            <Tabs>
                                <div class="tab_label" label="Supplemental">
                                    <div class='paragraph'>There are many ways that we can store data in python. For basics, python can store things in its memory and retrieve them. We usually store things like integers and strings under names so we can tell python to retrieve these strings and integers. We can create a dictionary storing multiple values in a group to keep things more organized. We call these things lists.</div>
                                    <div class='tab_header'>Basic List</div>
                                    <div class='paragraph_NI'>In python, a list would look something like this:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>List = [<div class='str'>‘start'</div>, <div class='str'>‘second’</div>, <div class='str'>‘finish’</div>]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Say we want to create an empty list. We would do so by creating a list variable and making it equal empty square brackets like so:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>newlist = [ ]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>So let’s say we wanted to add an item to a list, we use the append() function to do the following:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div>shoppinglist = []</div>
                                            <div class='multi'>shoppinglist.<div class='purp'>append</div>(<div class='str'>‘mangos’</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(shoppinglist)</div>
                                            <div class='multi'>shoppinglist.<div class='purp'>append</div>(<div class='str'>'kale'</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(shoppinglist)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘mangos’]</div>
                                            <div>[‘mangos’, ‘kale’]</div>
                                        </div>
                                    </div>
                                    <div class='tab_header'>Appending</div>
                                    <div class='paragraph'>Append means to add to the end of which is why when we add kale to the list it goes to the end of the list. Lists can hold any data like numbers, strings, and even other lists.</div>
                                    <div class='paragraph'>So now how can we get items that we put in a certain list? We can get certain items from a list using their index numbers. Index means the position of something. Pythons index when it comes to lists starts at 0 instead of 1 as we will see below. The reason indices in python start at 0 is because early coders and programmers argued about it and the 0’s side won.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>randomletterslist = [<div class='str'>‘a'</div>, <div class='str'>‘x’</div>, <div class='str'>‘t'</div>, <div class='str'>‘e'</div>, <div class='str'>‘m'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(randomletterslist[0])</div>
                                            <div class='multi'><div class='purp'>print</div>(randomletterslist[4])</div>
                                        </div>
                                        <div class='output'>
                                            <div>a</div>
                                            <div>m</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Notice how the list index starts at 0 which corresponds with the first item of the list, then every following item in the list is one greater index value than the previous item’s index value.</div>
                                    <div class='paragraph'>We can also use multiple indices which is plural of index, to get many items from a list at a time. This can be accomplished by slicing a list, which is similar to the range() function that we used for “for loops.</div>
                                    <div class='paragraph'>It's important to note that a slice is a partial copy of the list which makes this partial copy a list itself. This is important when we are differentiating between getting items from a list and slicing the list. Slicing the list creates a smaller copy of the original list making it its own list while recalling an item from a list simply gives its value and not creating a list.</div>
                                    <div class='tab_header'>Slicing Lists</div>
                                    <div class='paragraph'>Indices (plural of index) can also be used to get multiple items from a list at a time like this. So let’s look at an example of this:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers[1:4])</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘2’, ‘3’, ‘4’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we create a slice of the numbers list. We slice the list from the first index value which is the number ‘2’ to the 4th index value which in reality we are stopping at the 3rd index because the second value we put into the slice is actually 1 less than what we want which is why we get the list of numbers 2,3,4 as our output and not 2,3,4,5. This is similar to the range() function that we used for “for” loops.</div>
                                    <div class='paragraph'>Remember that a slice is a partial copy of the list which therefore makes it a list itself, so observe the difference between slicing and getting an item from a list:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers[1:2])</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers[1])</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘2’]</div>
                                            <div>2</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Slicing a list copies a portion of the original list making it its own list while recalling an item from a list just gives its value.</div>
                                    <div class='paragraph'>We also have shortcuts to slice as well as you can see here. If you wanted to slice a list starting from the beginning of the list, you would put a colon in first and then the number of items you want.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers[2:])</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘3’, ‘4’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>And finally including a colon with no numbers brings up the whole list. Because the colon makes a copy of the original just adding a colon creates an identical duplicate to the previous list which can be a quick and easy way to copy a list and store it.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers[:])</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='tab_header'>Changing items within lists</div>
                                    <div class='paragraph'>Now let’s take a look at how we can change items within a list. We can change items in a list by using their indices and changing their values as shown in the example below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                            <div class='multi'>numbers[2] = <div class='str'>'6'</div></div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’]</div>
                                            <div>[‘1’, ‘2’, ‘6’, ‘4’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we have our list numbers that have the numbers 1-5. Then we indicate that we want to access the 2nd index value in the list numbers in line 3 of our code. Then we make it equal to the number 6 so now if we reprint the number list, the 2nd index value in the list numbers is now changed from ‘3’ to ‘6’.</div>
                                    <div class='paragraph'>Important note: You can't add new items to the list using the index you can only already existing items in the list so in the example above you can’t use numbers[5] = 7. To add a new number because that index for this list doesn’t exist.</div>
                                    <div class='paragraph_NI'>There are 3 main ways of adding items to a list are with these:</div>
                                    <ol class='list'>
                                        <li>append() - adds 1 item to the end of a list</li>
                                        <li>extend() - adds multiple items to the end of a list</li>
                                        <li>insert() - adds an item somewhere in the list where you choose based on the index</li>
                                    </ol>
                                    <div class='paragraph'>So here is an example of the append() function:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>append</div>(<div class='str'>‘6’</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>As we can see here, the append function added the number 6 at the end of the numbers list. The append function on default will add 1 item at the end of the list which is why we don’t specify the index value.</div>
                                    <div class='paragraph'>Now let’s take a look at an example of the extend() function:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>, <div class='str'>‘6'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>extend</div>([<div class='str'>‘7’</div>, <div class='str'>‘8’</div>])</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’, ‘8’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here the entend() function adds multiple items to the end of a list. We see above that we end the numbers 7 and 8 to the end of the list. So now when we print the list numbers once again, we have the numbers 1 through 8 in our list.</div>
                                    <div class='paragraph'>Finally let’s take a look at an example of insert():</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>, <div class='str'>‘6'</div>, <div class='str'>‘7'</div>, <div class='str'>‘8'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>insert</div>(2, <div class='str'>‘2.5’</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘2.5’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’, ‘8’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we have our list of numbers from one through 8. The insert function works by first telling python which index value you want to put in the new item in the list. So we put item 2.5 in the 2nd index value. So now when we print out numbers and we can see that 2.5 is in the 2nd index slot between the numbers ‘2’ and ‘3’.</div>
                                    <div class='paragraph'>So now you might be wondering, what exactly is the difference between append() and extend()? The append() command only adds one item to the end of a list which is why when you append more than 1 item to a list, it creates a list that is 1 item itself and adds this new list into the preexisting list as shown in the examples below:</div>
                                    <div class='paragraph_NI bold'>Using append()</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>append</div>([<div class='str'>‘6’</div>, <div class='str'>‘7’</div>, <div class='str'>‘8’</div>])</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’, [‘6’, ‘7’, ‘8’]]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph_NI bold'>Using extend()</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>extend</div>([<div class='str'>‘6’</div>, <div class='str'>‘7’</div>, <div class='str'>‘8’</div>])</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’, ‘8’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Insert() works in the same way as append() but you can put the item where you want to in the list.</div>
                                    <div class='tab_header'>Deleting items from lists</div>
                                    <div class='paragraph'>So how can we delete items that we don’t want from a list? The three ways to delete an item from a list is using either the remove(), del, or pop() commands. Lets first look at an example of the remove() function.</div>
                                    <div class='paragraph_NI bold'>remove() - deletes any item you choose from a list</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>remove</div>(<div class='str'>‘3’</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘4’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we deleted the number 3 from our list as that’s what we put for the remove() function. Note: if you try to remove an item that doesn’t exist you get an error.</div>
                                    <div class='paragraph'>Del deletes an item by using its index as shown below where we remove the 4th item by calling for the 3rd index value to be deleted.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='blue'>del</div> numbers[3]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Deleting with pop gets rid of the last item from the list but gives it back to you and you can use it by assigning that deleted value to a variable.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>lastnumberdeleted = numbers.<div class='purp'>pop</div>()</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(lastnumberdeleted)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘3’, ‘4’]</div>
                                            <div>5</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>You can also delete items from lists using pop() based on their index as shown in the example below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'>thirdnumberdeleted = numbers.<div class='purp'>pop</div>(2)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(thirdnumberdeleted)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘1’, ‘2’, ‘4’, ‘5’]</div>
                                            <div>3</div>
                                        </div>
                                    </div>
                                    <div class='tab_header'>Searching items in a list</div>
                                    <div class='paragraph'>So how might we search through items in a list? We can find out what index an item belongs to in a list and we can figure out whether there is a certain item in a list.</div>
                                    <div class='paragraph'>We use the specific keyword titled “in” to create a boolean statement to state whether the item you are looking for is there, producing a true result if the item is present in the list or a false result if it's not in the list as shown below.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>‘1’</div> <div class='blue'>in</div> numbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(<div class='str'>‘10’</div> <div class='blue'>in</div> numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>True</div>
                                            <div>False</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Combining this with an if statement, we can eliminate any item we specify without producing an error caused by the item not being present.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='blue'>if</div> <div class='str'>‘1’</div> <div class='blue'>in</div> numbers:</div>
                                            <div class='multi in_1'>numbers.<div class='purp'>remove</div>(<div class='str'>‘1’</div>)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘2’, ‘3’, ‘4’, ‘5’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Now let’s examine how we can find the index of a certain value in a list. We use the index() command to find where a specific item is located in a list as shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers.<div class='purp'>index</div>(<div class='str'>‘5’</div>)</div>
                                        </div>
                                        <div class='output'>
                                            <div>4</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>We now know that 5 is the 4th index of the list meaning it is the 5th item in the list. Note: it's a good idea to incorporate the index() command into an if statement including the in keyword as shown in previous examples to avoid getting an error.</div>
                                    <div class='tab_header'>Modifying lists</div>
                                    <div class='paragraph'>So far we've been using the original list and creating a modified list to our liking. But we can now change the original list itself. The sort() command orders all the items in the list based on alphabetical or numerical order from smallest to largest. So let's look at our example of the sort command.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘9'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘7'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>sort</div>()</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘2’, ‘3’, ‘4’, ‘7’, ‘9’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>It's important to note that sort() command modifies the original list. We can also reverse the order of a list using the reverse() command as shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘9'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘7'</div>]</div>
                                            <div class='multi'>numbers.<div class='purp'>reverse</div>()</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘7’, ‘4’, ‘3’, ‘2’, ‘9’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Remember that using the reverse() command changes the original list so it is best to make a copy of the original copy using slice notation as shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘9'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘7'</div>]</div>
                                            <div>newnumbers = numbers[:]</div>
                                            <div class='multi'>newnumbers.<div class='purp'>reverse</div>()</div>
                                            <div class='multi'><div class='purp'>print</div>(newnumbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘7’, ‘4’, ‘3’, ‘2’, ‘9’]</div>
                                            <div>[‘9’, ‘2’, ‘3’, ‘4’, ‘7’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>The reason we can't just make the 2 lists equal each other and there needs to be the slice is because if you make the new list equal to the original one, we are just adding a tag to the same thing, meaning that there will only be one list but 2 different list names refer to the same list.</div>
                                    <div class='paragraph'>Python has another sorting command that sorts a list however this function makes a copy of the original list as shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = [<div class='str'>‘9'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘7'</div>]</div>
                                            <div class='multi'>newnumbers = <div class='purp'>sorted</div>(numbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(numbers)</div>
                                            <div class='multi'><div class='purp'>print</div>(newnumbers)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘9’, ‘2’, ‘3’, ‘4’, ‘7’]</div>
                                            <div>[‘2’, ‘3’, ‘4’, ‘7’, ‘9’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Mutable in short means that it's changeable, lists are mutable. Immutable means that something is unchangeable like strings and numbers. What if we wanted to create an immutable list? Well, we can in python we can and these lists are called a tuple. A tuple would look something like this.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>numbers = (<div class='str'>‘1'</div>, <div class='str'>‘2’</div>, <div class='str'>‘3'</div>, <div class='str'>‘4'</div>, <div class='str'>‘5'</div>)</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>We just need to change the square brackets to normal parenthesis and this makes our list into a tuple. Note: since the tuple is immutable you can’t use deletion functions or sorting methods on these tuples.</div>
                                    <div class='tab_header'>Tables</div>
                                    <div class='paragraph'>Data can be stored in various ways in a program. We can store data in variables that contain a single value, lists that hold rows of values strung together. And tables that contain multiple lists in rows and columns.</div>
                                    <div class='paragraph'>We can create a table in python by combining multiple lists together. For example, what if we wanted to track someone’s test scores in different classes and represent them in a table. We would do something like this.</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>englishscores = [<div class='str'>‘76'</div>, <div class='str'>‘89’</div>, <div class='str'>‘93'</div>]</div>
                                            <div class='multi'>mathscores = [<div class='str'>‘59'</div>, <div class='str'>‘85’</div>, <div class='str'>‘99'</div>]</div>
                                            <div class='multi'>sciencescores = [<div class='str'>‘81'</div>, <div class='str'>‘86’</div>, <div class='str'>‘100'</div>]</div>
                                            <div>totalscores = [englishscores, mathscores, sciencescores]</div>
                                            <div class='multi'><div class='purp'>print</div>(totalscores)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[[‘76’, ‘89’, ‘93’], [‘59’, ‘85’, ‘99’], [‘81’, ‘86’, ‘100’]]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Note: we can also instead of putting in the list names we can put in the list items themselves. Now to display our table, we would use a for loop to loop through each item displaying them like so:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>englishscores = [<div class='str'>‘76'</div>, <div class='str'>‘89’</div>, <div class='str'>‘93'</div>]</div>
                                            <div class='multi'>mathscores = [<div class='str'>‘59'</div>, <div class='str'>‘85’</div>, <div class='str'>‘99'</div>]</div>
                                            <div class='multi'>sciencescores = [<div class='str'>‘81'</div>, <div class='str'>‘86’</div>, <div class='str'>‘100'</div>]</div>
                                            <div>totalscores = [englishscores, mathscores, sciencescores]</div>
                                            <div class='multi'><div class='purp'>print</div>(totalscores)</div>
                                            <div class='multi'><div class='blue'>for</div> scores <div class='blue'>in</div> totalscores:</div>
                                            <div class='multi in_1'><div class='purp'>print</div>(scores)</div>
                                        </div>
                                        <div class='output'>
                                            <div>[[‘76’, ‘89’, ‘93’], [‘59’, ‘85’, ‘99’], [‘81’, ‘86’, ‘100’]]</div>
                                            <div>[‘76’, ‘89’, ‘93’]</div>
                                            <div>[‘59’, ‘85’, ‘99’]</div>
                                            <div>[‘81’, ‘86’, ‘100’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>So what if we wanted to get an individual’s score from the table. We would use the list indices to display the individual lists contained within the table as shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>englishscores = [<div class='str'>‘76'</div>, <div class='str'>‘89’</div>, <div class='str'>‘93'</div>]</div>
                                            <div class='multi'>mathscores = [<div class='str'>‘59'</div>, <div class='str'>‘85’</div>, <div class='str'>‘99'</div>]</div>
                                            <div class='multi'>sciencescores = [<div class='str'>‘81'</div>, <div class='str'>‘86’</div>, <div class='str'>‘100'</div>]</div>
                                            <div>totalscores = [englishscores, mathscores, sciencescores]</div>
                                            <div class='multi'><div class='purp'>print</div>(totalscores[0])</div>
                                        </div>
                                        <div class='output'>
                                            <div>[‘76’, ‘89’, ‘93’]</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we called for the first list by telling python to get the list in the table with the 0th index value.</div>
                                    <div class='paragraph'>But what if we wanted to get an individual item from the list within the table we want, well we would do what we just did above calling the list based on its index, but then we would also call the item based on its index from within the list we have called like shown below:</div>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>englishscores = [<div class='str'>‘76'</div>, <div class='str'>‘89’</div>, <div class='str'>‘93'</div>]</div>
                                            <div class='multi'>mathscores = [<div class='str'>‘59'</div>, <div class='str'>‘85’</div>, <div class='str'>‘99'</div>]</div>
                                            <div class='multi'>sciencescores = [<div class='str'>‘81'</div>, <div class='str'>‘86’</div>, <div class='str'>‘100'</div>]</div>
                                            <div>totalscores = [englishscores, mathscores, sciencescores]</div>
                                            <div class='multi'><div class='purp'>print</div>(totalscores[0][2])</div>
                                        </div>
                                        <div class='output'>
                                            <div>93</div>
                                        </div>
                                    </div>
                                    <div class='paragraph'>Here we specifically called for the first list in the table and the third value in the table and python has gotten the item we wanted from the table.</div>
                                </div>
                                <div class="tab_label" label="Quiz">
                                <Fragment>
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>list = [<div class='str'>‘a’</div>, <div class='str'>‘b’</div>, <div class='str'>‘c’</div>, <div class='str'>‘d’</div>, <div class='str'>‘e’</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(list[1])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                              FindAnswer:["a", "b", "c", "d"], 
                                              rightAnswer:"b"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>list = [<div class='str'>‘a’</div>, <div class='str'>‘b’</div>, <div class='str'>‘c’</div>, <div class='str'>‘d’</div>, <div class='str'>‘e’</div>]</div>
                                            <div class='multi'><div class='purp'>print</div>(list[3:])</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "What is the output of the code above?",
                                                FindAnswer:[ "['a', 'b']", "['b', 'a']", "['d', 'e']", "['e', 'd']"], 
                                                rightAnswer:"['d', 'e']"
                                            }
                                        }
                                    />
                                    <div class='code_block'>
                                        <div class='input'>
                                            <div class='multi'>list = [<div class='str'>‘a’</div>, <div class='str'>‘b’</div>, <div class='str'>‘c’</div>, <div class='str'>‘d’</div>, <div class='str'>‘e’</div>]</div>
                                        </div>
                                    </div>
                                    <Quiz 
                                        quizdata={
                                            {
                                                question: "How would you delete the letter c from the list above?",
                                                FindAnswer:[ "list.remove(‘c’)", "del list[2]", "list.pop(2)", "All of the above"], 
                                                rightAnswer:"All of the above"
                                            }
                                        }
                                    />
                                </Fragment> 
                                </div>
                                <div class="tab_label" label="Assignment">
                                    <div class='tab_header'>Task</div>
                                    <div class='paragraph'>Create a program that creates the list of number 11, 13, 4, 8, 7 in that order. Then, sort the numbers from smallest to largest. Finally, print the result.</div>
                                    
                                    <iframe height="400px" width="100%" src="https://repl.it/@SursumEducation/CSPUnit3Lesson5?lite=true" title="Code" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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

export default Unit3Lesson5;