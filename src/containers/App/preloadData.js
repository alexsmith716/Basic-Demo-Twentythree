import { isLoaded as isInfoLoaded, loadInfo } from '../../redux/modules/info';
import { isLoaded as isInfoAlertLoaded, load as loadInfoAlert } from '../../redux/modules/infoAlert';

async function preloadData(store, getState) {
	// console.log('>>>>>>>>>>>>>>>> APP > preloadData > isInfoLoaded?: ', isInfoLoaded(store.getState()))
	if (!isInfoLoaded(store.getState())) {
		await store.dispatch(loadInfo());
	}

	// console.log('>>>>>>>>>>>>>>>> APP > preloadData > isInfoAlertLoaded?: ', isInfoAlertLoaded(store.getState()))
	if (!isInfoAlertLoaded(store.getState())) {
		await store.dispatch(loadInfoAlert());
	}
}

export { preloadData };
