import React from 'react';
import {Button} from 'react-bootstrap';
export default function Contact() {
    return(
        <div>
            <h1>Contact Me</h1>
            <address>
                        <a href="tel:+16785964833">678.596.4833</a>
                        <a href="jalenatkinson35@gmail.com">jalenatkinson35@gmail.com</a>
                        <Button variant= 'link'><a href="https://github.com/JalenAtkinson12">GitHub</a> </Button>
                        <Button variant= 'link'><a href="https://www.linkedin.com/in/jalen-atkinson-07232622b/">linkedin</a></Button>
                    </address>

        </div>
    );
}