import express from "express";
import EmployeeService from "../services/employee.service.js";
import FileService from "../services/file.service.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const fileContent = await FileService.getItems(1, 1000);

    const empService = new EmployeeService();

    fileContent.forEach((line) => {
      const entity = EmployeeService.fromCSVtoEntity(line);

      empService.create(entity);
    });

    return res.send(200);
  } catch (e) {
    next(e);
  }
});

export default router;