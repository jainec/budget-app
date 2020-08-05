const Category = require('../models/Category');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.status(500).send();
    }
}

const postCategories = async (req, res) => {
    try {
        const category = new Category(req.body);
        category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(422).send({error: error})
    }
}

const getCategory = async (req, res) => {
    try {
        const id = req.params.id;        
        const category = await Category.findById(id);
        
        if (!category) {
            return res.status(404).send({error: error});
        }
        res.send(category);
    } catch (error) {
        res.status(500).send({error: error});
    }
}

const patchCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndUpdate({ _id: id }, req.body);

        if (!category) {
            return res.status(404).send();
        }

        res.send(category);
    } catch (error) {
        res.status(500).send();
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndDelete({ _id: id });

        if (!category) {
            return res.status(404).send();
        }
        res.send(category);
    } catch (error) {
        res.status(500).send({error: error});
    }
}

module.exports = {
    getCategories,
    postCategories,
    getCategory,
    deleteCategory,
    patchCategory
}