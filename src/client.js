import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';

import localForage from 'localforage';
import { getStoredState } from 'redux-persist';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';

import { onError } from '@apollo/client/link/error';

import { ThemeProvider } from 'styled-components';
import { AppTheme } from './styled';

import defineHeaders from './utils/defineHeaders';

import { Provider } from 'react-redux';
import asyncGetPromises from './utils/asyncGetPromises';

import RouterTrigger from './components/RouterTrigger/RouterTrigger';
import { ScrollToTop } from './components/ScrollToTop';

import routes from './routes';
import apiClient from './helpers/apiClient';
import configureStore from './redux/configureStore';
import isOnline from './utils/isOnline';
import './utils/navbarDOMCollapse';

const persistConfig = {
	key: 'root',
	storage: localForage,
	// redux-persist:
	// inboundState:  the state being rehydrated from storage
	// originalState: the state before the REHYDRATE action
	stateReconciler(inboundState, originalState) {
		// preloadedState from window object
		return originalState;
	},
	// redux-persist:
	// whitelist: ['info', 'infoAlert', 'infoAlertThree', ],
};

const spinnerContainer = document.createElement('div');
spinnerContainer.classList.add('spinner-progress');
//  // spinnerContainer.className = 'spinner-progress';
const dest = document.getElementById('react-root');
document.body.insertBefore(spinnerContainer, dest);

const client = apiClient();

const providers = {
	client,
};

// =====================================================

(async () => {

	// redux-persist:
	// delays rendering of app UI until persisted state has been retrieved and saved to redux
	const preloadedState = await getStoredState(persistConfig);
	const online = window.REDUX_DATA ? true : await isOnline();
	const history = createBrowserHistory();

	defineHeaders();

	const store = configureStore({
		history,
		data: {
			...preloadedState,
			...window.REDUX_DATA,
			online,
		},
		helpers: providers,
		persistConfig,
	});

	//	const httpLink = createHttpLink({
	//		uri: 'http://localhost:4000/graphql',
	//	});

	//	const restLink = new RestLink({ 
	//		uri: 'https://rickandmortyapi.com/api/',
	//	});

	//	const errorLink = onError(({ graphQLErrors, networkError }) => {
	//		if (graphQLErrors) {
	//			graphQLErrors.map(({ message, locations, path }) =>
	//				console.log(`>>>> CLIENT > [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,),
	//			);
	//		}

	//		if (networkError) {
	//			console.log(`>>>> CLIENT > [Network error]: ${networkError}`);
	//		}
	//	});

	//	const link = ApolloLink.from([
	//		// restLink,
	//		errorLink,
	//		httpLink,
	//	]);

	//	const clientApollo = new ApolloClient({
	//		ssrMode: false,
	//		cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
	//		link,
	//	});

	const triggerHooks = async (_routes, pathname) => {
		// console.log('>>>> CLIENT > triggerHooks > store.getState() 1111 ######: ', store.getState());
		spinnerContainer.classList.add('spinner');

		// Don't fetch data for initial route, server has already done the work:
		if (window.__PRELOADED__) {
			// Delete initial data so that subsequent data fetches can occur:
			console.log('>>>> CLIENT > triggerHooks > window.__PRELOADED__ YES: ', window.__PRELOADED__);
			delete window.__PRELOADED__;
		} else {
			// Fetch mandatory data dependencies for 2nd route change onwards:
			console.log('>>>> CLIENT > triggerHooks > window.__PRELOADED__ NO > await asyncGetPromises()');
			await asyncGetPromises(_routes, pathname, store);
		}

		spinnerContainer.classList.remove('spinner');
		// console.log('>>>> CLIENT > triggerHooks > store.getState() 2222 ######: ', store.getState());
	};

	const hydrate = (_routes) => {
		const element = (
			<HelmetProvider>
				<Provider store={store} {...providers}>
					<Router history={history}>
						<ThemeProvider theme={AppTheme.theme.defaultTheme}>
							<ScrollToTop />
							<RouterTrigger triggerProp={(pathname) => triggerHooks(_routes, pathname)}>
								{renderRoutes(_routes)}
							</RouterTrigger>
						</ThemeProvider>
					</Router>
				</Provider>
			</HelmetProvider>
		);

		if (dest.hasChildNodes()) {
			ReactDOM.hydrate(element, dest);
		} else {
			ReactDOM.render(element, dest);
		}
	};

	hydrate(routes);

})();
