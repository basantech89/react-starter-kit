import React from 'react'
import Layout from './Layout'
import Routes from './Routes'
import ErrorBoundary from '../../components/ErrorBoundary'

const App: React.FC = () => {
	return (
		<ErrorBoundary>
			<Layout>
				<Routes />
			</Layout>
		</ErrorBoundary>
	)
}

export default App
