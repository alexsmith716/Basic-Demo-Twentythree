import { Colors } from './Colors';

export const Theme = {
	defaultTheme: {
		textColor: '#212529',
		backgroundColor: `${Colors.grayOne}`,
		navBarColor: `${Colors.grayEight}`,
		spinnerColor: '#fff',
		rutgersScarlet: Colors.rutgersScarlet,
		themeType: 'default',
	},
	darkTheme: {
		textColor: `${Colors.mediumblue}`,
		backgroundColor: `${Colors.black}`,
		navBarColor: `${Colors.black}`,
		spinnerColor: `${Colors.dodgerblue}`,
		rutgersScarlet: Colors.rutgersScarlet,
		themeType: 'dark',
	},
};

export default Theme;
