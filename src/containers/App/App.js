import React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { SvgExample } from '../../components/SvgExample';
import { NavBar } from '../../components/NavBar';
import { DeviceState } from '../../components/DeviceState';
import { InfoBar } from '../../components/InfoBar';
import { Footer } from '../../components/Footer';
import config from '../../../config/config';

import styled from 'styled-components';
//	import { createGlobalStyle } from 'styled-components';

//	export const GlobalStyle = createGlobalStyle`
//		body {
//			font-family: 'Muli', sans-serif;
//			font-size:62.5%;
//			margin: 0;
//		}
//	`;

const BoxO = styled.div({
	background: 'palevioletred',
	height: '50px',
	width: '50px'
});
	
const BoxS = styled.div`
	background: papayawhip;
	height: 20px;
	width: 50px;
`;

export const App = (props) => {

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> App > props: ', props);

	const styles = require('./styles/App.scss');

	return (

		<div className={styles.app}>

			<HelmetProvider>

				<Helmet {...config.app.head} />

				{/* ------------- Navbar ------------- */}

				<NavBar />

				<BoxO/>

				<BoxS/>

				{/* ------------- Main Content ------------- */}

				{renderRoutes(props.route.routes)}

				{/* --------------- Svg Examples ----------------- */}

				{/* <SvgExample /> */}

				{/* --------------- InfoBar ---------------- */}

				<InfoBar />

				{/* ------------- Device State ----------- */}

				<DeviceState />

				{/* --------------- Footer ----------------- */}

				<Footer />

				{/* --------------- Modals ----------------- */}

			</HelmetProvider>

		</div>
	);
}
