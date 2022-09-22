const db = require('./db')

const Post = db.sequelize.define('acoes', {
    ativo: {
        type: db.Sequelize.TEXT
    },
    precomedio: {
        type: db.Sequelize.FLOAT
    },
    precoatual: {
        type: db.Sequelize.FLOAT
    },
    diferenca: {
        type: db.Sequelize.FLOAT
    },
    quantidade: {
        type: db.Sequelize.FLOAT
    },
    patrimonio: {
        type: db.Sequelize.FLOAT
    },
    variacaohoje: {
        type: db.Sequelize.FLOAT
    },
    variacaototal: {
        type: db.Sequelize.FLOAT
    },
    porcentagemacoes: {
        type: db.Sequelize.FLOAT
    },
    porcentagemcarteira: {
        type: db.Sequelize.FLOAT
    }
})

// Post.sync({force: true})

module.exports = Post