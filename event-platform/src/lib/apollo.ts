import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obko4k1qqf01xxd1x4a8vu/master',
    cache: new InMemoryCache()
})