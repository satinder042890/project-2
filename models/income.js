module.exports = function(sequelize, DataTypes) {
    let income = sequelize.define("income", {
            monthlyIncome: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            expenses: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    len: [1]
                }
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
            }
        });
        return income;
};