import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import SearchMenu from '../../components/SearchMenu/SearchMenu'
import './Home.css';


class home extends Component {
	
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
				<SearchMenu />
				<div style={{height: '250px'}}/>
				<div style={{height: '80px', background: 'rgba(255, 255, 255, 1)'}}>
				</div>				
			</div>		
  	  	);
	}
}

export default home;
