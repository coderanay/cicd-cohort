const express = require("express");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello-world");
});

app.get("/chai",(req,res) => {
    res.send("Hello world chai");
})

app.get("/:id", (req, res) => {
    res.send(`Hello hitesh world ${req.params.id}`);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
}

module.exports = app;
