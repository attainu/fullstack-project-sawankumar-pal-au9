import express from 'express';
import { AddQuery } from '../controllers/contactsController.js';

const contactsRouter = express.Router();

contactsRouter.post('/', AddQuery);

export default contactsRouter;