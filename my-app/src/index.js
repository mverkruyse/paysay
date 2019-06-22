import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home'
import CreateGuestOffer from './pages/CreateGuestOffer/CreateGuestOffer'
import ReviewGuestOffer from './pages/ReviewGuestOffer/ReviewGuestOffer'
import FAQ from './pages/FAQ/FAQ'
import Messages from './pages/Messages/Messages'
import MyTrips from './pages/MyTrips/MyTrips'
import RegisterHost from './pages/RegisterHost/RegisterHost'
import RegisterGuest from './pages/RegisterGuest/RegisterGuest'
import ViewAllOffers from './pages/ViewAllOffers/ViewAllOffers'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
	<Router>
	    <div>
	      <main>
	        <Route exact path="/" component={Home}/>
	        <Route path="/FAQ" component={FAQ} />	
	        <Route path="/Messages" component={Messages} />	
	        <Route path="/MyTrips" component={MyTrips} />	
	        <Route path="/RegisterHost" component={RegisterHost} />	
	        <Route path="/RegisterGuest" component={RegisterGuest} />		
	        <Route path="/CreateGuestOffer" component={CreateGuestOffer} />
	        <Route path="/ReviewGuestOffer" component={ReviewGuestOffer} />			
	        <Route path="/ViewAllOffers" component={ViewAllOffers} />				
	      </main>
	    </div>	
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
