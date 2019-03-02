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
        }
    });
    return userSignUp;
};

// module.exports = function(sequelize, DataTypes) {
//     let income = sequelize.define("table2", {
//             monthlyIncome: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             expenses: {
//                 type: DataTypes.TEXT,
//                 allowNull: false,
//                 validate: {
//                     len: [1]
//                 }
//             },
//             category: {
//                 type: DataTypes.STRING,
//                 defaultValue: "Personal"
//             }
//         });
//         return income;
// };

// income.belongsTo(userSignUp);
