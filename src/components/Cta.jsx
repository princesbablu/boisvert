import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/cta-img.gif'
import { PiBaby } from 'react-icons/pi'

export default function Cta() {
    return (
        <div className='cta'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs="12" md="10" lg="7">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col xs="12" lg="5">
                        <div className="cta-content text-center text-lg-start mt-4 mt-md-4 mt-lg-0">
                            <h3>Boisvert your aestiny with us</h3>
                            <div className="cta-content-btn d-flex align-items-center justify-content-center">
                                <a href="#" className="btn">Telegram</a>
                                <a href="#" className="btn">x</a>
                                <a href="#" className="btn">Dexscreamer</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
