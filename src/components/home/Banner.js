import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import BannerImg from '../../assets/images/banner.png'
import MediaQuery from 'react-responsive'

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
          <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
            <Image src={BannerImg} fluid/>
          </MediaQuery>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
