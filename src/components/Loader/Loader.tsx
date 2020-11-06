import React from 'react'
import { Spinner } from 'reactstrap'
import classes from './loader.module.scss'

const Loader: React.FC = () => (
	<div className={classes.loader}>
		<Spinner />
	</div>
)

export default Loader
