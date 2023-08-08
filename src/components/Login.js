import React, { Component } from 'react';
import fire from '../config/Fire';
import Slide from 'react-reveal/Slide';
import './styles/Login.css';

class Login extends Component {
    constructor (props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
            this.state = {
                email:'',
                password:''
            }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    login(e) {
        e.preventDefault();
        //so page wont reload
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            alert("Invalid Email or Password");
          });
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            //login form
           <div class="component">
                <div class="home_section">
                    <div class = "home_section_header"><Slide left><div><h3>Log in to access our extensive Units</h3></div></Slide></div>
                    <form>
                        <div class="form_section">
                            <div class="login_header">Email Address</div>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" />
                        </div>
                            <div class="form_section">
                            <div class="login_header">Password</div>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                        </div>
                        <div>
                        <div class = "login_buttons">
                            <button type="submit" onClick={this.login}>Login</button>
                            {/*<button onClick={this.signup} class="login_button">Signup</button>*/}
                        </div>
                        </div>   
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;