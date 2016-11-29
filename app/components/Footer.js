import React from 'react'
import FilteLink from '../containers/FilterLink'

const Footer = () => (
	<p>
		Show
		{" "}
		<FilteLink filter="SHOW_ALL">
			All
		</FilteLink>
		{", "}
		<FilteLink filter="SHOW_ACTIVE">
			Active
		</FilteLink>
		<FilteLink filter="SHOW_COMPLETED">
			Completed
		</FilteLink>
	</p>
)

export default Footer
