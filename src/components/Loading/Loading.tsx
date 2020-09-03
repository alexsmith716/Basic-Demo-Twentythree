import React from 'react';
const styles = require("./scss/Loading.scss");

interface LoadingProps {
  text: string;
}

export const Loading = ({ text }: LoadingProps) => {
	return (
		<div>{text}<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></div>
	);
};
