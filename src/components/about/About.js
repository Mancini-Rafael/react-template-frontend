import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import Section from '../common/Section'
import linkedinLogo from '../../assets/images/logo-linkedin-icon.svg';
import MediaQuery from 'react-responsive'
import './About.scss'

const MemberCard = (props) => {
  return (
    <Card className='team-card'>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title className='card-topic'>{props.title}</Card.Title>
        <Card.Title className='card-name'>{props.name}</Card.Title>
        <a rel="noopener noreferrer" target='_blank' href={props.linkedinSrc}>
          <Image className='card-linkedin-logo' src={linkedinLogo}/>
        </a>
      </Card.Body>
    </Card>
  );
}


function About() {
  return (
    <div>
      <Container className='about'>
        <Section id='who-are-we' 
                sectionClassName='who-are-we'
                titleClassName="who-are-we-title"
                title="BLAB BLAB"
                subtitleClassName="who-are-we-subtitle"
                subtitle="Bla bla bla bla bla" />
        
        <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          <div className='about-formula'>LOREM IPSUM DOLOR SIM LAMET</div>
        </MediaQuery>
        <div className='about-description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          <div className='our-team-title'>
            LOREM IPSUM
          </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          <Section id='our-team'
                   sectionClassName='our-team'
                   titleClassName="our-team-title"
                    title="NOSSO TIME"/>
        </MediaQuery>
      </Container>
      <div className='team-cards'>
        <MemberCard
          title='DUMMY TEXT'
          name='BLABLA'
          imgSrc="https://dummyimage.com/299x361/000/fff"
          linkedinSrc='https://www.linkedin.com/in/bla/'
        />
        <MemberCard
          title='DUMMY TEXT'
          name='BLABLA'
          imgSrc="https://dummyimage.com/299x361/000/fff"
          linkedinSrc='https://www.linkedin.com/in/bla/'
        />
        <MemberCard
          title='DUMMY TEXT'
          name='BLABLA'
          imgSrc="https://dummyimage.com/299x361/000/fff"
          linkedinSrc='https://www.linkedin.com/in/bla/'
        />
      </div>
    </div>
  );
}

export default About;
