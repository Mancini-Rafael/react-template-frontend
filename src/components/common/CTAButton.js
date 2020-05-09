import React from '../../../node_modules/react';
import { Button} from '../../../node_modules/react-bootstrap';
import { Link } from 'react-router-dom';
import './CTAButton.css'

function CTAButton(props) {
  return (
    <Link to={props.redirectPath}>
      <Button className={`call-to-action outline-light ${props.className}`} variant='light'>{props.title}</Button>
    </Link>
  );
}

export default CTAButton;
