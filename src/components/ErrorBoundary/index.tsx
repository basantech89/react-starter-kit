import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

declare interface IErrorBoundaryProps {}

interface IErrorBoundaryState {
	hasError: boolean
}

export default class ErrorBoundary extends React.Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error) {
		// eslint-disable-next-line no-console
		console.error(error.message)
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='error-boundary'>
					<FontAwesomeIcon size='6x' icon='skull' />
					<h4 className='mt-4'>
						Something went wrong. Please try refreshing the page.
					</h4>
				</div>
			)
		}

		return this.props.children
	}
}
