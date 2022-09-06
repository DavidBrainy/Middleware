const { request, response } = require("express");

const pathMiddleware = (request, response, next) =>{
    console.log("global Middleware started");
    next();
    console.log("Path Middle ware ended");
};

module.exports = {
    pathMiddleware,
};