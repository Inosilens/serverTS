import {sequelize} from "../../db";
import {INTEGER,STRING} from 'sequelize'

export const Posts = sequelize.define('posts', {
    id: {type: INTEGER,  primaryKey: true, autoIncrement: true},
    body: {type: STRING,   allowNull: false},
    tittle: {type: STRING,   allowNull: false},
})


