import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './Footer.scss';
import logo from '../../assets/images/Logo-Mapfry.svg'
import { Link } from 'react-router-dom';

const findPos = (obj) => {
  var curtop = 0;
  if (!!obj && obj.offsetParent) {
      do { 
        curtop += obj.offsetTop;
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
              <Link to='/about'>
                <div className='text-link'>Sobre Nós</div>
              </Link>              
              <a rel="noopener noreferrer" target='_blank' href='https://medium.com/@mapfry'>
                <div className='text-link'>Blog</div>
              </a>
              <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/company/mapfry/'>
                <div className='text-link'>Linkedin</div>
              </a>
            </Col>
            <Col>
              <div className='title'>MAPFRY</div>
              <div className='text-link' onClick={ () => scrollTo('solution-section') }>Soluções</div>
              <div className='text-link' onClick={ () => scrollTo('platform-section')}>Plataforma</div>
            </Col>
            <Col>
              <div className='title'>CONTATO</div>
              <Link to='/contact?type=default'>
                <div className='text-link'>hello@mapfry.com</div>
              </Link>              
              
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='feature-divider'></div>
      <Row className='bottom-row'>
        <Col className='bottom-col'>
          <div className='title'>MAPFRY 2020</div>
          <div className='links'>
            <a rel="noopener noreferrer" target='_blank' href='https://medium.com/@mapfry'>
              <div className='title'>MEDIUM</div>
            </a>
            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/company/mapfry/'>
              <div className='title'>LINKEDIN</div>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;