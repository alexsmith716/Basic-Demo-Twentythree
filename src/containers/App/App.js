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

export const App = (props) => {

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> App > props: ', props);

	const styles = require('./styles/App.scss');

	return (

		<div className={styles.app}>

			<HelmetProvider>

				<Helmet {...config.app.head} />

				{/* ------------- Navbar ------------- */}

				<NavBar />

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
