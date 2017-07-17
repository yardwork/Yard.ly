import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'
import EditServicesInfo from './editServicesInfo.jsx'
import EditEquipmentInfo from './editEquipmentInfo.jsx'
import EditImage from './editImage.jsx'



const EquipmentServicesInfo = ( { worker, onEquipmentClick, onServicesClick, submitImage } ) => (
  <div>
    <div>{worker.firstName} {worker.lastName}</div>
    <img src={worker.image} width="128px" height="128px" alt="https://previews.123rf.com/images/kadmy/kadmy1308/kadmy130800026/21769667-lawn-mower-worker-man-cutting-grass-in-garden-yard-Stock-Photo.jpg"/>
    <div>{worker.area}</div>
    <EquipmentInfo equipmentInfo={worker.equipmentInfo} />
    <EditEquipmentInfo onEquipmentClick={onEquipmentClick} />
    <ServicesInfo servicesInfo={worker.servicesInfo} />
    <EditServicesInfo onServicesClick={onServicesClick} />
    <EditImage submitImage={ submitImage }/>
  </div>
)

export default EquipmentServicesInfo
