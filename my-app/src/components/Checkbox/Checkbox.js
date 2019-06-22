import React, {Component} from 'react'
import './Checkbox.css'



class checkbox extends Component {
	
    state = { 
		checked: false 
	}

	handleCheckboxChange = () => {
		this.setState(prevState => ({
			checked: !prevState.checked,
		}))
	}

	
	render() {			
		return (
			<label>
				<input type="checkbox" onChange={this.handleCheckboxChange} />
				<span className='checkbox_label_styling'>
					<div style={{paddingLeft: '28px', fontWeight: '700', width:'200px'}}>{this.props.labelName}</div>
				</span>
			</label>
		);
	}
	
}

export default checkbox