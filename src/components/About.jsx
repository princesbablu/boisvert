import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../assets/img/about-img.png'

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs='12' xl='10'>
            <div className="about-title">
              <h2>welcome to the Boisvert </h2>
            </div>
          </Col>
          <Col xs='12'>
            <div className="about-wrap d-flex justify-content-center justify-content-lg-between">
              <div className="about-wrap-left">
                <div className="img"><img src={aboutImg} alt="" /></div>
                <h2>LIFE AND AEATH</h2>
              </div>
              <div className="about-wrap-right">
                <p className='p1'>DEMONHOURDEATHWISH TV presents SZN 1 of happyfox666</p>
                <div className="bottom">
                  <div className="about-wrap-right-btn d-flex align-items-center justify-content-center">
                    <a href="#" className="btn">Telegram</a>
                    <a href="#" className="btn">Telegram</a>
                    <a href="#" className="btn">Dexscreamer</a>
                  </div>
                  <p className='p2'>a happyfox who meets his end & the reaper who he calls his friend</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
