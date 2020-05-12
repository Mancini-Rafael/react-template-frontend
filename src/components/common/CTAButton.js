import React from '../../../node_modules/react';
import { Button, Image } from '../../../node_modules/react-bootstrap';
import { Link } from 'react-router-dom';
import { caratImg } from '../../assets/images/carat.svg';

import './CTAButton.scss'

function CTAButton(props) {
  return (
    <Link to={props.redirectPath}>
      <Button type={props.type} className={`call-to-action outline-light ${props.className}`} variant='light'>
        {/* TODO ADD DEFAULT CARAT */}
        {props.title}
        {props.showCarat ? <Image src={'https://via.placeholder.com/8x12.png'}/> : null}
      </Button>
    </Link>
  );
}

export default CTAButton;
