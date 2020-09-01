import React from 'react';

export const Footer: React.FC = () => {
	return (
		<div className="bg-syracuse-orange">
			<div className="container">
				<div className={`pt-4 pb-4`}>
					<div>{`Copyright &copy; {new Date().getFullYear()} · Election App {new Date().getFullYear()}`}</div>
					<div>
						<span className={`color-gold`}></span>
						<span className={`font-norwester color-gold`}>Footer Headphones</span>
					</div>
					<div>Don't Forget To Vote!</div>
				</div>
			</div>
		</div>
	);
};
