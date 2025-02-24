import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
	text: string;
}

const dot = keyframes`
	0% {
		opacity: 0.25;
	}
	50% {
		opacity: 0.25;
	}
	100% {
		opacity: 1;
	}
`;

const DotOne = styled.span`
	opacity: 10;
	animation: ${dot} 1.3s infinite;
	animation-delay: 0s;
`;

const DotTwo = styled.span`
	opacity: 10;
	animation: ${dot} 1.3s infinite;
	animation-delay: 0.2s;
`;

const DotThree = styled.span`
	opacity: 10;
	animation: ${dot} 1.3s infinite;
	animation-delay: 0.3s;
`;

export const Loading = ({ text }: LoadingProps) => {
	return (
		<div>
			{text}
			<DotOne>.</DotOne>
			<DotTwo>.</DotTwo>
			<DotThree>.</DotThree>
		</div>
	);
};
