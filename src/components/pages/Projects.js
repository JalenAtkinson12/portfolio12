import React from 'react';
import {Card, ListGroup, Row, Col} from 'react-bootstrap';
import projectImage1 from '../../img/eventplan.png'
import projectImage2 from '../../img/postboard.png'
import projectImage3 from '../../img/passwordpic.png'

export default function Contact() {
    return(
        <div>
            <h1>Projects!</h1>
            <p>Here are some of the projects that I worked on and contributed to</p>
     <Row xs={1} md={2} className="g-4">    
            <Card style={{ width: '18rem' }}>
   
   
   <Card.Img variant="top" src= {projectImage1} />
        <Card.Body>
            <Card.Title>EventPlan</Card.Title>
            <Card.Text>
            A site where users can search their location for upcoming music concerts!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://jdmill.github.io/Eventplan/">EventPlan</Card.Link>
        </Card.Body>
        </Card>
                    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {projectImage2} />
        <Card.Body>
            <Card.Title>Community Bulletin Board</Card.Title>
            <Card.Text>
            A npm package that allows users to create their own forum site!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://www.npmjs.com/package/@gtbootcampproject2/community-bulletin-board">Bulletin Board</Card.Link>
        </Card.Body>
        </Card>     
                    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {projectImage3} />
        <Card.Body>
            <Card.Title>Community Bulletin Board</Card.Title>
            <Card.Text>
            Random password generator!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://jalenatkinson12.github.io/pwdGENERATOR/">Password generator</Card.Link>
        </Card.Body>
        </Card>     
        

 </Row>
        </div>
    );
}