import express from "express";
import { getAll, register, login, profile, profileById, updateUser, updateUserToAdmin, deleteUser } from "../controllers/userController.js";
import { rateLimiterRouter } from '../utils/rateLimiter.js';

const userRoutes = express.Router();
// userRoutes.use(rateLimiterRouter);

userRoutes.get('/', getAll);
userRoutes.post('/register', rateLimiterRouter, register);
userRoutes.post('/login', rateLimiterRouter, login);
userRoutes.get('/profile', profile);
userRoutes.get('/:id', profileById);
userRoutes.put('/:id', updateUser);
userRoutes.put('admin/:id', updateUserToAdmin);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;