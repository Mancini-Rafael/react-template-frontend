import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import './Contact.css'


function Contact({location }) {
  const [contactType, setContactType] = useState('default')
  const changeContactType = (type) => setContactType(type)
  
  useEffect(() => {
    changeContactType(queryString.parse(location.search).type)
  });  
  
  return (
    <p>
      <strong>Render a {contactType} contact page</strong>
    </p>
  );
}

export default Contact;
