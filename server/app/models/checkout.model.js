module.exports = (connex, Sequelize) => {
    const checkout = connex.define('checkout', {
        nom: {
            type: Sequelize.STRING
        },
        adresse: {
            type: Sequelize.STRING
        },
        ville: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        }
    })
    return checkout
}