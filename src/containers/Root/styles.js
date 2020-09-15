import styled, { css } from 'styled-components';
import { Colors } from '../../styled/Colors';

export const RootComponent = styled.div`
	// background-color: ${Colors.lightskyblue};
  ${props => props.clicked && css`
    background: #343a40;
    left: 0;
    opacity: 1;
    z-index: 1;
  `}
`;
