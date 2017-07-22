import React from 'react'
import Worker from './worker.jsx'

const WorkerList = ({ workers, onWorkerClick }) => (
  <ul>
    {workers.map((worker, i) => (
      <Worker key={i} {...worker} />
    ))}
  </ul>
)

export default WorkerList
