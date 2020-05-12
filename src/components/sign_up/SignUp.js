import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/variables.scss'
import betaImg from '../../assets/images/beta-icon.svg'
import dataImg from '../../assets/images/data-icon.svg'
import './SignUp.scss'
import Section from '../common/Section'

const SignUpCard = (props) => {
  return (
    <Link to={props.redirectPath}>
      <Card key={props.index}>
        <Card.Body>
          <Image src={props.logoSrc}/>
          <Card.Text className='card-text'>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

function SignUp(props) {
  return (
    <div className='sign-up-page'>
      <Container className='sign-up'>
        <Section sectionClassName='sign-up'
          titleClassName="sign-up-title"
          title="PLATAFORMA MAPFRY"
          subtitleClassName="sign-up-subtitle"
          subtitle="Faça parte da nova solução de Geomarketing"></Section>
      </Container>
      <Container className='sign-up-cards'>
        <SignUpCard logoSrc={betaImg}
              text='Ser um usuário beta'
              redirectPath='/contact?type=beta_user'/>
        <div className='cards-divider'></div>
        <SignUpCard logoSrc={dataImg}
              text='Ser um parceiro de dados'
              redirectPath='/contact?type=data_partner'/>
      </Container>
    </div>
  );
}

export default SignUp;
