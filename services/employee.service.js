import EmployeeModel from "../models/employee.js";
import { generateRandId } from "../utils.js";
export default class EmployeeService {
  async getAll() {
    const foundEmployees = await EmployeeModel.findAll({
      order: [["id"]],
    });

    return foundEmployees;
  }

  async create(employee) {
    const newEmployee = {
      id: generateRandId(),
      ...employee,
    };

    const employeeRecord = await EmployeeModel.create(newEmployee);

    return employeeRecord;
  }

  async update(employeeId, newValues) {
    const updatedEmployee = await EmployeeModel.update(newValues, {
      where: { id: employeeId },
    });

    return updatedEmployee;
  }

  async delete(employeeId) {
    await EmployeeModel.destroy({ 
      where: { id: employeeId },
    });
  }
  static fromCSVtoEntity(csvItems) {
    const values = csvItems.split(","); 

    return {
      first_name: values[0],
      last_name: values[1],
      email: values[2],
    };
  }
}
