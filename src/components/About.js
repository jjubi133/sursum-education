import React from 'react';
import './styles/About.css';
import Slide from 'react-reveal/Slide';

class About extends React.Component {
    render() {
        return (
            <div class = "container">

                <div class = "home_section">
                    <div class = "home_section_header"><Slide left><div><h3>About Us</h3></div></Slide></div>
                    <div class = "tab_text">
                        <p>Our team at Sursum has developed an education platform geared towards preparing young students worldwide for future careers in STEM (science, technology, engineering, and math). Students can access our valuable learning opportunities to not only strengthen their study skills, but also supplement their studies with knowledge in the ever-growing career field of STEM. We strive to foster a generation of thinkers and innovators, and we believe the immersive educational experience we have prepared will come to accomplish that.</p>

                        <p>Our passion and drive for the disciplines of science are well communicated through our program’s engaging coursework, so you will be exposed to an excellent education. </p>

                        <p>Many thanks for exploring our program. We wish you the best in your endeavors and hope to inspire you to pursue an education in the sciences, as STEM is the fulcrum for future progress. </p>
                    </div>
                </div>
            </div>
        )
      }
}

export default About;
