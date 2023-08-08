import React from 'react';
import './styles/Header.css';
import logo from '../images/final_logo_white.svg';
import {Link} from 'react-router-dom';

class MenuButton extends React.Component {
    render() {
      return (
        <button id="roundButton" onMouseUp={this.props.handleMouseDown}></button>
      );
    }
}

class Menu extends React.Component {
    render() {
      var visibility = "hide";
   
      if (this.props.menuVisibility) {
        visibility = "show";
      }
   
      return (
        <div id="flyoutMenu" onMouseUp={this.props.handleMouseDown} className={visibility}>
            <div class='menu-links'>
                <div><Link class="line" to="/">Home</Link></div>
                <div><Link class="line" to="/About">About</Link></div>
                <div><Link class="line" to="/Contact">Contact</Link></div>
                <div><Link class="line" to="/Demo">Demo</Link></div>
                <div><Link class="line" to="/Courses">Courses</Link></div>
            </div>
        </div>
      );
    }
}

class Header extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            visible: false
        };
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    handleMouseDown(e) {
        this.toggleMenu();
        
        console.log("clicked");
        e.stopPropagation();
    }
    
    toggleMenu() {
        this.setState(
            {
            visible: !this.state.visible
            }
        );
    }
    
    render() {
        return (
            <div class="navbar">
                
                <div class = "navbar_left">
                    <Link class="line" to="/"><img class = "title" src = {logo} alt="logo"/></Link>
                </div>

                <div class = "navbar_right">
                    <div class = "normal_links">
                        <Link class = "navbar_right_links line" to="/">Home</Link>
                        <Link class = "navbar_right_links line" to="/About">About</Link>
                        <Link class = "navbar_right_links line" to="/Contact">Contact</Link>
                        <Link class = "navbar_right_links line" to="/Demo">Demo</Link>
                        <Link class = "navbar_right_links line" to="/Courses">Courses</Link>
                    </div>
                        
                    <div class = "dropdown">
                        <MenuButton handleMouseDown={this.handleMouseDown}/>
                        <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                    </div>
                </div>
                
            </div>
        )
      }
}

export default Header;