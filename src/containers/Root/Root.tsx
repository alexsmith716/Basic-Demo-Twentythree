import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import config from '../../../config/config';

export interface RootProps {
	route: any;
}

export const Root: React.FC = ({ route }: RootProps) => {
	// console.log('>>>>>>>>>>>>>>>>>>>>>>>> Root > route: ', route);
	return (
		<div>
			<HelmetProvider>
				<Helmet {...config.app.head} />
				{/* ------------- App ------------- */}
				{renderRoutes(route.routes)}
			</HelmetProvider>
		</div>
	);
};
