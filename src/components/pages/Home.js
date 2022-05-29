import React from 'react';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap'
import portfolioImage from '../../img/space.jpg'
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
export default function Home() {
    return (
       
              <div className="App">
                <div>
      <div style={style}>footer</div>
    
                <div style={{backgroundColor: bgColors.glacier }}>
                <Col xxl={9 } className="m-auto">
                  <Row xxl={1} className="l-auto">
                  <img src={portfolioImage} class="img-fluid" width={1000} height={1000} alt="portfolio image1"/>
                  </Row>
                </Col>
                </div>
                </div>
              </div>
            );
          }

          
    