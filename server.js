const express = require('express')
const app = express()
const userRoute = require('./routes/user')
require('./db/db')

app.use(express.json())

app.get('/', (req,res)=>{
	res.send('my app')
})



app.use('/api', userRoute)

const port = 3000;
app.listen(port, ()=> console.log(`listening on ${port}`))
