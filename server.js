const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const { join, resolve } = require('path');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const port = dev
  ? parseInt(process.env.PORT, 10) || 8000
  : parseInt(process.env.PORT, 10) || 5000;

const app = next({ dev, dir: dev ? './src' : './build' });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
});

app.prepare().then(() => {
  const server = express();

  server.use('/static', express.static(resolve(__dirname, './static')));

  server.get('/service-worker.js', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = join(__dirname, '.next', pathname);
    app.serveStatic(req, res, filePath);
  });

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
