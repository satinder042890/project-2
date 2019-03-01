module.exports = function(sequelize, DataTypes) {
    let userSignUp = sequelize.define("table1", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [2, 20]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 15]
            }
        },
        monthlyIncome: {
            type: DataTypes.INTEGER
        }
    });
    return userSignUp;


    let 
};