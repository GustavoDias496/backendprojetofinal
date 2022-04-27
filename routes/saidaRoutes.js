const Saida = require('../models/Saida')

const router = require('express').Router()

//Create - Criando uma saida
router.post('/', async (req, res) => {
    //req.body
    //{name: "Queijo", valorUnitario: 20, quantidade: 3, descricao: "Muito bom", valorTotal: 60}

    const {nome, valorUnitario, quantidade, descricao, valorTotal} = req.body

    saida =  {
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
        await Saida.create(saida)

        res.status(201).json({message: 'Venda criada com sucesso!'})

    } catch (error){
        res.status(500).json({error: error})
    }


})

// Read - Lendo Vendas
router.get('/', async (req, res) => {
    try{
        const saida = await Saida.find()
        res.status(201).json(saida)

    } catch(error){
        res.status(500).json({error: error})
    }
})


// Read - Buscando saida expecifica
router.get('/:id', async(req, res) =>{
    const id = req.params.id

    try{
        const saida = await Saida.findOne({_id: id})

        if(!saida){
            res.status(422).json({message: 'Venda não encontrada!'})
            return
        }   

        res.status(201).json(saida)

    } catch(error){
        res.status(500).json({error: error})
    }
})

//Uptade - Adicionando Mudanças a uma venda
router.patch('/:id', async(req, res) => {

    const id = req.params.id

    const {nome, valorUnitario, quantidade, descricao, valorTotal} = req.body

    saida =  {
        nome,
        valorUnitario,
        quantidade,
        descricao,
        valorTotal
    }

    try{
        const updateSaida = await Saida.updateOne({_id: id}, saida)

        if(updateSaida.matchedCount === 0){
            res.status(422).json({message: 'Venda não encontrada!'})
            return
        }
        res.status(200).json(saida)
    } catch (error){
        res.status(500).json({error: error})
    }
})

//Delete - Excluindo uma saida

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    const saida = await Saida.findOne({_id: id})

    if(!saida){
        res.status(422).json({message: 'Venda não encontrado!'})
        return
    }

    try{
        await Saida.deleteOne({_id: id})

        res.status(201).json({message: "Venda removida com sucesso!"})

    } catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router
