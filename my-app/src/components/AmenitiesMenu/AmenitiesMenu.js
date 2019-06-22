import React, {Component} from 'react'
import './AmenitiesMenu.css'

import DropDown from '../DropDown/DropDown'
import Checkbox from '../Checkbox/Checkbox'

class searchMenu extends Component {
	
	render() {
			
		return (
			<div>
				<div className="amenities_menu">
					<div className="amenities_menu_navigation">
						<DropDown 
							flexVal={1}							
							title='Beds'
							name='beds'
							items={[
								{value: '1+', id: 1},
								{value: '2+', id: 2},
								{value: '3+', id: 3},										
								{value: '4+', id: 4},										
								{value: '5+', id: 5},										
							]}
						/>
						<DropDown 
							flexVal={1}							
							title='Baths'
							name='baths'
							items={[
								{value: '1+', id: 1},
								{value: '2+', id: 2},
								{value: '3+', id: 3},										
							]}
						/>
						<DropDown
							flexVal={1}
							title='Room Type'							
							name='room_type'
							items={[
								{value: 'Entire Place', id: 1},
								{value: 'Private Room', id: 2},
								{value: 'Shared Room', id: 3},										
							]}
						/>								
					</div>
					<div style={{paddingTop:'5px'}}>
						<div className="amenities_menu_navigation">
							<div style={{flex:1}}>
								<Checkbox labelName='Hot Tub'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Pool'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Gym'/>
							</div>
						</div>							
						<div className="amenities_menu_navigation">
							<div style={{flex:1}}>
								<Checkbox labelName='Kitchen'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Washer/Dryer'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Fireplace'/>
							</div>
						</div>							
						<div className="amenities_menu_navigation">
							<div style={{flex:1}}>
								<Checkbox labelName='Pet Friendly'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Wheelchair Accessible'/>
							</div>
							<div style={{flex:1}}>
								<Checkbox labelName='Testing'/>
							</div>
						</div>		
					</div>
								
					<div className="amenities_menu_navigation">
						<div className='amenities_menu_spacer' />								
						<div className='amenities_menu_spacer' />	
						<div style={{flex:1}}>
							<div style={{marginRight:'10px'}}>
								<button className='amenities_menu_button'>REVIEW OFFER</button>
							</div>
						</div>
					</div>
				</div>
			</div>				
		);
	}
}

export default searchMenu