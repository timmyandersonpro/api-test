console.clear()
console.log(`🟡 Iniciando proyecto`)


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
      mongoose.set('strictQuery',false)
const app = express()


app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )


const main = async () => await mongoose.connect('mongodb://127.0.0.1:27017/CEI')
            .then( ()=> console.log(`📚 Conectado a MongoDB`) )

main()


const fullstackSchema = new mongoose.Schema(
    { nombre : String , edad : String },
    { collection : 'fullstack' , versionKey : false }
)
const htmlSchema = new mongoose.Schema(
    { nombre : String , edad : String },
    { collection : 'html'  , versionKey : false     }
)
const Fullstack = mongoose.model( 'Fullstack' , fullstackSchema )
const Html = mongoose.model( 'Html' , htmlSchema )



app.get('/' , async ( req , res )=>{

    const getFullstack = await Fullstack.find()
    const getHtml      = await Html.find()

    res.json( { getFullstack , getHtml })

})

// app.get('/fullstack' , async ( req , res )=> {
//     const getFullstack = await Fullstack.find()
//     res.json( getFullstack )
// })

// app.get('/fullstack/id/:id' , async ( req , res )=> {

//     const { id } = req.params

//     const getFullstackById = await Fullstack.findById( id )

//     res.json( getFullstackById )
// })

// app.get('/fullstack/nombre/:nombre' , async ( req , res )=> {
//     const { nombre } = req.params

//     const getFullstackByName = await Fullstack.findOne({ nombre })

//     res.json( getFullstackByName )

// })

// app.get('/fullstack/edad/:edad' , async ( req , res )=> {
//     const { edad } = req.params

//     const getFullstackByAge = await Fullstack.findOne({ edad })

//     res.json( getFullstackByAge )

// })

// app.post('/fullstack' , async ( req , res ) => {

//     const { nombre , edad } = req

//     const nuevoFullstack = new Fullstack({ nombre , edad })

//     await nuevoFullstack.save()

//     const getFullstack = await Fullstack.find()

//     res.json( getFullstack )

// })

// app.put ('/fullstack' , async ( req , res  ) =>{
//     const { body } = req

//     const { id , ...resto } = body 

//     await Fullstack.findByIdAndUpdate( id , resto )

//     const getFullstack = await Fullstack.find()

//     res.json( getFullstack )
  
// })

// app.delete('/fullstack/:id' , async ( req , res ) => {

//     const { id } = req.params 

//     await Fullstack.findByIdAndDelete(id)

//     const getFullstack = await Fullstack.find()

//     res.json( getFullstack )

// })





app.get('/fullstack' , async ( req , res )=>{

    const getFullstack = await Fullstack.find()
    
    res.json( getFullstack )

})

app.get('/fullstack/id/:id' , async ( req , res )=> {

    const { id } = req.params

    const getFullstackById = await Fullstack.findById( id )

    res.json( getFullstackById )

})

app.post('/fullstack' , async ( req , res )=>{

    const { nombre , edad } = req.body

    const nuevo = new Fullstack({ nombre , edad })

    await nuevo.save()

    const getFullstack = await Fullstack.find()

    res.json( getFullstack )
})

app.put('/fullstack' , async ( req , res )=>{

    const { body } = req 
    const { _id , ...resto } = body

    await Fullstack.findByIdAndUpdate( _id , resto )

    const getFullstack = await Fullstack.find()

    res.json( getFullstack )

})

app.delete('/fullstack/id/:id' , async ( req , res )=>{

    const { id } = req.params

    await Fullstack.findByIdAndDelete( id )

    const getFullstack = await Fullstack.find()

    res.json( getFullstack )

})





app.listen( 4000 , ()=> console.log(`🔰 Iniciando API`) )