const environment = {
	development: {
		isProduction: false,
		assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT || 3000}/dist`,
	},
	production: {
		isProduction: true,
		assetsPath: '/dist',
	},
}[process.env.NODE_ENV || 'development'];

const config = {
	faviconPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT || 3000}/favicon.ico`,
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 3000,
	app: {
		head: {
			title: 'Basic-Demo-Twentythree',
			titleTemplate: 'Basic-Demo-Twentythree: %s',
			meta: [
				{ name: 'description', content: 'Basic-Demo-Twentythree' },
				{ charset: 'UTF-8' },
				{ property: 'og:site_name', content: 'Basic-Demo-Twentythree' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:title', content: 'Basic-Demo-Twentythree' },
				{ property: 'og:description', content: 'Basic-Demo-Twentythree' },
				{ property: 'og:card', content: 'summary' },
				{ property: 'og:site', content: 'dev' },
				{ property: 'og:creator', content: 'dev' },
				{ property: 'og:image:width', content: '200' },
				{ property: 'og:image:height', content: '200' },
			],
		},
		csp: {
			directives: {
				'connect-src': [],
				'default-src': [],
				'manifest-src': [],
				'frame-src': [],
				'script-src': [],
				'style-src': [],
				'img-src': [],
				'font-src': [],
				'object-src': [],
				'block-all-mixed-content': true,
				'frame-ancestors': [],
			},
		},
	},
};

Object.assign(config, environment);
export default config;
