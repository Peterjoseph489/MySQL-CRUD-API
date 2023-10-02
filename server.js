const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'https://localhost:8081'
}



// Middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productRouter')
app.use('/api/products', router) 

// Testing API
app.get('/', (req, res)=>{
    res.json({ 
        message: 'Hello from API'
    })
})

const PORT = process.env.PORT || 8080

// Server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})