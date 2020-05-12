import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import Section from '../common/Section'
import linkedinLogo from '../../assets/images/logo-linkedin-icon.svg';
import maurilioImg from '../../assets/images/team_photo_maurilio.png';
import ryuImg from '../../assets/images/team_photo_ryu.png';
import joaoImg from '../../assets/images/team_photo_joao.png';
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
      <Container className='who-are-we'>
        <Section id='who-are-we' sectionClassName='who-are-we'
                titleClassName="who-are-we-title"
                title="QUEM SOMOS"
                subtitleClassName="who-are-we-subtitle"
                subtitle="Veteranos em geomarketing" />
        <div className='about-formula'>MAPAS + DADOS + TECNOLOGIA = TRANSFORMAÇÃO</div>
        <div className='about-description'>
          <p>
            Com uma trajetória  de muitos anos de dedicação ao Geomarketing, nossos caminhos se 
            cruzaram e desde então começamos a imaginar como poderíamos construir algo juntos. 
            Partimos da paixão comum por mapas, dados, tecnologia e do incrível poder que esta 
            combinação têm para transformar a vida cotidiana e chegar a soluções que tenham um 
            verdadeiro impacto na sociedade.
          </p>
          <p>
            Combinamos um grande volume de informações e em diferentes formas. Sendo assim, na 
            Mapfry conseguimos aproximar análises do mundo real em um ambiente que proporciona 
            a geração de insights para a solução de problemas de regiões e grandes cidades.
          </p>
        </div>
        <Section id='our-team' sectionClassName='our-team'
                 titleClassName="our-team-title"
                 title="NOSSO TIME"/>
      </Container>
      <div className='team-cards'>
        {/* TODO ADD CORRECT */}
        <MemberCard
          title='DADOS'
          name='Maurilio Soares'
          imgSrc={maurilioImg}
          linkedinSrc='https://www.linkedin.com/in/mauriliojbsoares/'
        />
        <MemberCard
          title='SOLUÇÕES'
          name='João Caetano'
          imgSrc={joaoImg}
          linkedinSrc='https://www.linkedin.com/in/joao-eduardo-caetano/'
        />
        <MemberCard
          title='TECNOLOGIA'
          name='Ryuichi Ogawa'
          imgSrc={ryuImg}
          linkedinSrc='https://www.linkedin.com/in/ryuichiogawa/'
        />
      </div>
    </div>
  );
}

export default About;
