const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    './src/assets/models/source', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:3000', // The URL of your backend server
      changeOrigin: true,
    })
  );
};