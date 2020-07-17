import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as RRCarousel } from 'react-responsive-carousel';

import './Carousel.scss'
import MediaQuery from 'react-responsive'

// eslint-disable-next-line
const cardsInfo = {
  study: {
    info: [
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      }
    ]
  },
  data: {
    info: [
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      }
    ]
  },
  statistical_model: {
    info: [
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
      },
      {
        title: 'BLA BLA',
        topic: 'Bla bla bla',
        text: 'Bla bla bla'
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
      // eslint-disable-next-line
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
  if (!!props.desktop) {
    return (
      <RRCarousel
        centerMode
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        centerSlidePercentage={80}>
        { // eslint-disable-next-line
          eval(`cardsInfo.${props.type}.info`).map((item, index) => {
            return (
              <div key={index} className='carousel-cards'>
                <Cards index={Math.floor(Math.random() * Math.floor(10000))}
                  subject={props.type}
                  title={item.title}
                  topic={item.topic}
                  text={item.text} />
              </div>
            )
          })
        }
      </RRCarousel>
    )
  } else if (!!props.mobile) {
    return (
      <RRCarousel infiniteLoop={true}
        showArrows={true}
        autoPlay={true}
        showThumbs={false}
        stopOnHover={true}
        showStatus={false}>
        { // eslint-disable-next-line
          groupArray(eval(`cardsInfo.${props.type}.info`), 3).map((item, index) => {
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
    )
  }
}

function Carousel() {
  const [carouselType, setCarouselType] = useState('study')
  const changeCarousel = (type) => setCarouselType(type)
  return (
    <Container className='carousel'>
      <div>
        <div className='options-selector'>
          <div className={`study ${carouselType === 'study' ? 'active' : ''}`} onClick={() => changeCarousel('study')}>BLABLA</div>
          <div className={`data ${carouselType === 'data' ? 'active' : ''}`} onClick={() => changeCarousel('data')}>BLABLA</div>
          <div className={`statistical-model ${carouselType === 'statistical-model' ? 'active' : ''}`} onClick={() => changeCarousel('statistical-model')}>BLABLA BLABLA</div>
        </div>
        <MediaQuery maxDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          {carouselType === 'study' ? <CarouselByType type='study' desktop={true} /> : null}
          {carouselType === 'data' ? <CarouselByType type='data' desktop={true} /> : null}
          {carouselType === 'statistical-model' ? <CarouselByType type='statistical_model' desktop={true} /> : null}
        </MediaQuery>
        <MediaQuery minDeviceWidth={parseInt(process.env.REACT_APP_DESKTOP_WIDTH_THRESHOLD)}>
          {carouselType === 'study' ? <CarouselByType type='study' mobile={true} /> : null}
          {carouselType === 'data' ? <CarouselByType type='data' mobile={true} /> : null}
          {carouselType === 'statistical-model' ? <CarouselByType type='statistical_model' mobile={true} /> : null}
        </MediaQuery>
      </div>
    </Container>
  );
}

export default Carousel;