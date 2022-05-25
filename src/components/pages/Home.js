import React from 'react';
import {Col} from 'react-bootstrap';
import portfolioImage from '../../img/space.jpg'
export default function Home() {
    return (
       
              <div className="App">
                
                <Col sm={2} className="m-auto">
                  <img src={portfolioImage}  width="300" alt="portfolio image1"/>
                </Col>
              </div>
            );
          }
    