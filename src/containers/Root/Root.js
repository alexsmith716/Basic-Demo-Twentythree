import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import config from '../../../config/config';

export const Root = (props) => {
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> Root > props: ', props);
	return (
		<div>
			<HelmetProvider>
				<Helmet {...config.app.head} />
				{/* ------------- App ------------- */}
				{renderRoutes(props.route.routes)}
			</HelmetProvider>
		</div>
	);
};
