import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
	background-color: ${p => p.theme.backgroundSyracuseOrange};
`;


export const Footer: React.FC = () => {
	return (
		<FooterStyled>
			<div className="container">
				<div className="flex-column-center pt-4 pb-4">
					<div>Copyright &copy; {new Date().getFullYear()} · Election App {new Date().getFullYear()}</div>
					<div className="flex-row-center">
						<span className="color-gold">svgFooterHeadphones</span>
						<span className="font-norwester color-gold">Footer Headphones</span>
					</div>
					<div>Don't Forget To Vote!</div>
				</div>
			</div>
		</FooterStyled>
	);
};
