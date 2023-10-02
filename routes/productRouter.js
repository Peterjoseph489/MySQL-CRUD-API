// Import controllers review, products
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()


// Use Routers
router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/:id', productController.getOneProduct)
router.get('/published', productController.getPublishedProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)


// Review URL and Controller
router.post('/addReview', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)

// get product Reviews
router.get('/getProductReviews', productController.getProductReviews)

module.exports = router