import React from 'react'

const EditContactInfo = ({ contactInfo, submitEmail, submitPhone, submitArea, area }) =>
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
	</div>

export default EditContactInfo
