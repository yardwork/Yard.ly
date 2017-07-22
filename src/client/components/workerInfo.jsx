import React from 'react'

import EditContactInfo from './editContactInfo.jsx'


const WorkerInfo = ( {worker, submitEmail, submitPhone, submitArea, userId} ) =>
 (
  <div className="worker-info-container">
    <img className="circular--square profile-photo" src={worker.image} width="128px" height="128px" />
    <div className="worker-info">
      <h1><strong>{worker.firstName} {worker.lastName}</strong></h1>
      <p>{worker.area}</p>
      <p>
        <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {worker.contactInfo ? worker.contactInfo.phoneNumber : 'Contact info not found'}<br/>
        <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> {worker.contactInfo ? worker.contactInfo.email : 'Contact info not found'}
      </p>
      {userId === worker._id
        ? <EditContactInfo submitArea={submitArea} submitEmail={submitEmail} submitPhone={submitPhone} contactInfo={worker.contactInfo} area={worker.area} />
        : ''}
    </div>
  </div>
)

export default WorkerInfo
