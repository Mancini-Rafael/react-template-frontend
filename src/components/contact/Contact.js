import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import MediaQuery from 'react-responsive'
import betaImg from '../../assets/images/beta-icon-black.svg'
import dataImg from '../../assets/images/data-icon-black.svg'
import './Contact.scss';
import whiteCaretImg from '../../assets/images/caret_white.svg';
import ContactForm from './ContactForm';
import checkSymbol from '../../assets/images/check-symbol.png'

// eslint-disable-next-line
const contactTexts = {
  beta_user: {
    text: 'Seja um usuário beta e conheça antes a plataforma Mapfry',
    confirmation: 'Que bom ter você aqui! Retornaremos seu contato com mais informações.'
  },
  data_partner: {
    text: 'Uma plataforma aberta para os melhores conteúdos. Venha fazer parte.',
    confirmation: 'Entraremos em contato para sabermos mais sobre a nossa parceria de dados'
  },
  default: {
    text: 'Cadastre-se e receba conteúdos que preparamos para você',
    confirmation: 'Tudo pronto para você receber os melhores estudos da Mapfry.'
  }
}

const ContactPage = (props) => {
  return (
    <Container>
      <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        {/* MOBILE */}
        <Row>
          <Col>
            {props.contactType === 'beta_user' &&
              <Image className='logo' src={betaImg} />}
            {props.contactType === 'data_partner' &&
              <Image className='logo' src={dataImg} />}
          </Col>
        </Row>
        <Row className='description-row'>
          <Col className='description'>
            {
              // eslint-disable-next-line
              eval(`contactTexts.${props.contactType}.text`)
            }
          </Col>
        </Row>
        <Row className='form-row'>
          <Col className='form'>
            <ContactForm animateFormSent={props.animateFormSent} />
          </Col>
        </Row>
      </MediaQuery>
      <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        {/* DESKTOP */}
        <Row>
          <Col className='description'>
            {
              // eslint-disable-next-line
              eval(`contactTexts.${props.contactType}.text`)
            }
          </Col>
          <Col className='form'>
            <ContactForm animateFormSent={props.animateFormSent} />
          </Col>
        </Row>
      </MediaQuery>
    </Container>
  )
}

const Animation = (props) => {
  return (
    <Zoom>
      <div className='email-sent-container'>
        <Image className='all-ok' src={checkSymbol} />
        <div className='confirmation-title'>Cadastro Realizado!</div>
        <div className='confirmation-description'>
          {
            // eslint-disable-next-line
            eval(`contactTexts.${props.contactType}.confirmation`)
          }
        </div>
        <div className='go-back'>
          <div>
            <Image src={whiteCaretImg} />
          </div>
          <div>
            <Link to='/' className='text'>
              VOLTAR PARA O SITE
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  )
}

function Contact({ location }) {
  const [contactType, setContactType] = useState('default')
  const [sentContact, setSentContact] = useState(false)
  const changeContactType = (type) => setContactType(type)
  const changeSentContact = (val) => setSentContact(val)
  const animateForm = () => {
    changeSentContact(true)
  }
  useEffect(() => {
    changeContactType(queryString.parse(location.search).type)
  });

  return (
    <div className='contact'>
      {sentContact ? <Animation contactType={contactType} /> : <ContactPage contactType={contactType}
        animateFormSent={animateForm} />}
    </div>
  );
}

export default Contact;
