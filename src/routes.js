import { App } from './containers/App';
import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';

import About from './containers/About/Loadable';
// import GraphqlPage from './containers/GraphqlPage/Loadable';
// import GridLayout from './containers/GridLayout/Loadable';

import { preloadData as preloadDataApp } from './containers/App/preloadData';

import './theme/scss/global/styles.global.scss';

const routes = [{
	path: '/',
	component: App,
	loadData: preloadDataApp,
	meta: {
		title: 'Basic Demo Twentythree',
		description: 'Component App'
	},
	routes: [
		{
			path: '/',
			exact: true,
			component: Home,
			meta: {
				title: 'Basic Demo Twentythree',
				description: 'Component Home'
			}
		},
		{
			path: '/about',
			exact: true,
			component: About,
			meta: {
				title: 'Basic Demo Twentythree',
				description: 'Component About'
			}
		},
		//	{
		//		path: '/graphqlpage',
		//		exact: true,
		//		component: GraphqlPage,
		//	},
		//	{
		//		path: '/gridlayoutpage',
		//		exact: true,
		//		component: GridLayout,
		//	},
		{
			path: '*',
			component: NotFound,
			meta: {
				title: 'Basic Demo Twentythree',
				description: 'NotFound 404'
			}
		}
	]
}];

export default routes;
