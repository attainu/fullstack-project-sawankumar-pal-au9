import express from "express";
import { toGoogle, fromGoogle } from "../controllers/googleController.js";
const googleRouter = express.Router();

googleRouter.get('/', toGoogle);
googleRouter.get('/callback', fromGoogle);

export default googleRouter;