import multireducer from 'multireducer';

// isolate concerns within a Redux application (modules)
// https://github.com/erikras/ducks-modular-redux

import info from './modules/info';
import infoAlert from './modules/infoAlert';
import infoAlertThree from './modules/infoAlertThree';
import toggleTheme from './modules/toggleTheme';

export default function rootReducer() {
	return {
		online: (v = true) => v,
		info,
		infoAlert,
		infoAlertThree,
		toggleTheme,
	};
}
