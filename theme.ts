import { extendTheme, Button } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#121212',
				color: 'white'
			},
					
		},
		colors: {
			'900': 'white',
			'800': 'white',
			'700': 'white',
			'600': 'white',
			'500': 'white',
			'400': 'white',
			'300': 'white',
			'200': 'white',
			'100': 'white',
			'50': 'white',
			'yellow':'#FFF701'
		},
		Button:{
			borderColor:'#FFF701',
			color:'red'
		},
		fonts: {
			heading: 'Roboto',
			body: 'Roboto', 
		},
	}
});