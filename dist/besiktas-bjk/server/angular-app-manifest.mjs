
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 871, hash: '1c8a0f7e9c41570f195b345386307ec79a04ffa81dd318588891b77d196e59f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '842653f284352e25376b7409913e49271f1de34213a4891d85c9f0b9e21f2350', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2583, hash: 'c50fa08d959f64975f615dfb3dc60471fb93f736e0b3a7ec75e4d6275d20d877', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R5SQXBGS.css': {size: 37487, hash: 'iSUxSBqwwSQ', text: () => import('./assets-chunks/styles-R5SQXBGS_css.mjs').then(m => m.default)}
  },
};
