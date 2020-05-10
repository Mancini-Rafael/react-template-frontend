import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slide from 'react-reveal/Slide';
import { Carousel as RRCarousel } from 'react-responsive-carousel';
import './Carousel.css'

const cardsInfo = {
  study: {
    info: [
      {
        title: 'ESTUDOS',
        topic: 'Identificação e Validação de Pontos',
        text: 'Encontre o melhor lugar para o seu negócio ou valide uma área de interesse'
      },
      {
        title: 'ESTUDOS',
        topic: 'Planejamento de Redes',
        text: 'Evite a canibalização entre unidades, crie sinergia entre seus pontos  e antecipe a sua expansão'
      },
      {
        title: 'ESTUDOS',
        topic: 'Desenho de Territórios',
        text: 'Entenda as características das áreas em que você pretende atuar'
      },
      {
        title: 'ESTUDOS',
        topic: 'Desenho de Territórios',
        text: 'Saiba qual é a tendência para as áreas em que seu imóvel ou terreno estão presentes'
      }
    ]
  },
  data: {
    info: [
      {
        title: 'DADOS',
        topic: 'Conteúdos de Mercado',
        text: 'Encontre o melhor lugar para o seu negócio ou valide uma área de interesse'
      },
      {
        title: 'DADOS',
        topic: 'Enriquecimento de bases de Dados',
        text: 'Evite a canibalização entre unidades, crie sinergia entre seus pontos  e antecipe a sua expansão'
      },
      {
        title: 'DADOS',
        topic: 'Leads',
        text: 'Utilize as bases de Empresas e Pontos de Interesse da Mapfry para chegar a novos clientes'
      },
      {
        title: 'DADOS',
        topic: 'Fluxo',
        text: 'Tenha uma visualização atualizada do tráfego de pessoas e veículos nas vias de seu interesse'
      },
      {
        title: 'DADOS',
        topic: 'Mercado Imobiliário',
        text: 'Tenha acesso a dados atualizados que mostram a evolução do mercado'
      },
      {
        title: 'DADOS',
        topic: 'Criminalidade',
        text: 'Dados de ocorrências criminais Bairro a Bairro com uma visão por tipo de ofensa e histórico'
      }
    ]
  },
  statistical_model: {
    info: [
      {
        title: 'MODELOS ESTATÍSTICOS',
        topic: 'Atratividade Comercial',
        text: 'Compare os dados de desempenho do seu negócio com o de regiões que pretende atingir'
      },
      {
        title: 'MODELOS ESTATÍSTICOS',
        topic: 'Espelhamento de oportunidades',
        text: 'Encontre áreas com oportunidades de performance semelhantes as dos seus negócios'
      },
      {
        title: 'MODELOS ESTATÍSTICOS',
        topic: 'PMA - Potencial Máximo Alcançável',
        text: 'Encontre áreas com oportunidades de performance semelhantes as dos seus negócios'
      },
      {
        title: 'MODELOS ESTATÍSTICOS',
        topic: 'Balanceamento de territórios',
        text: 'Equilibre sua presença de mercado com o tamanho das oportunidades'
      }
    ]
  }
}

const groupArray = (data, number_in_group) => {
  var group = [];
  for (var item_index = 0, group_index = 0; item_index < data.length; item_index++) {
    if (item_index >= number_in_group && item_index % number_in_group === 0) {
      group_index++;
    }
    group[group_index] = group[group_index] || [];
    group[group_index].push(data[item_index])
    if ((item_index === (data.length - 1)) && group[group_index].length % number_in_group !== 0) {
      var missing_numbers = [...Array(number_in_group - group[group_index].length).keys()];
      missing_numbers.forEach(function (item, index) {
        group[group_index].push(data[index])
      })
    }
  }
  return group;
}

const Cards = (props) => {
  return (
    <Card className={`carousel-cards ${props.subject}-card card`} key={props.index}>
      <div className={`${props.subject}-divider`}></div>
      <Card.Body>
        <Card.Title className='title'>{props.title}</Card.Title>
        <Card.Title className='topic'>{props.topic}</Card.Title>
        <Card.Text className='text'>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const CarouselByType = (props) => {
  return (
    <Slide right>
      <RRCarousel infiniteLoop={true}
        showArrows={true}
        autoPlay={true}
        stopOnHover={true}
        showStatus={false}>

        {groupArray(eval(`cardsInfo.${props.type}.info`), 3).map((item, index) => {
          return (
            <div key={index} className='carousel-cards'>
              <Cards index={Math.floor(Math.random() * Math.floor(10000))}
                subject={props.type}
                title={item[0].title}
                topic={item[0].topic}
                text={item[0].text} />
              <Cards index={Math.floor(Math.random() * Math.floor(10000))}
                subject={props.type}
                title={item[1].title}
                topic={item[1].topic}
                text={item[1].text} />
              <Cards index={Math.floor(Math.random() * Math.floor(10000))}
                subject={props.type}
                title={item[2].title}
                topic={item[2].topic}
                text={item[2].text} />
            </div>
          )
        })}
      </RRCarousel>
    </Slide>
  );
}

function Carousel() {
  const [carouselType, setCarouselType] = useState('study')
  const changeCarousel = (type) => setCarouselType(type)
  return (
    <Container className='carousel'>
      <div className='carousel-options-selector'>
        <div className={`option-study ${carouselType === 'study' ? 'active' : ''}`} onClick={() => changeCarousel('study')}>ESTUDOS</div>
        <div className={`option-data ${carouselType === 'data' ? 'active' : ''}`} onClick={() => changeCarousel('data')}>DADOS</div>
        <div className={`option-statistical-model ${carouselType === 'statistical-model' ? 'active' : ''}`} onClick={() => changeCarousel('statistical-model')}>MODELOS ESTATÍSTICOS</div>
      </div>
      {carouselType === 'study' ? <CarouselByType type='study' /> : null}
      {carouselType === 'data' ? <CarouselByType type='data' /> : null}
      {carouselType === 'statistical-model' ? <CarouselByType type='statistical_model' /> : null}
    </Container>
  );
}

export default Carousel;