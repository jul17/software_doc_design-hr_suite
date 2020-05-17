import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
},
  { tableName: "Employee" });

export default Employee;
