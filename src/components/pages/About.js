import React from 'react';
import myself from '../../img/myself.jpg'
import {Col} from 'react-bootstrap'
export default function About() {
    return(
        <div>
            <h1>About Me</h1>
            <p>Helllllo! My name is Jalen Atkinson and I am currently a student at Georgia Tech. My planned career plan is to be a UX/UI designer.
                        I am born and raised from Atlanta Georgia, my hobbies are traveling, playing video games, making music and watching anime! 
                        I recently graduated from Druid Hills High School in 2021.</p>
        <Col sm={2} className="m-auto">
<img src={myself} class="img-fluid" width="300" alt="picture of myself"/>
</Col>
        </div>

    );
}