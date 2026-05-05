const express = require("express");
const Joi = require("joi");
const router = express.Router();

// NEW BLOG DB MODEL
class Blog {
    constructor({id, title, content, author}) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date().toISOString();
    }
}

// STORE BLOGS
const allBlogs = [];
let BlogId = 1;


// BLOG SCHEMA FOR DATA VALIDATION
const blogSchema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(10).required(),
    author: Joi.string().required(),
});

// POST NEW BLOG
router.post("/blogs", (req, res) => {
    // VALIDATE INPUTED DATA
    const {value, error} = blogSchema.validate(req.body);
    // IF INVALID INPUT DATA
    if (error) return res.status(400).json({"message": error.details[0].message})

    // CREATE A BLOG MODEL / CLASS
    const newBlog = new Blog({
        id: BlogId++,
        title: value.title,
        content: value.content,
        author: value.author
    });

    // ADD NEW BLOG TO ALL BLOGS LIST
    allBlogs.push(newBlog);


    res.status(201).json({
        "message": "Blos post created successfully",
        post: newBlog,
    })
})


module.exports = router;