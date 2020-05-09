import React from 'react';
import { Nav, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-Mapfry.svg'
import './Header.css'
import CTAButton from './CTAButton';

const findPos = (obj) => {
  var curtop = 0;
  if (!!obj && obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}


function Header() {
  return (
    <Container className='header'>
      <Row>
        <Col className='logo'>
          <Link to='/'>
            <Image src={logo} />
          </Link>
        </Col>
        <Col className='main-menu' xs={8}>
          <Nav>
            <Nav.Item>
              <Link to='/about'>Sobre</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/#solutions' onClick={ () => window.scroll(0, findPos(document.getElementById("solution-section"))) }>Soluções</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/#platform' onClick={ () => window.scroll(0, findPos(document.getElementById("platform-section")))}>Plataforma</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/blog'>Blog</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/contact'>
                <CTAButton className='CTA' title='Ser um Beta Tester'/>
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}


export default Header;
