import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const GraphQLClient = (uri: string) => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri
		})
	})
}