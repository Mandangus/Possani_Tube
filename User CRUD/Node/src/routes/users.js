'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let data;
    try {
        data = await User.find({active: true})
    } catch (e) {return res.status(400).send(e)}
    return res.status(200).send(data)
})

router.get('/:email', async (req, res) => {
    let data;
    try {
        data = await User.find({email: req.params.email})
    } catch (e) {return res.status(400).send(e)}
    return res.status(200).send(data)
})

router.post('/', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
    }
    catch (e) {
        return res.status(400).send({
            message: 'Falha no cadastro',
            data: e
        })
    }
    return res.status(201).send({
        message: "Usuário cadastrado"
    })
})

router.put('/promote/:email', async (req, res) => {
    try{
        await User.find({email: req.params.email}).updateOne({isAdm: true})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Usuario atualizado com sucesso!'
    }); 
})

router.put('/demote/:email', async (req, res) => {
    try{
        await User.find({email: req.params.email}).updateOne({isAdm: false})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Usuario atualizado com sucesso!'
    }); 
})

router.delete('/:email', async (req, res) => {
    try{
        await User
        .findOneAndRemove({email: req.params.email});
    } catch (e) {
        return res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
    return res.status(200).send({
        message: 'Usuário deletado com sucesso!'
    });
})

module.exports = router