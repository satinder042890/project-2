module.exports = function(sequelize, DataTypes) {
    let income = sequelize.define("income", {
            monthlyIncome: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            expenses: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            notes:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4]
                }
            },
            category: {
                type: DataTypes.STRING,
                defaultValue: "Personal"
            }, 
            note: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        });

        // income.associate = function(models) {
        //     income.belongsTo(models.userSignUp, {
        //         foreignKey: {
        //             allowNull: false
        //         }
        //     });
        // }

        return income;
};

