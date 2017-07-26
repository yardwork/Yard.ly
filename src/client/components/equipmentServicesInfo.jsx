import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'
import EditServicesInfo from './editServicesInfo.jsx'
import EditEquipmentInfo from './editEquipmentInfo.jsx'

const EquipmentServicesInfo = ( { worker, onEquipmentClick, onServicesClick, currId } ) => (
  <div>
    <EquipmentInfo equipment={worker.equipment} />
    { currId === worker._id
      ? <EditEquipmentInfo onEquipmentClick={onEquipmentClick} />
      : ''}
    <ServicesInfo servicesInfo={worker.services} />
    { currId === worker._id
      ? <EditServicesInfo onServicesClick={onServicesClick} />
      : ''}
  </div>
)

export default EquipmentServicesInfo
