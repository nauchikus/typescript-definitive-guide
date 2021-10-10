import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    // ssrMode: typeof window === "undefined",
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer ${
            process.env.GITHUB_TOKEN
        }`,
    },
    cache: new InMemoryCache(),
});

export default client;