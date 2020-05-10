import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import './Contact.css';
import ContactForm from './ContactForm';
import checkSymbol from '../../assets/images/check-symbol.png'

const contactTexts = {
  beta_user: {
    text: 'Seja um usuário beta e tenha acesso a plataforma Mapfry'
  },
  data_partner: {
    text: 'Cadastre-se como parceiro de dados Mapfry e tenha nossa plataforma …'
  },
  default: {
    text: 'Cadastre-se e receba conteúdos que preparamos para você'
  }
}

const ContactPage = (props) => {
  return (
    <Container>
      <Row>
        <Col className='description'>{eval(`contactTexts.${props.contactType}.text`)}</Col>
        <Col>
          <ContactForm animateFormSent={props.animateFormSent} />
        </Col>
      </Row>
    </Container>
  )
}

const Animation = (props) => {
  return (
    <Zoom>
      <div className='email-sent-container'>
        <Image className='all-ok' src={checkSymbol} />
        <div className='confirmation-title'>Cadastro Realizado!</div>
        <div className='confirmation-description'>Tudo pronto para você receber os melhores estudos da Mapfry.</div>
        <div className='go-back'>
          <div>
            <Image src='https://via.placeholder.com/8x12.png' />
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
    console.log('TIME TO ANIMATE THE PAGE')
    changeSentContact(true)
  }
  useEffect(() => {
    changeContactType(queryString.parse(location.search).type)
  });

  return (
    <div className='contact'>
      {sentContact ? <Animation /> : <ContactPage contactType={contactType}
        animateFormSent={animateForm} />}
    </div>
  );
}

export default Contact;
