/*
 * 使用React开发的学生考试功能
 * - 测试学生的考试环境，喇叭和麦克风是否工作正常
 */
import React from 'react'
import { render } from 'react-dom'

import About from './components/About'
import Inbox from './components/Inbox'
import Home from './components/Home'

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


// Then we delete a bundle of code from App and
// add some <Link> elements...
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

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} />
		</Route>
	</Router>
), document.body)
