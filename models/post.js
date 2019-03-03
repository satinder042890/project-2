module.exports = function(sequelize, DataTypes) {
    let userSignUp = sequelize.define("userSignUp", {
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
        },
        personalize: {
            type: DataTypes.STRING,
            defaultValue: "ee6e73"
        }
    });
    return userSignUp;
};

// income.belongsTo(userSignUp);
