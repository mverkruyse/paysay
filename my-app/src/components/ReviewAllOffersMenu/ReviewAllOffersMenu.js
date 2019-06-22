import React, {Component} from 'react'
import './ReviewAllOffersMenu.css'

import GuestOffer from '../GuestOffer/GuestOffer'

class ReviewGuestOfferMenu extends Component {
	
	render() {
			
		return (
			<div className="review_guest_offer_menu">
				<div className="review_guest_offer_menu_navigation">
					<GuestOffer 
						Profile={this.props.Profile}
						Stars={this.props.Stars}
						Where={this.props.Where}
						When={this.props.When}
						Beds={this.props.Beds}
						Baths={this.props.Baths}
						Guests={this.props.Guests}
						Amenities={this.props.Amenities}
						PriceNight={this.props.PriceNight}
						NumNights={this.props.NumNights}
					/>
				</div>
			</div>
		);
	}
}

export default ReviewGuestOfferMenu