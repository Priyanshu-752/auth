const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const Product = require('../Models/ProductModel')

router.post('/add_product', async (req, res, next) =>{
    try {
        
        const {name, description,price, category } = req.body;
        const newProduct = new Product ({
            name, description,price, category
        })
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        next(error)
    }

    
})
module.exports = router