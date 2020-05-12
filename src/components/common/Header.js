import React from 'react';
import { Nav, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-Mapfry.svg'
import MediaQuery from 'react-responsive'

import './Header.scss'
import CTAButton from './CTAButton';

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

const DesktopHeader = () => {
  return (
    <Row>
      <Col className='logo'>
        <Link to='/'>
          <Image src={logo} />
        </Link>
      </Col>
      <Col className='main-menu' xs={8}>
        <Nav>
          <Nav.Item>
            <Link className='link' to='/about'>Sobre</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='link' to='/#solutions' onClick={() => scrollTo('solution-section')}>Soluções</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='link' to='/#platform' onClick={() => scrollTo('platform-section')}>Plataforma</Link>
          </Nav.Item>
          <Nav.Item>
            <a className='link' rel="noopener noreferrer" target='_blank' href='https://medium.com/@mapfry'>Blog</a>
          </Nav.Item>
          <Nav.Item>
            <CTAButton redirectPath='/contact?type=beta_user' className='CTA' title='
            m beta tester' />
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  )
}
const MobileHeader = () => {
  return (
    <Row>
      <Col className='logo'>
        <Link to='/'>
          <Image src={logo} />
        </Link>
      </Col>
      <Col className='main-menu' xs={8}>
        <Nav>
          <Nav.Item>
            <Link className='link' to='/about'>Sobre</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='link' to='/#solutions' onClick={() => scrollTo('solution-section')}>Soluções</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='link' to='/#platform' onClick={() => scrollTo('platform-section')}>Plataforma</Link>
          </Nav.Item>
          <Nav.Item>
            <a className='link' rel="noopener noreferrer" target='_blank' href='https://medium.com/@mapfry'>Blog</a>
          </Nav.Item>
          <Nav.Item>
            <CTAButton redirectPath='/contact?type=beta_user' className='CTA' title='
            m beta tester' />
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  )
}


function Header() {
  return (
    <Container className='header'>
      <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        <MobileHeader />
      </MediaQuery>
      <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        <DesktopHeader />
      </MediaQuery>
    </Container>
  );
}


export default Header;
