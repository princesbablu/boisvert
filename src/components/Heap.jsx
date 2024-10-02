
import { Container, Row, Col } from 'react-bootstrap'
import img_1 from '../assets/img/heap-img-1.gif'
import img_2 from '../assets/img/heap-img-2.gif'
import img_3 from '../assets/img/heap-img-3.png'

export default function Heap() {
    return (
        <div className='heap'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs="12">
                        <div className="heap-title">
                            <h1>Aeath N3 heap</h1>
                            <p>one by one they all fall downdawn becomes dusk <br />as silence grows loud <br />lows rided high with frens</p>
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="heap-wrap">
                            <div className="heap-img">
                                <img src={img_1} alt="" className="img1" />
                                <div className="img img2">
                                    <img src={img_2} alt="" />
                                </div>
                                <img src={img_3} alt="" className="img3" />
                            </div>
                            <h1>wectb</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
