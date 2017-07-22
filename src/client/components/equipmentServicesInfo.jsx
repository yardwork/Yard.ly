import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'
import EditServicesInfo from './editServicesInfo.jsx'
import EditEquipmentInfo from './editEquipmentInfo.jsx'
import EditImage from './editImage.jsx'



const EquipmentServicesInfo = ( { worker, onEquipmentClick, onServicesClick, submitImage, currId } ) => (
  <div>
    <EquipmentInfo equipment={worker.equipment} />
    { currId === worker._id
      ? <EditEquipmentInfo onEquipmentClick={onEquipmentClick} />
      : ''}
    <ServicesInfo servicesInfo={worker.services} />
    { currId === worker._id
      ? <EditServicesInfo onServicesClick={onServicesClick} />
      : ''}
    { currId === worker._id
      ? <EditImage submitImage={ submitImage }/>
      : ''}
  </div>
)

export default EquipmentServicesInfo
