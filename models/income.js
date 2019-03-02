module.exports = function(sequelize, DataTypes) {
    let income = sequelize.define("income", {
            monthlyIncome: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            expenses: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            category: {
                type: DataTypes.STRING,
                defaultValue: "Personal"
            }
        });
        return income;
};