import express from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// find all users
router.get('/', getUsers);

// create a user
router.post('/', createUser);

// find a user
router.get('/:id', getUser);

// update a user
router.patch('/:id', updateUser);

// delete a user
router.delete('/:id', deleteUser);

export default router;