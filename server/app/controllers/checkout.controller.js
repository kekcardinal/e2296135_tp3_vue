const db = require('../models')
const Checkout = db.Checkouts

exports.findAll = (req, res) => {
    Checkout.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'table not found'
            })
        })
}

exports.create = (req, res) => {
    // console.log(req.body)

    if (!req.body.name || !req.body.photo) {
        res.status(400).send({
            message: 'Name & Photo are mandatory'
        })
        return
    }

    Checkout.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(e => {
            res.status(500).send({
                message: 'Could not insert into DB'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Checkout.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(e => {
            res.status(500).send({
                message: 'could not find the data'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id
    Checkout.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Checkout updated'
                })
            } else {
                res.send({
                    message: 'Could not update'
                })
            }
        })
        .catch(e => {
            res.status(500).send({
                message: 'Database Error'
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Checkout.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Checkout was deleted'
                })
            } else {
                res.send({
                    message: 'Could not delete'
                })
            }
        })
        .catch(e => {
            res.status(500).send({
                message: 'Database Error'
            })
        })
}