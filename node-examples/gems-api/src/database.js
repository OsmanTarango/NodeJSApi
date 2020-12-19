const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://otomano:567e73A255@gems-db.mactc.mongodb.net/gems?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('Db is Connected'))
.catch(err => console.error(err))