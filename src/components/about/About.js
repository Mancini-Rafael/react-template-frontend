import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Section from '../common/Section'
import './About.css'

const MemberCard = (props) => {
  return (
    <Card className='team-card'>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title className='card-topic'>{props.title}</Card.Title>
        <Card.Title className='card-name'>{props.name}</Card.Title>
        <Image className='card-linkedin-logo' src={props.linkedinSrc}/>
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
                title="Quem Somos"
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
                    title="Nosso Time"/>
      </Container>
      <div className='team-cards'>
        <MemberCard
          title='Dados'
          name='Maurilio Soares'
          imgSrc='https://via.placeholder.com/297x361.png?text=Dados'
          linkedinSrc='https://via.placeholder.com/21x21.png'
        />
        <MemberCard
          title='Soluções'
          name='João Caetano'
          imgSrc='https://via.placeholder.com/297x361.png?text=Soluções'
          linkedinSrc='https://via.placeholder.com/21x21.png'
        />
        <MemberCard
          title='Tecnologia'
          name='Ryuichi Ogawa'
          imgSrc='https://via.placeholder.com/297x361.png?text=Tecnologia'
          linkedinSrc='https://via.placeholder.com/21x21.png'
        />
      </div>
    </div>
  );
}

export default About;
