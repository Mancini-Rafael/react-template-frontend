import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Section.scss'

function Section(props) {
  return (
    <Container id={`${props.id}-section`} className={`section ${props.sectionClassName}`}>
      <Row>
        <Col className='section-title'>
          <div className={props.titleClassName}>{props.title}</div>
        </Col>
      </Row>
      <Row>
        <Col className='section-subtitle'>
          <div className={props.subtitleClassName}>{props.subtitle}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section;
