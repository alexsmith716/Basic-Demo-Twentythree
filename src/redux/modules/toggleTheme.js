// Actions
const TOGGLE_THEME_NORMAL = 'redux-example/toggleTheme/TOGGLE_THEME_NORMAL';
const TOGGLE_THEME_WEIRD = 'redux-example/toggleTheme/TOGGLE_THEME_WEIRD';

//	const normalTheme = {
//		textColor: '#212529',
//		backgroundColor: '#f8f9fa',
//		themeType: 'normal',
//	}
//	
//	const weirdTheme = {
//		textColor: '#e3cf57',
//		backgroundColor: '#dda0dd',
//		themeType: 'weird',
//	}

import theme from '../../styled/Theme';

const initialState = {
	theme: theme.normalTheme
};

// Reducer
export default function reducer(state = initialState, action = {}) {

	switch (action.type) {

		case TOGGLE_THEME_NORMAL:
			return {
				theme: theme.normalTheme
			};

		case TOGGLE_THEME_WEIRD:
			return {
				theme: theme.weirdTheme
			};

		default:
			return state
	}
}

// Actions

export function isNormalTheme(globalState) {
	return globalState.theme && globalState.theme.themeType === 'normal';
}

export function toggleTheme(themeType) {
	const t = themeType === 'normal' ? TOGGLE_THEME_WEIRD : TOGGLE_THEME_NORMAL;
	return {
		type: t
	};
}
