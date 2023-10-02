const { where } = require('sequelize');
const db = require('../models')

// create main model
const Product = db.products;
const Review = db.reviews

// main work


// 1. create product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

// 2. Get all Products 
const getAllProducts = async (req, res) => {
    // let products = await Product.findAll({
    //     attributes: [
    //         'title',
    //         price
    //     ]
    // })
    let products = await Product.findAll({})
    res.status(200).send(products)
}

// 3. Get single Product
const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: {id: id} })
    res.status(200).send(product)
}


// 4. Update Product
const updateProduct = async (req, res) => {
    let id = req.params.id
    
    const product = await Product.update(req.body, { where: {id: id} })
    res.status(200).send(product)
}

// 5. Delete Product by Id
const deleteProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.destroy({ where: {id: id} })
    res.status(200).send('Product is deleted ' +product)
}


// 6. get published Product
const getPublishedProduct = async (req, res) => {
    
    const products = await Product.findAll({ where: {publishhed: true} })
    res.status(200).send(products)
}


module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct 
}