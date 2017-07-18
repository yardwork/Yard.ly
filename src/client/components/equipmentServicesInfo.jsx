import React from 'react'

import ServicesInfo from './servicesInfo.jsx'
import EquipmentInfo from './equipmentInfo.jsx'
import EditServicesInfo from './editServicesInfo.jsx'
import EditEquipmentInfo from './editEquipmentInfo.jsx'
import EditImage from './editImage.jsx'



const EquipmentServicesInfo = ( { worker, onEquipmentClick, onServicesClick, submitImage } ) => (
  <div>
    <EditImage submitImage={ submitImage }/>
    <EquipmentInfo equipmentInfo={worker.equipment} />
    <EditEquipmentInfo onEquipmentClick={onEquipmentClick} />
    <ServicesInfo servicesInfo={worker.services} />
    <EditServicesInfo onServicesClick={onServicesClick} />
  </div>
)

export default EquipmentServicesInfo
