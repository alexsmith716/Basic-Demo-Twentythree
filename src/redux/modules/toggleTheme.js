// Actions
const TOGGLE_THEME_NORMAL = 'redux-example/toggleTheme/TOGGLE_THEME_NORMAL';
const TOGGLE_THEME_DARK = 'redux-example/toggleTheme/TOGGLE_THEME_DARK';

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

		case TOGGLE_THEME_DARK:
			return {
				theme: theme.darkTheme
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
	const t = themeType === 'normal' ? TOGGLE_THEME_DARK : TOGGLE_THEME_NORMAL;
	return {
		type: t
	};
}
