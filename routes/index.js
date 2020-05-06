import express from "express";

import employeeRoute from "./employee.route.js";
import empDevPlanRoute from "./empDevPlan.route.js";
import infoRoute from "./info.route.js";

const router = express.Router();

router.use("/employee", employeeRoute);
router.use("/empDevPlan", empDevPlanRoute);
router.use("/info", infoRoute);

export default router;
