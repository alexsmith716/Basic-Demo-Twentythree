import React from 'react';
import { Helmet } from 'react-helmet-async';


export const NotFound = () => {

	const styles = require('./scss/NotFound.scss');

	return (
		<div>

			<Helmet title="Page Not Found" />

			<h1 className={styles.notFoundUniqueColor}>Status Code 404!</h1>

			<div>
				<div>
					<p>Page Not Found!</p>
				</div>
			</div>
		</div>
	);
}
