import React from '../../../node_modules/react';
import { Button, Image } from '../../../node_modules/react-bootstrap';
import { Link } from 'react-router-dom';
import blackCaretImg from '../../assets/images/caret.svg';
import pinkCaretImg from '../../assets/images/caret_pink.svg';

import './CTAButton.scss'

function CTAButton(props) {
  return (
    <Link to={props.redirectPath}>
      <Button type={props.type} className={`call-to-action outline-light ${props.className}`} variant='light'>
        {props.title}
        {props.showCaret && props.caretColor === 'black' ?
          <Image src={blackCaretImg} fluid /> : null}
        {props.showCaret && props.caretColor === 'pink' ?
          <Image src={pinkCaretImg} fluid /> : null}
      </Button>
    </Link>
  );
}

export default CTAButton;
