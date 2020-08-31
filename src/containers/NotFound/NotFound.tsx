import React from 'react';
import { Helmet } from 'react-helmet-async';
//	import styles from './scss/NotFound.scss';

//	<h1 className={styles.notFoundUniqueColor}>Status Code 404!</h1>

export const NotFound: React.FC = () => {
	return (
		<div>
			<Helmet title="Page Not Found" />

			<h1>Status Code 404!</h1>

			<div>
				<div>
					<p>Page Not Found!</p>
				</div>
			</div>
		</div>
	);
};
