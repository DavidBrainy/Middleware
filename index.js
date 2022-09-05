const { request, response } = require("express");
const express = require("express");
const userRouter = require("./routes/users.route");

const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Welcome to my server. Please use/users to get all users");
});

app.use("/users", userRouter);

app.listen(4000, () => {
    console.log("server running on http://localhost:4000/" );
});