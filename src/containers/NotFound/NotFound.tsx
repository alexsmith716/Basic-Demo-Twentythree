import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const StyledHeadingOne = styled.h1`
	color: #000;
`;

export const NotFound: React.FC = () => {
	return (
		<div>
			<Helmet title="Page Not Found" />
			<div className="container">
				<StyledHeadingOne className="mt-4 mb-3">Status Code 404!</StyledHeadingOne>
				<div>
					<div>
						<p>Page Not Found!</p>
					</div>
				</div>
			</div>
		</div>
	);
};
