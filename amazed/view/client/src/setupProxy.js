const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/google', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/auth/facebook', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/categories', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/products', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/details', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/reviews', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/orders', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/cart', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/users', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/subcategories', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/coupons', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/contacts', {target: 'http://localhost:9800', changeOrigin: true}));
    app.use(createProxyMiddleware('/transaction', {target: 'http://localhost:9800', changeOrigin: true}));
};