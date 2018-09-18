"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = 3000;
// mount the controller
app.use('/welcome', controllers_1.WelcomeController);
// serve the application at port
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
