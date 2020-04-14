const express = require("express");

const formidableMiddleware = require("express-formidable");

const test = require("./routes/app.js");

const formidableOpts = {
    keepExtensions:true
};

const formidableEvts = [
    {
        event:"error",
        action:function (error) {
            console.log(`An error has occurred ${error}`);  
        }
    },

    {
        event: "aborted",
        action:function () {
            console.log('Upload aborted');
            
        }
    }

];

const app= express();

app.use(
    formidableMiddleware(formidableOpts,formidableEvts),
);

app.use('app',test);

const appPort = 14000;

app.listen(process.env.PORT || appPort, () => {
    console.info("We are live!");
});
