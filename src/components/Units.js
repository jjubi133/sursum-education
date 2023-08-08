import React from 'react';
import './styles/Units.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import fire from '../config/Fire';
import python from'../images/python.png';
import csp from'../images/csp.png';

//☰

class Units extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = ({
            user: null,
          });
        }; 
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div class = "container">

                <div class = "home_section">
                    <div class = "unit_section_header"><Slide left><div><h3>Courses</h3></div></Slide></div>
                    <div class='side_buttons'>
                            <div class="logout_button"><Slide right><div><button onClick={this.logout}><h3>Logout</h3></button></div></Slide></div>     
                    </div>
                    
                        <Fade up><div>
                            <div class='course_grid'>
                                <div class='course'>
                                    <Link to="/Python">
                                        <button>
                                            <h1>Python</h1>
                                            <img src={python} alt='python'/>
                                        </button>
                                    </Link>
                                </div>
                                <div class='course'>
                                    <Link to="/CSP">
                                        <button>
                                            <h1>Computer Science Principles</h1>
                                            <img src={csp} alt='csp'/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div></Fade>
                </div>
            </div>
        )
      }
}

export default Units;