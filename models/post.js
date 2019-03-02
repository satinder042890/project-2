module.exports = function(sequelize, DataTypes) {
    let userSignUp = sequelize.define("table1", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 30]
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
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return userSignUp;
};

// income.belongsTo(userSignUp);