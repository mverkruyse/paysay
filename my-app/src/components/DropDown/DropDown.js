import React, {Component} from 'react'
import './DropDown.css'

class dropDown extends Component {
	state = {
		...this.props,
		items: this.props.items || [],
		showItems: false,
		selectedItem: this.props.items && this.props.items[0],
	}
	
	dropDown = () => {
		this.setState(prevState => ({
			showItems: !prevState.showItems,
		}))
	}

	dropDownOpen = () => this.setState({
		showItems: true,
	})

	dropDownClose = () => this.setState({
		showItems: false,
	})


	selectItem = (item) => this.setState({
		selectedItem: item,
		showItems: false
	})
	
	render() {
		
		let dropDownClasses = null;
		if (this.state.showItems) {
			dropDownClasses = 'select_box_arrow_up';
		}
		else {
			dropDownClasses = 'select_box_arrow_down'
		}
		
		
		
		return ( 
			<div style={{flex: this.state.flexVal}}>
				<div className='select_box_top'>
					<p>{this.state.title}</p>
				</div>
				<div 
					className='select_box_box'
				>
					<div 
						className="select_box_container"
						onMouseEnter={(this.dropDownOpen)}
						onMouseLeave={(this.dropDownClose)}
					>
						<div 
							className="select_box_selected_item"
						>
							{this.state.selectedItem.value}
						</div>
						<div 
							className="select_box_arrow"
							onClick={(this.dropDown)}							
						>
							<span className={dropDownClasses}/>
						</div>
						<div 
							style={{display: this.state.showItems ? 'block' : 'none'}}
							className="select_box_items"
						>
							{
								this.state.items.map(item => 
									<div 
										key={ item.id }
										onClick={() => this.selectItem(item)} 
										className={this.state.selectedItem === item ? 'selected' : ''}
									>
										{ item.value }
									</div>
								)
							}
						</div>			
					</div>
				</div>
				<input 
					type="hidden" 
					value={this.state.selectedItem.id}
					name={this.state.name}
				/>
			</div>
		);
	}
}

export default dropDown;