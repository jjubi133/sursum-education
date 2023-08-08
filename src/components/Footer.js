import React from 'react';
import './styles/Footer.css';
import {Link} from 'react-router-dom';
import logo from '../images/final_logo_white.svg';

class Footer extends React.Component {
    render() {
        return (
            <div class ="footer">
                <div class = "footer-grid">
                    <div class = "footer-item footer_paragraph">
                        <h4>Summary</h4>
                        <p>Many thanks for exploring our program. We wish you the best in your endeavors and hope to inspire you to pursue an education in the sciences, as STEM is the fulcrum for future progress.</p>
                    </div>
                    <div class = "footer-item">
                        <h4>More About Us</h4>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/About">About</Link></p>
                        <p><Link to="/Contact">Contact</Link></p>
                    </div>
                    <div class = "footer-item">
                        <h4>Education</h4>
                        <p><Link to="/Demo">Demo</Link></p>
                        <p><Link to="/Courses">Courses</Link></p>
                    </div>
                </div>
                <div class="footer-contact">
                    <div class = "email">Please contact us at SursumEducation@gmail.com</div>
                    <div class = "sursum">® <img src={logo} alt="Sursum"/></div>
                </div>
            </div>
        )
      }
}

export default Footer;