import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import ReviewAllOffersMenu from '../../components/ReviewAllOffersMenu/ReviewAllOffersMenu';
import './ViewAllOffers.css';


class createGuestOffer extends Component {
	
	state = {
		sideDrawerOpen: false,
		loggedIn: false,
	};
	
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	loggedInClickHandler = () => {
		this.setState((prevState) => {
			return {loggedIn: !prevState.loggedIn}
		});
	};

	render() {
		let backdrop;
		
		if(this.state.sideDrawerOpen){
			backdrop = <Backdrop click={this.backdropClickHandler}/>;
		}
		
	    return (
			<div>
				<Toolbar 
					loggedIn={this.state.loggedIn} 
					loggedInClickHandler={this.loggedInClickHandler}
					drawerClickHandler={this.drawerToggleClickHandler}
				/>
				<SideDrawer show={this.state.sideDrawerOpen}/>
				{backdrop}
				<div style={{height: '150px'}}/>
				<ReviewAllOffersMenu 
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
				<ReviewAllOffersMenu 
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
				<ReviewAllOffersMenu 
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
				<ReviewAllOffersMenu 
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
				<ReviewAllOffersMenu 
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
				<ReviewAllOffersMenu 
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
					
				<div style={{height: '94px'}}/>
				<div style={{height: '550px', background: 'rgba(255, 255, 255, 1)'}}>
					<p>hi</p>
					<p>hi</p>
					<p>hi</p>								
				</div>				
			</div>
  	  	);
	}
}

export default createGuestOffer;