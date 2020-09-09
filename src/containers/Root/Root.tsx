import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import * as Styles from './styles';
import { Global } from '../../styled';
import config from '../../../config/config';


interface RootProps {
	route: any;
}

export const Root = ({ route }: RootProps) => {
	return (
		<Styles.RootComponent>
			<HelmetProvider>
				<Helmet {...config.app.head} />
				<Global.GlobalStyle />
				{/* ------------- App ------------- */}
				{renderRoutes(route.routes)}
			</HelmetProvider>
		</Styles.RootComponent>
	);
};
