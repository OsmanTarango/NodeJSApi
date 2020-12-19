const express = require('express')

const app = require('./app')



//req request, res response


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})