import React from 'react';
import { renderRoutes } from 'react-router-config';

// import { SvgExample } from '../../components/SvgExample';
import { NavBar } from '../../components/NavBar';
import { DeviceState } from '../../components/DeviceState';
import { InfoBar } from '../../components/InfoBar';
import { Footer } from '../../components/Footer';
import config from '../../../config/config';
const styles = require('./styles/App.scss');

export const App = (props) => {

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> App > props: ', props);

	return (

		<div className={styles.app}>

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

		</div>
	);
}
