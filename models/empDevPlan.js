import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Emp_Dev_Plan = sequelize.define("Emp_Dev_Plan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  dev_plan_name: { type: DataTypes.STRING },
  employee_id: { type: DataTypes.INTEGER },
});

export default Emp_Dev_Plan;
