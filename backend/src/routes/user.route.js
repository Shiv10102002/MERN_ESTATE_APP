import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/auth.controller.js";

const router = express.Router();
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id', verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);


export default router;