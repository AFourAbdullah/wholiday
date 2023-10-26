import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box, extendTheme } from '@chakra-ui/react'
import { SaasProvider, AppShell, theme as baseTheme } from '@saas-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const fonts = {
	heading: 'Mulat Addis Sans Serif Font',
	body: 'Mulat Addis Sans Serif Font',
}

const theme = extendTheme({ colors, fonts }, baseTheme)
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);



root.render(
	<React.StrictMode>
		<SaasProvider theme={theme}>
			<div className='main'>
				<AppShell
					navbar={
						<Box
							
						>
							
						</Box>

					}
				>
					<App />
				</AppShell>
			</div>
		</SaasProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
