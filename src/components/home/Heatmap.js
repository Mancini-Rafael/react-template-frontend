import React from 'react';
import { Container } from 'react-bootstrap';

import './Heatmap.scss'

function Heatmap() {
  const Map = () => {
    return(
      <iframe
          title='mapa'
          width='100%'
          height='100%'
          frameBorder='0'
          src={`${process.env.REACT_APP_HEATMAP_URL}`}
        />
    );
  }

  return (
    <Container className='heatmap'>
      <Map/>
    </Container>
  );
}

export default Heatmap;
