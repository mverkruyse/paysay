import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import './FAQ.css';


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
				<div style={{height: '250px', textAlign: 'center', color: 'white', fontSize: '40px'}}>
					<p style={{background: 'black'}}>TO DO ---> Build FAQ page</p>
				</div>
				<div style={{height: '250px', background: 'rgba(0, 0, 0, 1)'}}/>				
			</div>		
  	  	);
	}
}

export default createGuestOffer;