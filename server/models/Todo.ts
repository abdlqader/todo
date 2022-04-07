import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db/connection';
import { User } from './User';

export interface TodoInterface {
  ID: number;
  title: string;
  description: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Todo extends Model<TodoInterface, TodoInterface> {
  public ID!: number;
  public title!: string;
  public description!: string;
  public userId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Todo.init(
  {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: 'Todos',
    sequelize,
  }
);

User.hasMany(Todo, { foreignKey: 'userId' });
Todo.hasOne(User, { foreignKey: 'userId' });
