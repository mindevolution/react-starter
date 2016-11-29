import React, { Component } from 'react'
import { Link } from 'react-router'

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{/*
					next we replace a <Router> with some <Route>s.
					the router will figure out the children for us
				*/}
				{this.props.children}
			</div>
		)
	}
})

export default App
