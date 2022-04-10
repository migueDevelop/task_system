import { Router } from "express";

//Import routes functions
import {
  renderTask,
  updateTask,
  deleteTask,
  toggleTask,
  addTask,
  dataUpdate,
} from "../controllers/task.controller";

const router = Router();

//GET
router.get("/", renderTask);
router.get("/task/:id/edit", updateTask);
router.get("/task/:id/delete", deleteTask);
router.get("/task/:id/toggleDone", toggleTask);

//POST
router.post("/task/add", addTask);
router.post("/task/:id/edit", dataUpdate);

export default router;
