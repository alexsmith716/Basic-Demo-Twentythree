import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import * as Styles from './styles';
import { Global } from '../../styled';
import config from '../../../config/config';

export const Root = ({ route }) => {

  const toggledTheme = useSelector(state => state.toggleTheme.theme);

  // { textColor: '#e3cf57', backgroundColor: '#dda0dd' }

	return (
		<Styles.RootComponent>
			<HelmetProvider>
				<Helmet {...config.app.head} />
				<Global.GlobalStyle theme={toggledTheme}/>
				{/* ------------- App ------------- */}
				{renderRoutes(route.routes)}
			</HelmetProvider>
		</Styles.RootComponent>
	);
};
