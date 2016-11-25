// First we import some modules...
import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import About from '../components/About'
import Inbox from '../components/Inbox'
import Home from '../components/Home'
import App from '../components/App'



const AppRoute = <Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>

export default AppRoute
