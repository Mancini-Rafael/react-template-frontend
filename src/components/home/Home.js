import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel'
import Zoom from 'react-reveal/Zoom';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Section from '../common/Section'
import Heatmap from './Heatmap'
import MediaQuery from 'react-responsive'
import ilustracaoInterface from '../../assets/images/ilustracao-interface.png'
import ilustracaoInterfaceMobile from '../../assets/images/ilustracao_mobile.png'
import layerviewImg from '../../assets/images/layer_view_logo.svg'
import reportviewImg from '../../assets/images/report-view.png'
import CTAButton from '../common/CTAButton';

import './Home.scss'

const DesktopHomePage = () => {
  return (
    <div>
      <Banner title="Um mundo novo começa agora."
        subtitle="Comece a entender esse novo momento econômico e social.
                  A Mapfry nasceu em meio à crise do Coronavírus e estruturou seus conteúdos 
                  considerando as principais mudanças que estão em curso."
      />
      <Section id='solution' sectionClassName='solutions'
        titleClassName="solutions-title"
        title="SOLUÇÕES"
        subtitleClassName="solutions-subtitle"
        subtitle="Encontre a melhor solução para o seu negócio"></Section>
      <Carousel />
      <Container className='rectangle'>
        <Section id='platform' sectionClassName='platform'
          titleClassName="platform-title"
          title="PLATAFORMA MAPFRY"
          subtitleClassName="platform-subtitle"
          subtitle="Faça parte da nova solução de Geomarketing"></Section>
        <Container className='ilustracao-interface'>
          <Image src={ilustracaoInterface} fluid className='ilustration'></Image>
        </Container>
        <CTAButton showCaret={true} caretColor='black' redirectPath='/contact?type=beta_user' className='CTAInterface' title='Saiba mais' />
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
        <Section
          id='pandemic'
          sectionClassName='pandemic'
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
        <Zoom>
          <Heatmap />
        </Zoom>
        <CTAButton showCaret={true} caretColor='pink' redirectPath='/contact?type=default' className='CTAPandemic' title='Receber o estudo completo' />
      </Container>
    </div>
  )
}
const MobileHomePage = () => {
  return (
    <div>
      <Banner title="Um mundo novo começa agora."
        subtitle="Comece a entender esse novo momento econômico e social. 
                  A Mapfry nasceu em meio à crise do Coronavírus e estruturou seus conteúdos 
                  considerando as principais mudanças que estão em curso."
      />
      <Section id='solution' sectionClassName='solutions'
        titleClassName="solutions-title"
        title="SOLUÇÕES"
        subtitleClassName="solutions-subtitle"
        subtitle="Encontre a melhor solução para o seu negócio"></Section>
      <Carousel></Carousel>
      <Container className='rectangle'>
        <Section id='platform' sectionClassName='platform'
          titleClassName="platform-title"
          title="Soluções"
          subtitleClassName="platform-subtitle"
          subtitle="Faça parte da nova solução de Geomarketing"></Section>
        <Container className='ilustracao-interface'>
          <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
            <Image src={ilustracaoInterfaceMobile} fluid className='ilustration'></Image>
          </MediaQuery>
          <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
            <Image src={ilustracaoInterface} fluid className='ilustration'></Image>
          </MediaQuery>

        </Container>
        <CTAButton showCaret={true} caretColor='black' redirectPath='/sign_up' className='CTAInterface' title='Saiba mais' />
        <Container className='platform-features'>
          <Row>
            <Col className='feature-layerview'>
              <Image src={layerviewImg} fluid className='layerviewImg'></Image>
              <div className='layerview-title'>LAYERVIEW</div>
              <div className='layerview-text'>Crie análises dinâmicas e tenha
                                                  a visualização dos dados em mapas</div>
            </Col>
          </Row>
          <div className='feature-divider'></div>
          <Row>
            <Col className='feature-reportview'>
              <Image src={reportviewImg} fluid className='reportviewImg'></Image>
              <div className='reportview-title'>REPORTVIEW</div>
              <div className='reportview-text'>Visualize seus dados em dashboards e tome decisões sólidas</div>
            </Col>
          </Row>
        </Container>
        <Section 
          id='pandemic'
          sectionClassName='pandemic'
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
        <Zoom>
          <Heatmap />
        </Zoom>
        <CTAButton showCaret={true} caretColor='pink' redirectPath='/contact?type=default' className='CTAPandemic' title='Receber o estudo completo' />
      </Container>
    </div>
  )
}



function Home() {
  return (
    <Container className='home-page'>
      <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        <MobileHomePage />
      </MediaQuery>
      <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
        <DesktopHomePage />
      </MediaQuery>
    </Container>
  );
}

export default Home;
