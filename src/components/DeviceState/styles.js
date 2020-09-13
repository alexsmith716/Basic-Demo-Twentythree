import styled from 'styled-components';
import { Colors } from '../../styled/Colors';

export const DeviceStateStyled = styled.div`
	background-color: #fffff0;
	border: 2px solid #b0c4de;
	padding: 16px;
`;

export const StoreStateOnline = styled.div`
	color: ${Colors.olive};
	font-family: 'OpenSansBold';
`;

export const StoreStateUserAgent = styled.div`
	color: ${Colors.crimson};
	font-family: 'PhilosopherBold';
`;

export const StoreStateIsBot = styled.div`
	color: ${Colors.orangered};
	font-family: 'Norwester';
`;

export const StoreStateBlurb = styled.div`
	color: ${Colors.mediumspringgreen};
	font-family: 'OldEnglish';
`;
