import React from 'react';
import { Nav, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-Mapfry.svg'
import './Header.css'
import CTAButton from './CTAButton';

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
              <Link to='/#solutions'>Soluções</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/#platform'>Plataforma</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/contact'>Contato</Link>
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
