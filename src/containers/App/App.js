import React from 'react';
import { ThemeProvider } from 'styled-components';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

// import { SvgExample } from '../../components/SvgExample';
import { NavBar } from '../../components/NavBar';
import { DeviceState } from '../../components/DeviceState';
import { InfoBar } from '../../components/InfoBar';
import { Footer } from '../../components/Footer';

export const ThemeContext = React.createContext();

export const App = ({ route }) => {

	const toggledTheme = useSelector(state => state.toggleTheme.theme);

	return (
		<ThemeContext.Provider value={toggledTheme}>
			<ThemeProvider theme={toggledTheme}>
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
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
