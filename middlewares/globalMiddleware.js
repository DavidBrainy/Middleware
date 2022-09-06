const { request, response } = require("express");

const globalMiddleware = (request, response, next) =>{
    console.log("global Middleware started");
    next();
    console.log("globalMiddleware ended");
};

module.exports = {
    globalMiddleware,
};