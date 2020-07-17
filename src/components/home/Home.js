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
      <Banner title="Lorem ipsum"
        subtitle="Lorem ipsum"
      />
      <Section id='solution' sectionClassName='solutions'
        titleClassName="solutions-title"
        title="LOREM"
        subtitleClassName="solutions-subtitle"
        subtitle="Lorem Ipsum"></Section>
      <Carousel />
      <Container className='rectangle'>
        <Section id='platform' sectionClassName='platform'
          titleClassName="platform-title"
          title="BLABLA BLABLA"
          subtitleClassName="platform-subtitle"
          subtitle="Bla bla bla bla"></Section>
        <Container className='ilustracao-interface'>
          <Image src={ilustracaoInterface} fluid className='ilustration'></Image>
        </Container>
        <CTAButton showCaret={true} caretColor='black' redirectPath='/sign_up' className='CTAInterface' title='Saiba mais' />
        <Container className='platform-features'>
          <Row>
            <Col className='feature-layerview'>
              <Image src={layerviewImg} fluid className='layerviewImg'></Image>
              <div className='layerview-title'>Bla bla</div>
              <div className='layerview-text'>Bla bla</div>
            </Col>
            <div className='feature-divider'></div>
            <Col className='feature-reportview'>
              <Image src={reportviewImg} fluid className='reportviewImg'></Image>
              <div className='reportview-title'>Bla bla</div>
              <div className='reportview-text'>Bla bla bla</div>
            </Col>
          </Row>
        </Container>
        <Section
          id='pandemic'
          sectionClassName='pandemic'
          titleClassName="pandemic-title"
          title="COVID-19"
          subtitleClassName="pandemic-subtitle"
          subtitle=" Bla bla bla"></Section>
        <div className='pandemic-description'>
          Bla bla bla
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
      <Banner title="Bla bla"
        subtitle="bla bla"
      />
      <Section id='solution' sectionClassName='solutions'
        titleClassName="solutions-title"
        title="BLABLA"
        subtitleClassName="solutions-subtitle"
        subtitle="Bla bla bla"></Section>
      <Carousel></Carousel>
      <Container className='rectangle'>
        <Section id='platform' sectionClassName='platform'
          titleClassName="platform-title"
          title="Blabla"
          subtitleClassName="platform-subtitle"
          subtitle="Bla bla bla"></Section>
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
              <div className='layerview-title'>BLABLA</div>
              <div className='layerview-text'>Bla bla bla</div>
            </Col>
          </Row>
          <div className='feature-divider'></div>
          <Row>
            <Col className='feature-reportview'>
              <Image src={reportviewImg} fluid className='reportviewImg'></Image>
              <div className='reportview-title'>BLABLA</div>
              <div className='reportview-text'>Bla bla bla</div>
            </Col>
          </Row>
        </Container>
        <Section 
          id='pandemic'
          sectionClassName='pandemic'
          titleClassName="pandemic-title"
          title="COVID-19"
          subtitleClassName="pandemic-subtitle"
          subtitle=" Bla bla bla"></Section>
        <div className='pandemic-description'>
          Bla Bla Bla Bla
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
