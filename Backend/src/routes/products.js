'use strict'

const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let data;
    try {
        data = await Product.find({active: true})
    } catch (e) {return res.status(400).send(e)}
    return res.status(200).send(data)
})

router.get('/:nome', async (req, res) => {
    let data;
    try {
        data = await Product.find({nome: req.params.nome})
    } catch (e) {return res.status(400).send(e)}
    return res.status(200).send(data)
})

router.post('/', async (req, res) => {
    const produto = new Product(req.body)
    try {
        await produto.save()
    }
    catch (e) {
        return res.status(400).send({
            message: 'Falha na inserção de produto',
            data: e
        })
    }
    return res.status(201).send({
        message: "Produto cadastrado"
    })
})

router.put('/updateNome/:nome', async (req, res) => {
    try{
        await Product.find({nome: req.params.nome}).updateOne({nome: req.params.novoNome})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Titulo do video atualizado com sucesso!'
    }); 
})


router.put('/updatePreco/:nome', async (req, res) => {
    try{
        await Product.find({nome: req.params.nome}).updateOne({preco: req.params.novoPreco})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Preço do video atualizado com sucesso!'
    }); 
})


router.put('/updateDetalhes/:nome', async (req, res) => {
    try{
        await Product.find({nome: req.params.nome}).updateOne({detalhes: req.params.novoDetalhes})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Detalhes do video atualizados com sucesso!'
    }); 
})

router.put('/updateDescricao/:nome', async (req, res) => {
    try{
        await Product.find({nome: req.params.nome}).updateOne({descricao: req.params.novoDescricao})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Descricao do video atualizada com sucesso!'
    }); 
})


router.put('/updateVendas/:nome', async (req, res) => {
    try{
        await Product.find({nome: req.params.nome}).updateOne({ $inc: {vendas:1}})
    } catch (e) {
        return res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
    return res.status(201).send({
        message: 'Contagem de vendas atualizada com sucesso!'
    }); 
})

router.delete('/:nome', async (req, res) => {
    try{
        await Product
        .findOneAndRemove({nome: req.params.nome});
    } catch (e) {
        return res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
    return res.status(200).send({
        message: 'Produto deletado com sucesso!'
    });
})

module.exports = router