// product.controller.js
const Product = require("../models/Product.model");

class ProductController {
    // Create a new product
    async createProduct(req, res) {


        // check if there's an image

        // if (!req.file) {
        //     next(new Error("No image uploaded!"));
        //     return;
        // }

        console.log(req.body)
        // console.log(req.file.path)


        try {
            const product = new Product({ image: req.file.path, ...req.body });
            await product.save();
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Get all products
    async getAllProducts(req, res) {
        try {
            const products = await Product.find({});
            res.send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Get products by city

    async getProductsByCity(req, res) {
        try {
            const city = req.params.city;
            const products = await Product.find({ city: city });
            if (!products) {
                return res.status(404).send("Products not found");
            }
            res.send(products);
        }
        catch (error) {
            res.status(500).send (error);
        }
    }


    // Get product by id
    async getProductById(req, res) {
        try {
            const productId = req.params.id;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.send(product);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // product.controller.js
    async getProductsByProductOwner(req, res) {
        try {
            const productOwner = req.params.productOwner;
            const products = await Product.find({ productOwner: productOwner });
            if (!products) {
                return res.status(404).send("Products not found");
            }
            res.send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Products reserved
    async getProductsByUserReserved(req, res) {
        try {
            const reservedById = req.params.reservedById;
            const products = await Product.find({ reservedById: reservedById });
            if (!products) {
                return res.status(404).send("Reserved Products not found");
            }
            res.send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Get products by city
    async getProductsByCity(req, res) {
        try {
            const city = req.params.city;
            const products = await Product.find({ city: city });
            if (!products) {
                return res.status(404).send("Products not found");
            }
            res.send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    }


    // Update a product
    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const updates = req.body;
            console.log("Updated Product::" + updates.reservedById);
            const options = { new: true }; // Return the updated product
            const updatedProduct = await Product.findByIdAndUpdate(productId, updates, options);
            if (!updatedProduct) {
                return res.status(404).send("Product not found");
            }
            res.send(updatedProduct);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete a product
    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(404).send("Product not found");
            }
            res.send(deletedProduct);
        } catch (error) {
            res.status(400).send(error);
        }
    }


    // Get products by category
    async getProductsByCategory(req, res) {
        try {
            const category = req.params.category;
            const products = await Product.find({ category: category });
            if (!products) {
                return res.status(404).send("Products not found");
            }
            res.send(products);
        }
        catch (error) {
            res.status(500).send(error);
        }

}
}

module.exports = new ProductController();
