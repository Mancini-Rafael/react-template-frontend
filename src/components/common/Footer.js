import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Footer.css'
import logo from '../../assets/images/Logo-Mapfry.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <footer className='footer'>
      <Row>
        <Col className='logo'>
          <Link to='/'>
            <Image src={logo} />
          </Link>
        </Col>
      </Row>
      <Row className='link-row'>
        <Col className='links' xs={6}>
          <Row>
            <Col>
              <div className='title'>INSTITUCIONAL</div>
              <div className='text-link'>Sobre Nós</div>
              <div className='text-link'>Blog</div>
              <div className='text-link'>Linkedin</div>
            </Col>
            <Col>
              <div className='title'>MAPFRY</div>
              <div className='text-link'>Soluções</div>
              <div className='text-link'>Plataforma</div>
            </Col>
            <Col>
              <div className='title'>CONTATO</div>
              <div className='text-link'>hello@mapfry.com</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='feature-divider'></div>
      <Row className='bottom-row'>
        <Col className='bottom-col'>
          <div className='title'>MAPFRY 2020</div>
          <div className='title'> MEDIUM LINKEDIN</div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;