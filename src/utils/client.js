import Prismic from '@prismicio/client';

let url = 'mj-theme' // Change this to your Prismic ID

const apiEndpoint = 'https://' + url + '.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export default Client;