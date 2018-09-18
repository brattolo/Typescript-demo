import { Router, Request, Response } from "express";

// Assign router to the express.Router() instance
const router: Router = Router();

// the / here corresponds to the route that the controller is mounted on.
// in this case: /welcome (see server.ts)
router.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

router.get('/:name', (req: Request, res: Response) => {
    // extract the name from the parameters
    let { name } = req.params;

    res.json({
        message: `Hello, ${name}`
    })
});

// export the router to be used by the server.ts
export const WelcomeController: Router = router;