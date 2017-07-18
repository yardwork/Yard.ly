import React from 'react'

const EquipmentInfo = ( {equipmentInfo} ) => {

  const listItems = Object.keys(equipmentInfo).map(function (key) {
    // console.log('asfasdf')
    return <ul key={key}>{key} {equipmentInfo[key] ? "☑" : "☐" }</ul>
  })
  console.log(Object.keys(equipmentInfo))
  // console.log(listItems)
  return (
    <div className="equipment">
      <h1>Available Equipment is marked with a checkbox!</h1>
      {listItems}
    </div>
  )
}

export default EquipmentInfo
