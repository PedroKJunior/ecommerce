import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { CartContextProvider } from './Store/CartContext'

ReactDOM.render(
	<React.StrictMode>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
