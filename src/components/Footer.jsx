import React from 'react'
import {Container , Row, Col} from 'react-bootstrap'
import Social from './Social'
import img from '../assets/img/footer-img.png'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="footer-content">
              <img className='img' src={img} alt="" />
              <div className="top flex-wrap flex-md-nowrap justify-content-center d-flex align-items-center justify-content-md-between">
                <h4>Boisvert</h4>
                <div className="social d-flex align-items-center gap-4 gap-md-4">
                  <p>Follow Us</p>
                  <Social />
                </div>
              </div>
              <div className="bottom  text-center text-md-start flex-wrap flex-md-nowrap justify-content-center d-flex align-items-center justify-content-md-between">
                <p><span>Boisvert</span> Copyright  ©  2024, All rights reserved</p>
                <div className="link d-flex gap-4">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
