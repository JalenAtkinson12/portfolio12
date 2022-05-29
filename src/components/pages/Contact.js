import React from 'react';
import {Button} from 'react-bootstrap';
const style = {
    backgroundColor: "#febeb0",
    borderTop: "1px solid #febeb0",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };
export default function Contact() {
    return(
        
        <div>
            <div>
            <div style={style}>footer</div>
            
            <h1>Contact Me</h1>
            <address>
                        <a href="tel:+16785964833">678.596.4833</a>
                        <a href="jalenatkinson35@gmail.com">jalenatkinson35@gmail.com</a>
                        <Button variant= 'link'><a href="https://github.com/JalenAtkinson12">GitHub</a> </Button>
                        <Button variant= 'link'><a href="https://www.linkedin.com/in/jalen-atkinson-07232622b/">linkedin</a></Button>
                    </address>
            </div>
        </div>
    );
}