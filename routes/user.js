const express = require('express')
const Data = require('../models/user')

const router = express.Router()

//getting all Data
router.get('/',async (req,res)=>{
	try{

		const data= await Data.find({})
		res.send(data)
	} catch(err){
		res.status(500).send(err) }

	})


//GET BY ID

router.get('/:id', async (req,res)=>{
	try{
		const data = await Data.findById(req.params.id)
		if(!data){
			return res.status(404).send()
		}
		res.status(200).send(data)
	}catch(err){
		res.status(500).send(err)
	}

})


//create new Data

router.post('/', async (req,res)=>{

	const data = new Data(req.body)

	try{

		await data.save()
		res.status(201).send(data)
	}
	catch(err){

		res.status(400).send(err)}
})

//UPDATE USER

router.patch('/:id', async (req,res)=>{
	let body = req.body
	let id = req.params.id

	try{

		const data  = await Data.findByIdAndUpdate(id, body)
		res.send(data)
	}catch(err){
		res.status(422).send(err)
	}

})

//DELETE USER

router.delete('/:id', async (req,res)=>{
	try{
		const data = await Data.findByIdAndDelete(req.params.id)
		if(!person){
			res.status(404).send()
		}res.send(data)
	}catch(err){
		res.status(500).send()
	}

})

module.exports = router