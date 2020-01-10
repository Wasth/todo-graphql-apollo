import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { ExchangeRates } from './testfetch';

const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
		uri: 'https://48p1r2roz4.sse.codesandbox.io',
	})
});

function App(props){
	return <ApolloProvider client={client}>
		<h1>Hello World 🚀</h1>
		<ExchangeRates />
	</ApolloProvider>
}
ReactDOM.render(<App />, document.querySelector('#app'))
