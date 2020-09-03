import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DeviceStateStyled = styled.div`
	background-color: #fffff0;
	border: 2px solid #b0c4de;
	padding: 16px;
`;


export const DeviceState = () => {

	const online = useSelector(state => state.online);
	const userAgent = useSelector(state => state.device.userAgent);
	const isBot = useSelector(state => state.device.isBot);

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > online    ????: ', online);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > userAgent ????: ', userAgent);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > isBot     ????: ', isBot);


	return (

		<div className="container">
			<div className="flex-column-center mb-5">
				<DeviceStateStyled className="flex-column-center">
					<div className="color-olive font-opensans-bold-webfont">{`'online' store state is ${online} !`}</div>
					<div className="color-crimson font-philosopher-bold-webfont">{`device 'userAgent' store state is ${userAgent} !`}</div>
					<div className="color-orangered font-norwester">{`device 'bot' store state is ${isBot} !`}</div>
					<div className="color-olive">DeviceStateStyled!</div>
				</DeviceStateStyled>
			</div>

		</div>
	);
}
