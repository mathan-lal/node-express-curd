import express from 'express';
const route = express.Router();
import { crateUser, updateUser, deleteUser, getUser } from '../controllers/user.controller.js';

route.post("/register", crateUser);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser)
route.get("/getuser/:id", getUser)

export default route;