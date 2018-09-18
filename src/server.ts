import express from "express";

import { WelcomeController } from "./controllers";

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = 3000;

// mount the controller
app.use('/welcome', WelcomeController);

// serve the application at port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})