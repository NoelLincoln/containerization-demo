const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 3000;

app.use("/books", createProxyMiddleware({ target: "http://books-service:4001", changeOrigin: true }));
app.use("/users", createProxyMiddleware({ target: "http://users-service:4002", changeOrigin: true }));

app.get("/", (req, res) => res.send("Welcome to API Gateway!"));

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
