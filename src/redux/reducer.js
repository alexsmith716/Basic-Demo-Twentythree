import multireducer from 'multireducer';

// isolate concerns within a Redux application (modules)
// https://github.com/erikras/ducks-modular-redux

import device from './modules/device';
import info from './modules/info';
import infoAlert from './modules/infoAlert';
import toggleTheme from './modules/toggleTheme';

export default function rootReducer() {
  return {
    online: (v = true) => v,
    device,
    info,
    infoAlert,
    toggleTheme,
  };
}
