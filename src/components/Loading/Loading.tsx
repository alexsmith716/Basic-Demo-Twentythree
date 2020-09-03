import React from 'react';
const styles = require("./scss/Loading.scss");

export const Loading: React.FC = () => {
	return (
		<div>Loading<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></div>
	);
};
