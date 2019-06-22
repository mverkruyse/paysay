import React, {Component} from 'react'
import './GuestOffer.css'

class ReviewGuestOfferMenu extends Component {
	
	render() {
		return (
			<div style={{paddingTop:'5px', display: 'flex', flex: 1}}>
				<div style={{flex:1}}>
					<p>Profile</p>
					<p>{this.props.Profile}</p>
				</div>
				<div style={{flex:1}}>
					<p>Stars</p>
					<p>{this.props.Stars}</p>
				</div>
				<div style={{flex:1}}>
					<p>Where</p>
					<p>{this.props.Where}</p>
				</div>
				<div style={{flex:1.25}}>
					<p>When</p>
					<p>{this.props.When}</p>
				</div>
				<div style={{flex:1}}>
					<p>Beds</p>
					<p>{this.props.Beds}</p>
				</div>
				<div style={{flex:1}}>
					<p>Baths</p>
					<p>{this.props.Baths}</p>
				</div>
				<div style={{flex:1}}>
					<p>Guests</p>
					<p>{this.props.Guests}</p>
				</div>
				<div style={{flex:1}}>
					<p>Amenities</p>
					<p>{this.props.Amenities}</p>
				</div>
				<div style={{flex:1}}>
					<p>$/Night</p>
					<p>${this.props.PriceNight}</p>
				</div>
				<div style={{flex:1}}>
					<p>Total</p>
					<p>${this.props.PriceNight * this.props.NumNights}</p>
				</div>
				<div style={{flex:1}}>
					<div style={{marginRight:'10px'}}>
						<button className='amenities_menu_button'>SUBMIT OFFER</button>
					</div>
				</div>				
			</div>
		);
	}
}

export default ReviewGuestOfferMenu