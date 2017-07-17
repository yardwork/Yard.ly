import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'
import EditServicesInfo from './editServicesInfo.jsx'
import EditEquipmentInfo from './editEquipmentInfo.jsx'



const EquipmentServicesInfo = ( {worker} ) => (
  <div>
    <div>{worker.firstName} {worker.lastName}</div>
    <img src={worker.image} width="128px" height="128px" alt="https://previews.123rf.com/images/kadmy/kadmy1308/kadmy130800026/21769667-lawn-mower-worker-man-cutting-grass-in-garden-yard-Stock-Photo.jpg"/>
    <div>{worker.area}</div>
    <EquipmentInfo equipmentInfo={worker.equipmentInfo} />
    <EditEquipmentInfo />
    <ServicesInfo servicesInfo={worker.servicesInfo} />
    <EditServicesInfo />
  </div>
)

export default EquipmentServicesInfo
