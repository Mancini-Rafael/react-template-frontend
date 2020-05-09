import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel'
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Section from '../common/Section'
import Heatmap from './Heatmap'
import ilustracaoInterface from '../../assets/images/ilustracao-interface.png'
import layerviewImg from '../../assets/images/layer_view_logo.svg'
import reportviewImg from '../../assets/images/report_view_logo.svg'
import CTAButton from '../common/CTAButton';
import Footer from '../common/Footer'
import './Home.css'

function Home() {
  
  return (
    <div>
      <Container>
        <Banner title="Começe a traçar o  seu plano de ação pós-crise"
                subtitle="A Mapfry reúne neste mapa informações de todos os
                          municípios brasileiros para ajudar a retomada econômica nas 
                          cidades mais afetadas pela pandemia do novo Coronavírus."
        />
        <Section id='solution' sectionClassName='solutions'
                titleClassName="solutions-title"
                title="Soluções"
                subtitleClassName="solutions-subtitle"
                subtitle="Encontre a melhor solução para o seu negócio"></Section>
        <Carousel></Carousel>
        <Container className='rectangle'>
          <Section id='platform' sectionClassName='platform'
                  titleClassName="platform-title"
                  title="PLATAFORMA MAPFRY"
                  subtitleClassName="platform-subtitle"
                  subtitle="Faça parte da nova solução de Geomarketing"></Section>
          <Container className='ilustracao-interface'>
            <Image src={ilustracaoInterface} fluid className='ilustration'></Image>
          </Container>
          <Link to='/contact'>
            <CTAButton className='CTAInterface' title='Ser um Beta Tester'/>
          </Link>
          <Container className='platform-features'>
            <Row>
              <Col className='feature-layerview'>
                <Image src={layerviewImg} fluid className='layerviewImg'></Image>
                <div className='layerview-title'>LAYERVIEW</div>  
                <div className='layerview-text'>Crie análises dinâmicas e tenha 
                                                a visualização dos dados em mapas</div>  
              </Col>
              <div className='feature-divider'></div>
              <Col className='feature-reportview'>
                <Image src={reportviewImg} fluid className='reportviewImg'></Image>    
                <div className='reportview-title'>REPORTVIEW</div>  
                <div className='reportview-text'>Visualize seus dados em dashboards e tome decisões sólidas</div>  
              </Col> 
            </Row>
          </Container>
          <Section sectionClassName='pandemic'
                  titleClassName="pandemic-title"
                  title="COVID-19"
                  subtitleClassName="pandemic-subtitle"
                  subtitle=" Mapa econômico brasileiro"></Section>
          <div className='pandemic-description'>
            Cadastre-se para acessar o estudo que 
            mostra a situação econômica dos municípios,
            sua exposição à epidemia o os principais
            desafios para a recuperação.
          </div>
          <Heatmap/>
          <Link to='/contact'>
            <CTAButton className='CTAPandemic' title='Receber o estudo completo'/>
          </Link>
        </Container>
      </Container>
      <Footer/>
    </div>
    
    
  );
}

export default Home;
