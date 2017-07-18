import React from 'react'

import ContactInfo from './contactInfo.jsx'
import EditContactInfo from './editContactInfo.jsx'


const WorkerInfo = ( {worker, submitEmail, submitPhone, submitArea} ) =>
 (
  <div>
    <ContactInfo worker={worker} contactInfo={worker.contactInfo} />
    <EditContactInfo submitArea={submitArea} submitEmail={submitEmail} submitPhone={submitPhone} contactInfo={worker.contactInfo} area={worker.area} />
  </div>
)

export default WorkerInfo
