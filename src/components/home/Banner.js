import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import BannerImg from '../../assets/images/banner.png'
import './Banner.css'
import CTAButton from '../common/CTAButton';

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
          <CTAButton redirectPath='/sign_up' title='Saiba Mais' carat={true} className='CTA-banner'></CTAButton>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
