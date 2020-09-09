import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import config from '../../../config/config';

interface RootProps {
	route: any;
}

export const Root = ({ route }: RootProps) => {
	return (
		<>
			<HelmetProvider>
				<Helmet {...config.app.head} />
				{/* ------------- App ------------- */}
				{renderRoutes(route.routes)}
			</HelmetProvider>
		</>
	);
};
