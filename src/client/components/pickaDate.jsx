import React, { Component } from 'react'
import TimePicker from 'rc-time-picker'
// import './../../../node_modules/rc-time-picker/assets/index.css'
import {
	SingleDatePicker,
} from 'react-dates'
import moment from 'moment'
const format = 'h:mm a'
const now = moment().hour(0).minute(0)
class PickaDate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: null,
			time: now,
			focused: false,
			hours: 2,
		}
		this.format = 'h:mm a'
		this.now = moment().hour(0).minute(0)
		this.onChange = this.onChange.bind(this)
		this.onTimeChange = this.onTimeChange.bind(this)
	}
	onChange(value) {
		console.log(value && value.format(format))
		this.setState({time: value.format(format)}, ()=> this.props.setTime(this.state.time))
	}
	onTimeChange(e) {
		e.target.value
		this.setState({ hours: e.target.value }, ()=> this.props.setHours(this.state.hours))
	}
	render() {
		return (
			<div>
				<h1>Choose date, time, and number of hours</h1>
				<div>
					<SingleDatePicker
						date={this.state.date} // momentPropTypes.momentObj or null
						onDateChange={date => this.setState({ date: date })} // PropTypes.func.isRequired
						focused={this.state.focused} // PropTypes.bool
						onFocusChange={({ focused }) => this.setState({ focused }, () => this.props.setDate(this.state.date._d))} // PropTypes.func.isRequired
					/>
				</div>
				<div>
				<TimePicker
					showSecond={false}
					defaultValue={moment()}
					className="xxx"
					onChange={this.onChange}
					format="h:mm a"
					use12hours
				/>
				</div>
				<form onChange={this.onTimeChange}>
					<input id="requesthours" type="text"  placeholder="Hours of Work" />
				</form>
			</div>
		)
	}
}

export default PickaDate
