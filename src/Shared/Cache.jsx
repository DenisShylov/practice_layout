import createCache from '@emotion/cache';

export const cache = createCache({
  key: 'my-styles',
  prepend: true,
});
