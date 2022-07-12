'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

const express = require('express')
const router = express.Router()

// router.get('/:slug', async (req, res) => {
//     try {
//         const data = await Product.findOne({active: true, slug: req.params.slug}, 'title price slug description')
//         res.status(200).send(data)
//     } catch (e) {res.status(400).send(e)}
// })

router.get('/:email', async (req, res) => {
    try {
        const data = await User.find({active: true, email: req.params.email})
        res.status(200).send(data)
    } catch (e) {res.status(400).send(e)}
})

router.post('/', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
    }
    catch (e) {
        res.status(400).send({
            message: 'Falha no cadastro',
            data: e
        })
    }
    res.status(201).send({
        message: "Usuário cadastrado"
    })
})

router.put('/:login', async (req, res) => {
    try{
        await User
        .findByIdAndUpdate(req.params.login, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                number: req.body.number
            }
        });
        res.status(201).send({
            message: 'Usuario atualizado com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha no cadastro',
            data: e
        });
    }
})

router.delete('/:login', async (req, res) => {
    try{
        await User
        .findByIdAndRemove(req.params.login);
        res.status(200).send({
            message: 'Usuário deletado com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
})

module.exports = router