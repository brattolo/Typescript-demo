"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
// the / here corresponds to the route that the controller is mounted on.
// in this case: /welcome (see server.ts)
router.get('/', function (req, res) {
    res.send('hello world');
});
router.get('/:name', function (req, res) {
    // extract the name from the parameters
    var name = req.params.name;
    res.send("Hello, " + name);
});
// export the router to be used by the server.ts
exports.WelcomeController = router;
