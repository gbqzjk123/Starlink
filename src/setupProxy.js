const { createProxyMiddleware } = require("**********");
module.exports = function(app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "*********",
            changeOrigin: true
        })
    );
};
