import React from 'react'

const EquipmentInfo = ( {equipment} ) => {

  const listItems = Object.keys(equipment).map(function (key) {
    // console.log('asfasdf')
    return <ul key={key}>{key} {equipment[key] ? "☑" : "☐" }</ul>
  })
  console.log(Object.keys(equipment))
  // console.log(listItems)
  return (
    <div className="equipment">
      <h1>Available Equipment is marked with a checkbox!</h1>
      {listItems}
    </div>
  )
}

export default EquipmentInfo
