import React from 'react'

const WorkerProfile = ( {worker} ) => (
  <div>
    <div>profile</div>{console.log('worker',worker)}
    <div>{worker.firstName} {worker.lastName}</div>
  </div>
)

export default WorkerProfile
