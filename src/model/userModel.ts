import { DataTypes, Model } from 'sequelize'
const sequelize = require("../authentication/dbConfigs")

interface TodoAttributes{
      id: number,
      title: string,
      completed: boolean
}
export class TodoInstance extends Model<TodoAttributes>{}
TodoInstance.init({
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
      },
      title: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          defaultValue: false
      }
}, {
      sequelize: sequelize,
      tableName:"user_database", 
}) 
