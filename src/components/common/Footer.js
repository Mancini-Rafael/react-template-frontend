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
        <Col className='links' xs={8}>
          <Row>
            <Col>
              <div className='title'>Home</div>
              <div className='text-link'>Sobre Nós</div>
              <div className='text-link'>Nosso time</div>
              <div className='text-link'>Blog</div>
            </Col>
            <Col>
              <div className='title'>Soluções</div>
              <div className='text-link'>Estudos</div>
              <div className='text-link'>Dados</div>
              <div className='text-link'>Modelos Estatísticos</div>
            </Col>
            <Col>
              <div className='title'>Plataforma</div>
              <div className='text-link'>Funcionalidades</div>
              <div className='text-link'>Aplicação</div>
              <div className='text-link'>Ser um beta tester</div>
            </Col>
            <Col>
              <div className='title'>Contato</div>
              <div className='text-link'>hello@mapfry.com</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='feature-divider'></div>
      <Row className='bottom-row'>
        <Col className='bottom-col'>
          <div className='title'>MAPFRY 2020</div>
          <div className='title-link'>A CARTO (carto.com) apoia este projeto por meio de seu programa de suporte a iniciativas para o bem social. </div>
          <div className='title'> MEDIUM LINKEDIN</div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;