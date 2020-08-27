import { App } from './containers/App';
import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';

import About from './containers/About/Loadable';
// import GraphqlPage from './containers/GraphqlPage/Loadable';
// import GridLayout from './containers/GridLayout/Loadable';

import { preloadData as preloadDataApp } from './containers/App/preloadData';

import './theme/scss/global/styles.global.scss';

const routes = [
	{
		component: App,
		loadData: preloadDataApp,
		routes: [
			{ path: '/', exact: true, component: Home },
			{ path: '/about', component: About },
			// { path: '/graphqlpage', component: GraphqlPage },
			// { path: '/gridlayoutpage', component: GridLayout },
			// { component: NotFound },
		],
	},
];

export default routes;
