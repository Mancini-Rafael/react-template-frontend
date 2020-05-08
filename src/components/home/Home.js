import React from 'react';
import Banner from './Banner';
import Carroussel from './Carroussel'
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
        <Banner title="Calculon is gonna kill us and it's all everybody else's fault!"
                subtitle="No! The cat shelter's on to me. Bender, hurry! 
                          This fuel's expensive! Also, we're dying! Goodbye, cruel world. 
                          Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what
                          would appear to be some sort of cruel muslin and the cute little
                          pom-pom curtain pull cords. Cruel though they may be…"
        />
        <Section sectionClassName='solutions'
                titleClassName="solutions-title"
                title="Soluções"
                subtitleClassName="solutions-subtitle"
                subtitle="Encontre a melhor solução para o seu negócio"></Section>
        <Carroussel></Carroussel>
        <Container className='rectangle'>
          <Section sectionClassName='platform'
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
                <div className='layerview-text'>Now that we know who you are, I know who I am.</div>  
              </Col>
              <div className='feature-divider'></div>
              <Col className='feature-reportview'>
                <Image src={reportviewImg} fluid className='reportviewImg'></Image>    
                <div className='reportview-title'>REPORTVIEW</div>  
                <div className='reportview-text'>Now that we know who you are, I know who I am.</div>  
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
