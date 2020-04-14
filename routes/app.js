const express = require("express");
const myCoolRoute = express.Router();

myCoolRoute.post("/test", async(req, res, next) =>{
    console.log(req.fields);
    res.end(JSON.stringify({ok:true}));
});

myCoolRoute.post("/test/:user", async(req, res, next) =>{
    console.log(req.fields);
    let _userid = req.params.user;
    res.end(JSON.stringify({message:`Hello ${_userid}`, ok:true}));
});

module.exports = myCoolRoute;

