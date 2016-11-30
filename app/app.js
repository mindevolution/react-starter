/*
 */
import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
			<Root store={store} />
		,
		document.getElementById('app')
)
