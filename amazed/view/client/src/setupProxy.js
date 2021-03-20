const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/google', {target: 'http://localhost:9800'}));
    app.use(createProxyMiddleware('/auth/facebook', {target: 'http://localhost:9800'}));
};