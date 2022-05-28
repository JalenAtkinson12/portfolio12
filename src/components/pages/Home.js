import React from 'react';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap'
import portfolioImage from '../../img/space.jpg'
const bgColors = {"Default": "#f7f1ed",
                   "peach" : "#febeb0",
                   "stone" : "#3d5a5b",
                   "glacier" : "#2f365f",
};
export default function Home() {
    return (
       
              <div className="App">
                <div style={{backgroundColor: bgColors.glacier }}>
                <Col xxl={9 } className="m-auto">
                  <Row xxl={1} className="l-auto">
                  <img src={portfolioImage} class="img-fluid" width={1000} height={1000} alt="portfolio image1"/>
                  </Row>
                </Col>
                </div>
              </div>
            );
          }

          
    