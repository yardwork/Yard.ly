import React from 'react'

const ContactInfo = ( {contactInfo} ) => (
  <div>
    <h2>Phone Number: {contactInfo.phoneNumber}</h2>
    <h2>Email: {contactInfo.email}</h2>
  </div>
)

export default ContactInfo
