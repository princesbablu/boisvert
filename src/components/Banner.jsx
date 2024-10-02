
import { Container, Row, Col } from 'react-bootstrap'
import img_1 from '../assets/img/banner/1.gif'
import img_2 from '../assets/img/banner/2.gif'
import img_3 from '../assets/img/banner/3.gif'

export default function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs="12" lg="11" xl="10">
            <div className="banner-wrap">
              <div className="banner-img">
                <div className="item img1">
                  <img src={img_1} alt="" />
                </div>
                <div className="item img2">
                  <img src={img_3} alt="" />
                </div>
                <div className="item img3">
                  <img src={img_2} alt="" />
                </div>
              </div>
              <div className="banner-btn mt-2 d-flex align-items-center justify-content-center">
                <a href="#" className="btn">Telegram</a>
                <a href="#" className="btn">Dexscreamer</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
