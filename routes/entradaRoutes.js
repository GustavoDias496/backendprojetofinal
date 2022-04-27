const Entrada = require('../models/Entrada')

const router = require('express').Router()

//Create - Criando dados de uma entrada
router.post('/', async(req, res) =>{

    //req.body
    //{name: "Queijo", valorUnitario: 20, quantidade: 3, descricao: "Muito bom", valorTotal: 60}

    const {nome, valorUnitario, quantidade, descricao, valorTotal} = req.body

    entrada =  {
        nome,
        valorUnitario,
        quantidade,
        descricao,
        valorTotal
    }

    if(!nome){
        res.status(422).json({error: 'Preencha todos os campos!'})
        return
    }
    if(!valorUnitario){
        res.status(422).json({error: 'Preencha todos os campos!'})
        return
    }
    if(!quantidade){
        res.status(422).json({error: 'Preencha todos os campos!'})
        return
    }
    if(!descricao){
        res.status(422).json({error: 'Preencha todos os campos!'})
        return
    }
    if(!valorTotal){
        res.status(422).json({error: 'Preencha todos os campos!'})
        return
    }

    try{
        await Entrada.create(entrada)

        res.status(201).json({message: 'Produto criado com sucesso!'})

    } catch (error){
        res.status(500).json({error: error})
    }
})

//Read - Buscando entradas
router.get('/', async (req, res) => {
    try{
        const entrada = await Entrada.find()
        res.status(201).json(entrada)

    } catch(error){
        res.status(500).json({error: error})
    }
})

// Read - Buscando entrada expecifica
router.get('/:id', async(req, res) =>{
    const id = req.params.id

    try{
        const entrada = await Entrada.findOne({_id: id})

        if(!entrada){
            res.status(422).json({message: 'Entrada não encontrada!'})
            return
        }

        res.status(201).json(entrada)

    } catch(error){
        res.status(500).json({error: error})
    }
})

//Uptade - Adicionando Mudanças a uma entrada
router.patch('/:id', async(req, res) => {

    const id = req.params.id

    const {nome, valorUnitario, quantidade, descricao, valorTotal} = req.body

    entrada =  {
        nome,
        valorUnitario,
        quantidade,
        descricao,
        valorTotal
    }

    try{
        const updateEntrada = await Entrada.updateOne({_id: id}, entrada)

        if(updateEntrada.matchedCount === 0){
            res.status(422).json({message: 'Entrada não encontrada!'})
            return
        }
        res.status(200).json(entrada)
    } catch (error){
        res.status(500).json({error: error})
    }
})

//Delete - Excluindo uma entrada

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    const entrada = await Entrada.findOne({_id: id})

    if(!entrada){
        res.status(422).json({message: 'Usuário não encontrado!'})
        return
    }

    try{
        await Entrada.deleteOne({_id: id})

        res.status(201).json({message: "Entrada removida com sucesso!"})

    } catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router