const express = require("express");

const app = express(),
    port = 5000;

app.get("/", (_req, res) => {
    res.send("Backend is up!");
});

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default server;
