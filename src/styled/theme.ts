import { Colors } from './Colors';

export const Theme = {
	normalTheme: {
		textColor: '#212529',
		backgroundColor: '#f8f9fa',
		navBarColor: `${Colors.grayEight}`,
		spinnerColor: '#fff',
		themeType: 'normal',
	},
	darkTheme: {
		textColor: `${Colors.mediumblue}`,
		backgroundColor: `${Colors.black}`,
		navBarColor: `${Colors.black}`,
		spinnerColor: `${Colors.dodgerblue}`,
		themeType: 'dark',
	},
};

export default Theme;
