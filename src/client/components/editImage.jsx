import React from 'react'

const EditImage = ({ submitImage }) =>
	<div>
    <form onSubmit={submitImage}>
      <input
        id="image"
        type="text"
        name="image"
        placeholder="Edit image: "
      />
      <button type="submit">Submit</button>
    </form>
	</div>

export default EditImage
