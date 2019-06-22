import React, {Component} from 'react'
import './ReviewGuestOfferMenu.css'

import GuestOffer from '../GuestOffer/GuestOffer'

class ReviewGuestOfferMenu extends Component {
	
	render() {
			
		return (
				<div className="review_guest_offer_menu">
					<div className="review_guest_offer_menu_navigation">
						<GuestOffer 
							Profile='Michael'
							Stars='★★★★☆'
							Where='Seattle'
							When='07/02/19 - 07/08/19'
							Beds='2+'
							Baths='1+'
							Guests='4'
							Amenities='Hot Tub'
							PriceNight={1}
							NumNights={6}
						/>					
					</div>
				</div>
		);
	}
}

export default ReviewGuestOfferMenu