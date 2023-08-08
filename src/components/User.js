import React from 'react';
import './styles/Units.css';
import fire from '../config/Fire';
import Login from './Login.js';
import Units from './Units.js';

//☰

class User extends React.Component {
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
            <div class = "container">
                {this.state.user ? (<Units />) : (<Login />)}
                
            </div>
        )
      }
}

export default User;
