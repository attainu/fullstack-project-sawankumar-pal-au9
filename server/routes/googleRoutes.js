import express from "express";
import { toGoogle, fromGoogle } from "../controllers/googleController.js";
const googlerouter = express.Router();

googlerouter.get('/', toGoogle);
googlerouter.get('/callback', fromGoogle);

export default googlerouter;