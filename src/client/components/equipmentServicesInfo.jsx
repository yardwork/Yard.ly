import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'

const EquipmentServicesInfo = ( { worker, onEquipmentClick, onServicesClick, currId } ) => (
  <div>
    <EquipmentInfo equipment={worker.equipment} worker={worker} currId={currId} onEquipmentClick={onEquipmentClick}/>
    <ServicesInfo servicesInfo={worker.services} worker={worker} currId={currId} onServicesClick={onServicesClick}/>
  </div>
)

export default EquipmentServicesInfo
