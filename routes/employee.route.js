import express from "express";
import typedi from "typedi";
import EmployeeService from "../services/employee.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const employeeService = Container.get(EmployeeService);

    const employees = await employeeService.getAll();

    return res.json(employees);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const employeeService = Container.get(EmployeeService);

    const employee = req.body;

    await employeeService.create(employee);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const employeeService = Container.get(EmployeeService);

    const id = req.params.id;

    const updateValues = req.body;

    await employeeService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const employeeService = Container.get(EmployeeService);

    const employeeId = req.params.id;

    await employeeService.delete(employeeId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
