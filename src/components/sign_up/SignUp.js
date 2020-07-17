import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/variables.scss'
import betaImg from '../../assets/images/beta-icon.svg'
import dataImg from '../../assets/images/data-icon.svg'
import './SignUp.scss'
import Section from '../common/Section'
import MediaQuery from 'react-responsive'

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
        <Section 
          id='sign-up'
          sectionClassName='sign-up'
          titleClassName="sign-up-title"
          title="BLA BLA"
          subtitleClassName="sign-up-subtitle"
          subtitle="Bla bla bla"></Section>
      </Container>
      <Container className='sign-up-cards'>
        <SignUpCard logoSrc={betaImg}
              text='Bla bla'
              redirectPath='/contact?type=beta_user'/>
        <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          <div className='cards-divider'></div>
        </MediaQuery>
        <SignUpCard logoSrc={dataImg}
              text='Bla bla bla'
              redirectPath='/contact?type=data_partner'/>
      </Container>
    </div>
  );
}

export default SignUp;
