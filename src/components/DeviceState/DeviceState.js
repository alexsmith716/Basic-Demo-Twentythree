import React from 'react';
import { useSelector } from 'react-redux';

export const DeviceState = () => {

	const online = useSelector(state => state.online);
	const userAgent = useSelector(state => state.device.userAgent);
	const isBot = useSelector(state => state.device.isBot);

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > online    ????: ', online);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > userAgent ????: ', userAgent);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > isBot     ????: ', isBot);

	const styles = require('./scss/DeviceState.scss');

	return (

		<div className="container">
			<div className="flex-column-center mb-5 ">
				<div className={`${styles.deviceState}`}>
					<div className="color-olive font-opensans-bold-webfont">{`'online' store state is ${online} !`}</div>
					<div className="color-crimson font-philosopher-bold-webfont">{`device 'userAgent' store state is ${userAgent} !`}</div>
					<div className="color-orangered font-norwester">{`device 'bot' store state is ${isBot} !`}</div>
					<div className={styles.colorGreenyellowCssLocal}>stylesCSS.colorGreenyellowCssLocal</div>
				</div>
			</div>

		</div>
	);
}
