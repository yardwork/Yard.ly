import React from 'react'
import WorkerRequest from './workerRequest.jsx'

const WorkerRequestList = ({ worker, requests }) => (
  <div className="worker-list-container">
    {requests.map((request, i) => (
      <WorkerRequest key={i}  />
    ))}
  </div>
)

export default WorkerRequestList
