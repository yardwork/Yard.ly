import React from 'react'

const WorkerInfo = ( { worker } ) =>
 (
  <div className="worker-info-container">
    <img className="circular--square profile-photo" src={worker.image} width="128px" height="128px" />
    <div className="worker-info">
      <h1><strong>{worker.firstName} {worker.lastName}</strong></h1>
      <p>Works within {worker.radius} miles of {worker.area} for {worker.rate} dollars an hour</p>
      <p>
        <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {worker.contactInfo ? worker.contactInfo.phoneNumber : 'Contact info not found'}<br/>
        <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> {worker.contactInfo ? worker.contactInfo.email : 'Contact info not found'}
      </p>
    </div>
  </div>
)

export default WorkerInfo
