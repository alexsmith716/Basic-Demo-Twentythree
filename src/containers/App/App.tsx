import React from 'react';
import { renderRoutes } from 'react-router-config';

// import { SvgExample } from '../../components/SvgExample';
import { NavBar } from '../../components/NavBar';
import { DeviceState } from '../../components/DeviceState';
import { InfoBar } from '../../components/InfoBar';
import { Footer } from '../../components/Footer';

interface AppProps {
	route: any;
}

export const App = ({ route }: AppProps) => {
	return (
		<>
			{/* ------------- Navbar ------------- */}
			<NavBar />
			{/* ------------- Main Content ------------- */}
			{renderRoutes(route.routes)}
			{/* --------------- Svg Examples ----------------- */}
			{/* <SvgExample /> */}
			{/* --------------- InfoBar ---------------- */}
			<InfoBar />
			{/* ------------- Device State ----------- */}
			<DeviceState />
			{/* --------------- Footer ----------------- */}
			<Footer />
			{/* --------------- Modals ----------------- */}
		</>
	);
}
