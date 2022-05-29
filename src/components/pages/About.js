import React from 'react';
import myself from '../../img/myself.jpg'
import {Col} from 'react-bootstrap'
const bgColors = {"Default": "#f7f1ed",
                   "peach" : "#febeb0",
                   "stone" : "#3d5a5b",
                   "glacier" : "#2f365f",
};

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
export default function About() {
    return(
        
        <div>
            <div>
            <div style={style}>footer</div>
            <div style={{backgroundColor: bgColors.peach }}>

            
            <h1>About Me</h1>
            <p>Helllllo! My name is Jalen Atkinson and I am currently a student at Georgia Tech. My planned career plan is to be a UX/UI designer.
                        I am born and raised from Atlanta Georgia, my hobbies are traveling, playing video games, making music and watching anime! 
                        I recently graduated from Druid Hills High School in 2021.</p>
        <Col sm={2} className="m-auto">
<img src={myself} class="img-fluid" width="300" alt="picture of myself"/>
</Col>
  </div>
  </div>
        </div>

    );
}