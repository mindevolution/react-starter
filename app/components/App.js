import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Component } from 'react'
import { Link } from 'react-router'

const App = ({ params  }) => (
  <div>
    <AddTodo />
    <VisibleTodoList 
			filter={params.filter || 'all'}
		/>
    <Footer />
  </div>
)

export default App
