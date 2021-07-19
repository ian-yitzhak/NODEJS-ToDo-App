const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://ian_test:<password>@ian.qfm7u.mongodb.net/Fistdatabase?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  }
)
 .then(console.log('connected succesfully'))
 .catch(err=> console.log(err))
//use your default password and database.