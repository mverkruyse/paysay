import React, {Component} from 'react'
import './SearchMenu.css'

import DropDown from '../DropDown/DropDown'
import DatePicker from '../DatePicker/DatePicker'

class searchMenu extends Component {
	
	render() {
		
		let guestActive = true;
		let searchMenuTab;
		
		if (guestActive) {
			searchMenuTab = 
				<ul>
					<div className='search_menu_tab_navigation_selected'>
						<li><a href="/">Make Offer</a></li>
					</div>
					<div className='search_menu_tab_navigation_unselected'>
						<li><a href="/">View Offers</a></li>
					</div>
				</ul>;
		} else {
			searchMenuTab = 
				<ul>
					<div style={{flex: 1}}>
						<li><a href="/">Make Offer</a></li>
					</div>
					<div style={{flex: 1, backgroundColor: 'rgba(21, 76, 102, 1)'}}>
						<li><a href="/">View Offers</a></li>
					</div>
				</ul>;				
		}
		
		return (
			<div>
				<div className="search_menu">
					<div className='search_menu_tab'>
						<div className='search_menu_tab_navigation'>
							{searchMenuTab}
						</div>
					</div>
					<div className="search_menu_navigation">
						<DropDown 
							flexVal={1}							
							title='Where'
							name='country_id'
							items={[
								{value: 'United States', id: 1},
								{value: 'Mexico', id: 2},
								{value: 'Canada', id: 3},										
							]}
						/>
						<div>
							<DatePicker />
						</div>
						<DropDown
							flexVal={0.4}
							title='Guests'							
							name='guests'
							items={[
								{value: '1+', id: 1},
								{value: '2+', id: 2},
								{value: '3+', id: 3},										
								{value: '4+', id: 4},										
								{value: '5+', id: 5},										
								{value: '6+', id: 6},										
								{value: '7+', id: 7},										
								{value: '8+', id: 8},										
								{value: '9+', id: 9},										
								{value: '10+', id: 10},															
							]}
						/>								
						<div className="search_menu_navigation_items">
							<div className='select_box_top'>
							</div>							
							<button className='search_menu_button'>CREATE OFFER</button>
						</div>
					</div>
				</div>
			</div>				
		);
	}
}

export default searchMenu