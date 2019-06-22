import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import AmenitiesMenu from '../../components/AmenitiesMenu/AmenitiesMenu';
import './CreateGuestOffer.css';


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
			<div className='home_page'>
				<Toolbar 
					loggedIn={this.state.loggedIn} 
					loggedInClickHandler={this.loggedInClickHandler}
					drawerClickHandler={this.drawerToggleClickHandler}
				/>
				<SideDrawer show={this.state.sideDrawerOpen}/>
				{backdrop}
				<div style={{height: '250px'}}/>
				<AmenitiesMenu />
				<div style={{height: '250px'}}/>
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