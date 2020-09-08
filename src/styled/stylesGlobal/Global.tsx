import { createGlobalStyle } from 'styled-components';

import { Colors } from '../shared/Colors'

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-family: sans-serif;
	line-height: 1.15;
}

body {
	padding-top: 56px;
	margin: 0;
	font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	font-size: 1;
	font-weight: 400;
	line-height: 1.5;
	color: ${Colors.gray-900};
	text-align: left;
}

hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
	margin-top: 0;
	margin-bottom: 0.5rem;
}

img {
	vertical-align: middle;
	border-style: none;
}

p {
	margin-top: 0;
	margin-bottom: 1rem;
}
`;
