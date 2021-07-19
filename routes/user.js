const express = require('express')
const Data = require('../models/user')

const router = express.Router()

//get for register

router.get('/register', (req,res)=>{
	res.render('new')
})

//getting all Data
router.get('/',async (req,res)=>{
	try{

		const data= await Data.find({})
		res.render('index', {data: data })
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

router.post('/register', async (req,res)=>{

	const data = new Data({
		name: req.body.name,
		email: req.body.email,
		number: req.body.number
	})

	try{

		const savedData = await data.save()
		res.redirect('/')
	}
	catch(err){

		res.status(400).send(err) }
})

//UPDATE USER

// router.patch('/:id', async (req,res)=>{
// 	let body = req.body
// 	let id = req.params.id

// 	try{

// 		const data  = await Data.findByIdAndUpdate(id, body)
// 		res.send(data)
// 	}catch(err){
// 		res.status(422).send(err)
// 	}

// })

router.patch('/:id', async(req,res)=>{

	req.data = await Data.findById(req.params.id);
	let data = req.data;

	data.name = req.body.name
	data.email = req.body.email
	data.number = req.body.number

	try{
		data = await data.save()
		res.redirect('/')

	}catch(e){
		res.send(e)
	}




})

// get by id and edit


router.get('/edit/:id' , async (req,res)=>{
	const data = await Data.findById(req.params.id)
	res.render('edit', {data : data })
})

//DELETE USER

// router.delete('/:id', async (req,res)=>{
// 	try{
// 		const data = await Data.findByIdAndDelete(req.params.id)
// 		if(!data){
// 			res.status(404).send('no user')
// 		}res.redirect('/')
// 	}catch(err){
// 		res.status(500).send('error')
// 	}

// })

router.delete('/:id',  async (req, res) => {
  await Data.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

module.exports = router