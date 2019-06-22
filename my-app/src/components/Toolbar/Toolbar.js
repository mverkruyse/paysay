import React, {Component} from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

class toolbar extends Component {


	render() {
		let profile;
		if(this.props.loggedIn) {
			profile = 
					<div>
						<li><a href="/FAQ">FAQ</a></li>
						<li><a href="/RegisterHost">Become a Host</a></li>
						<li><a href="/MyTrips">Trips</a></li>
						<li><a href="/Messages">Messages</a></li>						
						<li onClick={this.props.loggedInClickHandler}>
								Log Out
						</li>
					</div>;
		} else {
			profile = 
					<div>
						<li><a href="/FAQ">FAQ</a></li>
						<li><a href="/RegisterGuest">Register</a></li>
						<li onClick={this.props.loggedInClickHandler}>
							Sign In
						</li>
					</div>;		
		}

		return (
			<header className="toolbar">
				<nav className="toolbar_navigation">
					<div className="toolbar_toggle_button"> 
						<DrawerToggleButton click={this.props.drawerClickHandler}/>
					</div>
					<div className="toolbar_logo"><a href="/">PAYSAY</a></div>
					<div className="spacer" />
					<div className="toolbar_navigation_items">
						<ul>
							{profile}
						</ul>
					</div>
				</nav>
			</header>
		);

		
	}

}

export default toolbar;