import React from 'react'
import { Spinner } from 'reactstrap'
import './styles.scss'

const Loader: React.FC = () => (
	<div className='loader'>
		<Spinner />
	</div>
)

export default Loader
