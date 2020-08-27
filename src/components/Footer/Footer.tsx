import React from 'react';
import styles from './scss/Footer.scss';

export const Footer: React.FC = () => {
	return (
		<div className="bg-syracuse-orange">
			<div className="container">
				<div className={`pt-4 pb-4 ${styles.footerContainer} ${styles.copyright}`}>
					<div>{`Copyright &copy; {new Date().getFullYear()} · Election App {new Date().getFullYear()}`}</div>
					<div className={styles.footerItems}>
						<span className={`color-gold ${styles.svgFooterHeadphones}`}></span>
						<span className={`font-norwester color-gold`}>Footer Headphones</span>
					</div>
					<div>Don&apos;t Forget To Vote!</div>
				</div>
			</div>
		</div>
	);
};
