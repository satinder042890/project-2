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

        income.associate = function(models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            income.belongsTo(models.userSignUp, {
              foreignKey: {
                allowNull: false
              }
            });
          };

        return income;
};