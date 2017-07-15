import React from 'react'

const AddressFormChild = props => (
  <div>
    <h1>Enter Address Here</h1>
    <form onSubmit={props.click}>
      <input id="address" type="text" name="address" placeholder="Address" />
      <input id="city" type="text" name="city" placeholder="City" />
      <input id="state" type="text" name="state" placeholder="State e.g. TX or NC" />
      <input id="zipcode" type="text" name="zipcode" placeholder="ZipCode" />
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default AddressFormChild
