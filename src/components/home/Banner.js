import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import BannerImg from '../../assets/images/banner.png'

import './Banner.scss'

function Banner(props) {
  return (
    <Container className="banner">
      <Row>
        <Col>
          <div className='title'>
            {props.title}
          </div>
          <div className='subtitle'>
            {props.subtitle}
          </div>
          <Image src={BannerImg} fluid/>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
