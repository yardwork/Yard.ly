import React from 'react'

import AddressFormChild from './addressFormChild.jsx'

const EditContactInfo = ({ contactInfo, submitEmail, submitPhone, submitArea, submitRate, submitRadius, submitImage, area, worker, submitAddress }) =>
	<div>
		<form onSubmit={submitPhone}>
			<input
				id="phoneNumber"
				type="text"
				name="phoneNumber"
				placeholder={"Edit phone number: " + contactInfo.phoneNumber}
			/>
      <button type="submit">Submit</button>
    </form>
    <form onSubmit={submitEmail}>
			<input
				id="email"
				type="text"
				name="email"
				placeholder={"Edit email: " + contactInfo.email}
			/>
      <button type="submit">Submit</button>
		</form>
		<form onSubmit={submitImage}>
			<input
				id="image"
				type="text"
				name="image"
				placeholder="Edit image: "
			/>
			<button type="submit">Submit</button>
		</form>
		<form onSubmit={submitArea}>
			<input
				id="area"
				type="text"
				name="area"
				placeholder="Edit area: "
			/>
			<button type="submit">Submit</button>
		</form>
		<form onSubmit={submitRate}>
			<input
				id="rate"
				type="text"
				name="rate"
				placeholder="Edit rate: "
			/>
			<button type="submit">Submit</button>
		</form>
		<form onSubmit={submitRadius}>
			<input
				id="radius"
				type="text"
				name="radius"
				placeholder="Edit radius: "
			/>
			<button type="submit">Submit</button>
		</form>
		<h3>{worker.address.address} {worker.address.city} {worker.address.state} {worker.address.zipcode}</h3>
		<AddressFormChild click={submitAddress} />
	</div>


export default EditContactInfo
