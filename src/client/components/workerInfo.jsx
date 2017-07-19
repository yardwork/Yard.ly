import React from 'react'

import ContactInfo from './contactInfo.jsx'
import EditContactInfo from './editContactInfo.jsx'


const WorkerInfo = ( {worker, submitEmail, submitPhone, submitArea} ) =>
 (
  <div>
    <div>{worker.firstName} AAAAA {worker.lastName}</div>
    <img src={worker.image} width="128px" height="128px" />
    <div>{worker.area}</div>
    <ContactInfo contactInfo={worker.contactInfo} worker={worker}/>
    <EditContactInfo submitArea={submitArea} submitEmail={submitEmail} submitPhone={submitPhone} contactInfo={worker.contactInfo} area={worker.area} />
  </div>
)

export default WorkerInfo
