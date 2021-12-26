import Prismic from '@prismicio/client';
const apiEndpoint = 'https://mj-theme.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export default Client;