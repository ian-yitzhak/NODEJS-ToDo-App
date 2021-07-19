const express = require('express')
const Data = require('../models/user')

const router = express.Router()

//getting all Data
router.get('/',async (req,res)=>{
	try{

		const data= await Data.find({})
		res.render('index', {data: data })
	} catch(err){
		res.status(500).send(err) }

	})

module.exports = router