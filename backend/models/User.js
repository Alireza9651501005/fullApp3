const Sequelize = require("sequelize");
const db = require("../database");

    const User = db.define("user", {
        korsName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    })

module.exports = User;