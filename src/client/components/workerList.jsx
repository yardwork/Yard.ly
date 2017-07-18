import React from 'react'
import Worker from './worker.jsx'

const WorkerList = ({ workers, onWorkerClick }) => (
  <div className="worker-list-container">
    {workers.map((worker, i) => (
      <Worker key={i} {...worker} onClick={() => onWorkerClick(worker.id)} />
    ))}
  </div>
)

export default WorkerList
