import React, { Component } from 'react'
import fp from 'flatpickr'
const flatpickr = fp("#myID", {})
import {
	DateRangePicker,
	SingleDatePicker,
	DayPickerRangeController,
} from 'react-dates'

class PickaDate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: null,
			focused: true,
		}
	}
	render() {
		return (
			<div>
				<h1>This is a Date picker</h1>
				<div>
					<SingleDatePicker
						date={this.state.date} // momentPropTypes.momentObj or null
						onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
						focused={this.state.focused} // PropTypes.bool
						onFocusChange={({ focused }) => this.setState({ focused }, () => this.props.setDate(this.state.date))} // PropTypes.func.isRequired
					/>
				</div>
			</div>
		)
	}
}

export default PickaDate
