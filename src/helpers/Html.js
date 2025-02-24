import React from 'react';
import config from '../../config/config';

function Html({ assets, styledComponents, content, store, graphqlState }) {

	return (
		<>
			<head>

				<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover" />

				<link rel="shortcut icon" href={config.faviconPath} type="image/x-icon" />
				<link rel="manifest" href="/manifest.json" />

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="Election App 2020!" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta name="apple-mobile-web-app-title" content="Election App 2020!" />

				{/* (>>>>>>> STYLED-COMPONENTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{styledComponents}

				{/* (>>>>>>> STYLES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{assets.stylesheets 
					&& Object.keys(assets.stylesheets).map(key => (
						<link
							href={`${assets.publicPath}/${assets.stylesheets[key]}`}
							key={key}
							media="screen, projection"
							rel="stylesheet"
							type="text/css"
							charSet="UTF-8"
						/>
					))}

			</head>

			<body>

				{/* (>>>>>>> CONTENT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				<div role="main" id="react-root" dangerouslySetInnerHTML={{ __html: content }} />

				{/* (>>>>>>> STORE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{store && (
					<script
						dangerouslySetInnerHTML={{ __html: `window.__PRELOADED__=true; window.REDUX_DATA=${store};`}}
						charSet="UTF-8"
					/>
				)}

				{/* (>>>>>>> GRAPHQL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{graphqlState && (
					<script
						dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${graphqlState};`}}
						charSet="UTF-8"
					/>
				)}

				{/* (>>>>>>> SCRIPTS  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{assets.scripts 
					&& Object.keys(assets.scripts).map(key => (
						<script key={key} src={`${assets.publicPath}/${assets.scripts[key]}`} charSet="UTF-8" />
					))}

			</body>
		</>
	);
};

export default Html;
