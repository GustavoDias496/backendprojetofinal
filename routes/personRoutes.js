
const Person = require('../models/Person')

const router = require('express').Router()



//Create - Criando dados
router.post('/', async (req, res) => {

    //req.body
    //{name:"Matheus", salary: 5000, approved: false}
    const { name, password } = req.body

    if(!name){
        res.status(422).json({error: 'Um nome é obrigatório!'})
        return
    }

    const person = {
        name,
        password
    }

    try{

        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida com sucesso!'})

    } catch (error){
        res.status(500).json({error: error})
    }
})


// Read = Lendo dados

router.get('/', async (req, res) =>{
    try{

        const people = await Person.find()

        res.status(200).json(people)

    } catch (error){
        res.status(500).json({error: error})
    }
})


router.get('/:id', async(req, res) =>{
    //extrair o dado da requisição, pela URl fica no req.params

    const id = req.params.id

    try{
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(person)

    } catch(error){
        res.status(500).json({error: error})
    }


})

// Update - atualizar dados
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { name, password } = req.body

    const person = {
        name,
        password
    }

    try{

        const updatedPerson = await Person.updateOne({_id: id}, person)

        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(person)
    } catch(error){
        res.status(500).json({error: error})
    }
})


// Delete - deletar dados

router.delete('/:id', async (req, res) =>{

    const id = req.params.id

    const person = await Person.findOne({_id: id})

    if(!person){
        res.status(422).json({message: 'Usuário não encontrado!'})
        return
    }

    try{
        await Person.deleteOne({_id : id})

        res.status(200).json({message: 'Usuário removido com sucesso!'})

    } catch(error){
        res.status(500).json({error: error})
    }

})

module.exports = router