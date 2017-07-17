import React from 'react'

import ContactInfo from './contactInfo.jsx'
import EditContactInfo from './editContactInfo.jsx'


const WorkerInfo = ( {worker, submitEmail, submitPhone, submitArea} ) => (
  <div>
    <div>{worker.firstName} {worker.lastName}</div>
    <img src={worker.image} width="128px" height="128px" alt="https://previews.123rf.com/images/kadmy/kadmy1308/kadmy130800026/21769667-lawn-mower-worker-man-cutting-grass-in-garden-yard-Stock-Photo.jpg"/>
    <div>{worker.area}</div>
    <ContactInfo contactInfo={worker.contactInfo} />
    <EditContactInfo submitArea={submitArea} submitEmail={submitEmail} submitPhone={submitPhone} contactInfo={worker.contactInfo} area={worker.area} />
  </div>
)

export default WorkerInfo
