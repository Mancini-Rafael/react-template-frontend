import React from '../../../node_modules/react';
import { Button} from '../../../node_modules/react-bootstrap';
import '../../styles/common/ctabutton.css'

function CTAButton(props) {
  return (
  <Button className={`call-to-action outline-light ${props.className}`} variant='light'>{props.title}</Button>
  );
}

export default CTAButton;
