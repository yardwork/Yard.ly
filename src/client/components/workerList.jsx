import React from 'react'
import Worker from './worker.jsx'

const WorkerList = ({ workers, onWorkerClick }) => (
  <div>
    {workers.map((worker, i) => (
      <Worker key={i} {...worker} onClick={() => console.log(worker)} />
    ))}
  </div>
)

export default WorkerList
