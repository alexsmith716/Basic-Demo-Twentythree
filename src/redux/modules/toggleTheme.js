// Actions
const TOGGLE_THEME_DEFAULT = 'redux-example/toggleTheme/TOGGLE_THEME_DEFAULT';
const TOGGLE_THEME_DARK = 'redux-example/toggleTheme/TOGGLE_THEME_DARK';

import theme from '../../styled/Theme';

const initialState = {
	theme: theme.defaultTheme
};

// Reducer
export default function reducer(state = initialState, action = {}) {

	// console.log('>>>> toggleTheme > reducer > state.theme: ', state.theme);

	switch (action.type) {

		case TOGGLE_THEME_DEFAULT:
			return {
				theme: theme.defaultTheme
			};

		case TOGGLE_THEME_DARK:
			return {
				theme: theme.darkTheme
			};

		default:
			return state
	}
}

// Actions
export function isDefaultTheme(globalState) {
	return globalState.theme && globalState.theme.themeType === 'default';
}

export function toggleTheme(themeType) {
	const t = themeType === 'default' ? TOGGLE_THEME_DARK : TOGGLE_THEME_DEFAULT;
	return {
		type: t
	};
}
