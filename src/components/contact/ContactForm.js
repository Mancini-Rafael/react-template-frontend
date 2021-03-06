import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import blackCaretImg from '../../assets/images/caret.svg';
import './ContactForm.scss'

function ContactForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      const data = new FormData(event.target);
      fetch(`${process.env.REACT_APP_EMAIL_ENDPOINT}`, {
        method: 'POST',
        body: data,
      });
      props.animateFormSent()
    }
    setValidated(true);
  };

  return (
    <div className='form-container'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="contact-name">
          <Form.Label>Nome *</Form.Label>
          <Form.Control required name='nome' type="text" placeholder="Seu nome" />
          <Form.Control.Feedback type="invalid">
            Por favor preencha seu nome.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contact-company">
          <Form.Label>Empresa *</Form.Label>
          <Form.Control required name='empresa' type="text" placeholder="Sua empresa" />
          <Form.Control.Feedback type="invalid">
            Por favor preencha sua empresa.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contact-phone">
          <Form.Label>Telefone *</Form.Label>
          <Form.Control required name='telefone' type="text" placeholder="Número de telefone" />
          <Form.Control.Feedback type="invalid">
            Por favor preencha um telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contact-email">
          <Form.Label>Email *</Form.Label>
          <Form.Control required name='email' type="email" placeholder="email@teste.com" />
          <Form.Control.Feedback type="invalid">
            Por favor preencha um e-mail válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contact-message">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows="3" name='message' />
        </Form.Group>
        <Form.Group controlId="contact-newsletter-accept">
          <Form.Check type="checkbox" name='receberEmail' defaultChecked={true} label="Quero receber e-mails e novidades" />
        </Form.Group>
        <Button type='submit' title='Cadastrar' className="call-to-action outline-light CTAFormSubmit" variant='light'>
          Cadastrar <Image src={blackCaretImg} fluid />
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
