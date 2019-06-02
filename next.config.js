const withTypescript = require('@zeit/next-typescript');
const withOffline = require('next-offline');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const siteConfig = require('./site.config');

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  webpack(config, { isServer, dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    if (!isServer && !dev) {
      config.plugins.push(
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: siteConfig.site,
          short_name: siteConfig.shortName,
          description: siteConfig.description,
          background_color: '#ffffff',
          theme_color: siteConfig.color,
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          icons: [
            {
              src: path.resolve('static/icon.png'),
              sizes: [32, 64, 96, 128, 192, 256, 384, 512],
              destination: '/static'
            }
          ],
          includeDirectory: true,
          publicPath: '..'
        })
      );
    }

    return config;
  }
};

module.exports = withOffline(withTypescript(nextConfig));
