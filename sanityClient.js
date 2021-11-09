import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'qs3jzs1o',
  dataset: 'production',
  useCdn: false
});