import React, { useState } from 'react';
import { Nav, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import { push as MobileMenu } from 'react-burger-menu'

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
          <Image src="https://dummyimage.com/107x31/000/fff" />
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
            <a className='link' rel="noopener noreferrer" target='_blank' href='https://medium.com/'>Blog</a>
          </Nav.Item>
          <Nav.Item>
            <CTAButton redirectPath='/contact?type=beta_user' className='CTA' title='Ser um beta tester' />
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  )
}
const MobileHeader = () => {
  const handleMenuChange = (state) => {
    var el = document.getElementById("mobile-logo");
    if (state.isOpen === true) {
      setMenuOpen(true)
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  };

  const [menuShow, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false)
  };

  return (
    <div>
      <MobileMenu isOpen={menuShow} onStateChange={handleMenuChange} noOverlay disableAutoFocus right width={'100%'}>
        <Link className='logo' onClick={closeMenu} to='/'><Image src="https://dummyimage.com/107x31/000/fff" /></Link>
        <Link className='orange' onClick={closeMenu} to='/contact?type=beta_user'>Ser um usuário beta</Link>
        <Link className='orange' onClick={closeMenu} to='/contact?type=data_partner'>Ser um parceiro de dados</Link>
        <Link onClick={closeMenu} to='/about'>Sobre nós</Link>
        <Link onClick={closeMenu} to='/sign_up'>Contato</Link>
        <a onClick={closeMenu} rel="noopener noreferrer" target='_blank' href='https://medium.com/'>Blog</a>
        <a onClick={closeMenu} rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/'>LinkedIn</a>
      </MobileMenu>
      <Link onClick={closeMenu} id='mobile-logo' className='logo' to='/'><Image src="https://dummyimage.com/107x31/000/fff" /></Link>
    </div>
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
