import { Router } from "express";
import {
  getEmployee,
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees/:id", getEmployee);
router.get("/employees", getEmployees);
router.post("/employees", createEmployees);
router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;
