import React from 'react';
import './styles/Contact.css';
import Slide from 'react-reveal/Slide';

class Contact extends React.Component {
    render() {
        return (
            <div class = "container">

                <div class = "home_section">
                <div class = "home_section_header"><Slide left><div><h3>Contact Us</h3></div></Slide></div>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />

                        <label>Name <input type="text" name="name" id="name" placeholder="Your name..." required/></label>
                        <label>Email Address <input type="email" name="email" id="email" placeholder="Your email..." required/></label>
                        <label>Subject <input type="text" name="subject" id="subject" placeholder="Insert subject here..." required/></label>
                        <label>Message <textarea name="message" id="message" rows="5" placeholder="Write your message here.." required/></label>

                        <div class = "form_buttons">
                            <input type="submit" value="Send" />
                            <label> </label>
                            <input type="reset" value="Clear" />
                        </div>
                    </form>
                </div>

            </div>
        )
      }
}

export default Contact;
