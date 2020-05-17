import express from "express";
import typedi from "typedi";
import EmpDevPlanService from "../services/empDevPlan.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const empDevPlanService = Container.get(EmpDevPlanService);

    const empDevPlans = await empDevPlanService.getAll();

    return res.json(empDevPlans);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const empDevPlanService = Container.get(EmpDevPlanService);

    const empDevPlan = req.body;

    await empDevPlanService.create(empDevPlan);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const empDevPlanService = Container.get(EmpDevPlanService);

    const id = req.params.id;

    const updateValues = req.body;

    await empDevPlanService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const empDevPlanService = Container.get(EmpDevPlanService);

    const empDevPlanId = req.params.id;

    await empDevPlanService.delete(empDevPlanId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
