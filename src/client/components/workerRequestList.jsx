import React from 'react'
import WorkerRequest from './workerRequest.jsx'

const WorkerRequestList = ({ requests }) => (
  <div className="worker-list-container">
    {requests.map((request, i) => (
      <WorkerRequest key={i} request={request} wid={request.workerId} uid={request.userId} id={request._id} jobname={request.jobname} date={request.date} time={request.time} rate={request.rate} hours={request.hours} address={request.address} equipment={request.equipment} services={request.services}  />
    ))}
  </div>
)

export default WorkerRequestList
