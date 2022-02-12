import {sequelize} from "../../db";
import {INTEGER,STRING} from 'sequelize'

export const Users = sequelize.define('user', {
    id: {type: INTEGER,  primaryKey: true, autoIncrement: true},
    email: {type: STRING, unique : true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"},
})


