import { Colors } from './Colors';

export const Theme = {
	defaultTheme: {
		textColor: '#212529',
		backgroundColor: `${Colors.grayOne}`,
		navBarColor: `${Colors.grayEight}`,
		spinnerColor: '#fff',
		themeType: 'default',
		rutgersScarlet: Colors.rutgersScarlet,
	},
	darkTheme: {
		textColor: `${Colors.mediumblue}`,
		backgroundColor: `${Colors.black}`,
		navBarColor: `${Colors.black}`,
		spinnerColor: `${Colors.dodgerblue}`,
		themeType: 'dark',
		rutgersScarlet: Colors.rutgersScarlet,
	},
};

export default Theme;
