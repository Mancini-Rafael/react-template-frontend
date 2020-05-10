import React, { useState } from 'react';
import { Button} from '../../../node_modules/react-bootstrap';
import { Container } from 'react-bootstrap';
import './Heatmap.css'

function Heatmap() {
  const [showHeatMap, setHeatmapDisplay] = useState(false)
  
  const onClick = (isShowing) => setHeatmapDisplay(!isShowing)
  const Map = () => {
    return(
      <iframe
          title='mapa'
          width='100%'
          height='100%'
          frameBorder='0'
          src='https://mapfry2020.carto.com/builder/d02b04be-2213-49c0-9b53-59af14320282/embed'
        />
    );
  }

  return (
    <Container className='heatmap'>
      {/* TODO REMOVE BUTTON AND ALWAYS ADD HEATMAP */}
      <Button onClick={() => onClick(showHeatMap)}> {showHeatMap ? 'Aperte para esconder' : 'Aperte para mostrar'} </Button>
      { showHeatMap ? <Map/> : null }
    </Container>
  );
}

export default Heatmap;
