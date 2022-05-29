import React from 'react';
import {Card, Row} from 'react-bootstrap';
import projectImage1 from '../../img/eventplan.png'
import projectImage2 from '../../img/postboard.png'
import projectImage3 from '../../img/passwordpic.png'
import projectImage4 from '../../img/weather-screenshot.png'
import projectImage5 from '../../img/Jate.png'

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

export default function Contact() {
    return(
        
        <div>
            <div>
            <div style={style}>footer</div>
            
            <div style={{backgroundColor: bgColors.peach }}>

            
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
            <Card.Title>Random Password generator</Card.Title>
            <Card.Text>
            Random password generator!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://jalenatkinson12.github.io/pwdGENERATOR/">Password generator</Card.Link>
        </Card.Body>
        </Card>     
                    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {projectImage4} />
        <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
            5 day forecast weather dashboard!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://jalenatkinson12.github.io/Weather-Forecast/">Weather Dashboard</Card.Link>
        </Card.Body>
        </Card>     
        
                    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {projectImage5} />
        <Card.Body>
            <Card.Title>J.A.T.E</Card.Title>
            <Card.Text>
            J.A.T.E(just another text editor)is a simple text editor that can also be downloaded!
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="https://safe-reef-44396.herokuapp.com/">Text Editor</Card.Link>
        </Card.Body>
        </Card>     
        

 </Row>
       </div>
       </div>
        </div>
    );
}