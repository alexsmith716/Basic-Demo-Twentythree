import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

// import * as Styles from './styles';
import { Global } from '../../styled';
import config from '../../../config/config';

interface RootProps {
	route: any
};

interface RootState {
	toggleTheme: any;
};

export const Root = ({route}: RootProps) => {

	const toggledTheme = useSelector((state: RootState) => state.toggleTheme.theme);

  console.log('>>>> Root > interface > route: ', route);
  console.log('>>>> Root > interface > route222: ', typeof route);

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
