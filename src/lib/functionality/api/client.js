import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

export const client = new ApolloClient({
	link: PrismicLink({
		uri: "https://mj-theme.prismic.io/graphql",
	}),
	cache: new InMemoryCache()
});