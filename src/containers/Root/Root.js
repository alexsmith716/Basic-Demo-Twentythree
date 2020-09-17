import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

// import * as Styles from './styles';
import { Global } from '../../styled';
import config from '../../../config/config';

export const Root = ({ route }) => {

	const toggledTheme = useSelector(state => state.toggleTheme.theme);

	return (
		<>
			<HelmetProvider>
				<Helmet {...config.app.head} />
					<Global.GlobalStyle theme={toggledTheme}/>
					{/* ------------- App ------------- */}
					{renderRoutes(route.routes)}
			</HelmetProvider>
		</>
	);
};
