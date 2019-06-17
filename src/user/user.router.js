import { Router } from 'express';
import { getUsers } from './user.controllers';

export const userRouter = Router();

userRouter
    .route('/')
    .get(getUsers);
