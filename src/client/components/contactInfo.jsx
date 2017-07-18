import React from 'react'

const ContactInfo = ( {worker, contactInfo} ) => (
  <div>
    <h2>{worker.firstName} {worker.lastName}</h2>
    <img src={worker.image} width="128px" height="128px" alt="https://previews.123rf.com/images/kadmy/kadmy1308/kadmy130800026/21769667-lawn-mower-worker-man-cutting-grass-in-garden-yard-Stock-Photo.jpg"/>
    <h2>Area: {worker.area}</h2>
    <h2>Phone Number: {contactInfo.phoneNumber}</h2>
    <h2>Email: {contactInfo.email}</h2>
  </div>
)

export default ContactInfo
