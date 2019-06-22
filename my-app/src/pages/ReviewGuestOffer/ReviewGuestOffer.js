import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import ReviewGuestOfferMenu from '../../components/ReviewGuestOfferMenu/ReviewGuestOfferMenu';
import './ReviewGuestOffer.css';


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
				<div style={{height: '250px'}}/>
				<ReviewGuestOfferMenu 
					Profile='Michael'
				/>
				<div style={{height: '250px'}}/>
				<div style={{height: '550px', background: 'rgba(22, 22, 22, 1)'}}>
				</div>				
			</div>
  	  	);
	}
}

export default createGuestOffer;