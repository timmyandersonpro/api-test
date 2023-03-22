console.clear()
console.log(`🟡 Iniciando proyecto`)


const express = require('express')
const cors = require('cors')
const app = express()


app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )


app.get('/',( req , res )=>{
    res.json('Así si')
})



app.listen( 4000 , ()=> console.log(`🔰 Iniciando API`) )