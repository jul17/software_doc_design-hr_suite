import EmpDevPlanModel from "../models/empDevPlan.js";
import { generateRandId } from "../utils.js";

export default class EmpDevPlanService {
  async getAll() {
    const foundEmployees = await EmpDevPlanModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundEmployees;
  }

  async create(empDevPlan) {
    const newEmpDevPlan = {
      id: generateRandId(),
      ...empDevPlan,
    };

    const empDevPlanRecord = await EmpDevPlanModel.create(newEmpDevPlan);

    return empDevPlanRecord;
  }

  async update(empDevPlanId, newValues) {
    const updatedEmpDevPlan = await EmpDevPlanModel.update(newValues, {
      where: { id: empDevPlanId },
    });

    return updatedEmpDevPlan;
  }

  async delete(empDevPlanId) {
    await EmpDevPlanModel.destroy({
      where: { id: empDevPlanId },
    });
  }
}
