import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import MediaQuery from 'react-responsive'
import './Footer.scss';
import { Link } from 'react-router-dom';

const findPos = (obj) => {
  var curtop = 0;
  if (!!obj && obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
      // eslint-disable-next-line
    } while (obj = obj.offsetParent);
    return [curtop];
  }
}

const scrollTo = (objId) => {
  return (
    window.scroll(0, findPos(document.getElementById(objId)))
  )
}


function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='logo'>
            <Link to='/'>
              <Image src="https://dummyimage.com/107x31/000/fff" />
            </Link>
          </Col>
        </Row>
        <Row className='link-row'>
          <Col className='links' xs={6}>
            <Row>
              <Col className='first'>
                <div className='title'>BLABLA</div>
                <Link to='/about'>
                  <div className='text-link'>BLABLA</div>
                </Link>
                <a rel="noopener noreferrer" target='_blank' href='https://medium.com/'>
                  <div className='text-link'>Bla</div>
                </a>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/company/'>
                  <div className='text-link'>Linkedin</div>
                </a>
              </Col>
              <Col className='second'>
                <div className='title'>Blabla</div>
                <div className='text-link' onClick={() => scrollTo('solution-section')}>Soluções</div>
                <div className='text-link' onClick={() => scrollTo('platform-section')}>Plataforma</div>
              </Col>
              <Col className='third'>
                <div className='title'>CONTATO</div>
                <Link to='/contact?type=default'>
                  <div className='text-link'>email@host.com</div>
                </Link>

              </Col>
            </Row>
          </Col>
        </Row>
        <div className='feature-divider'></div>
        <Row className='bottom-row'>
          <Col className='bottom-col'>
            <div className='title'>Blabla 2020</div>
            <div className='copyright-info text-link'>Copyright 2020 @ Blabla. Todos os direitos reservados.</div>
            <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
              <div className='links'>
                <a rel="noopener noreferrer" target='_blank' href='https://medium.com/'>
                  <div className='title'>MEDIUM</div>
                </a>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/'>
                  <div className='title'>LINKEDIN</div>
                </a>
              </div>
            </MediaQuery>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;