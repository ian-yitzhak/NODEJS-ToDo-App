const express = require('express')
const Data = require('../models/user')

const router = express.Router()

router.get('/', (req,res)=>{
	res.render('index')
})
module.exports = router