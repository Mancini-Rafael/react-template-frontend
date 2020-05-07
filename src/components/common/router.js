import React, { useState } from '../../../node_modules/react';
import { Nav, Navbar, NavDropdown } from '../../../node_modules/react-bootstrap';
import '../../styles/common/router.css'
import {BrowserRouter as BRouter, Switch, Route, Link}from 'react-router-dom';
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import CTAButton from './CTAButton';

function Router() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BRouter>
      <Navbar>
        <Link to='/'>
          <Navbar.Brand>Mapfry</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown onMouseEnter = { () => setIsOpen(true) }
                         onMouseLeave = { () => setIsOpen(false) }
                         show = { isOpen }
                         title="Sobre" >
              <Link to='/about'>
                <NavDropdown.Item>Quem Somos</NavDropdown.Item>
              </Link>
              <Link to='/about'>
                <NavDropdown.Item>Nosso Time</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Nav.Link>Soluções</Nav.Link>
            <Nav.Link>Plataforma</Nav.Link>
            <Link to='/contact'>
              <Nav.Item>Contato</Nav.Item>
            </Link>
            <Link to='/contact'>
              <CTAButton title='Ser um Beta Tester' className='justify-content-end'/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/contact' exact component={Contact}></Route>
      </Switch>
    </BRouter>
  );
}


export default Router;
