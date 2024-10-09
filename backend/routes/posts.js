const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('../schema/Post');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Get all posts
app.get('/', async (req,res) => {
    const ans = await Post.find();
    res.send(ans); 
});

// Create a new post
app.post('/', async (req,res) => {
        stu = new Post({...req.body});
        const ans = await stu.save();
        res.send(ans);
});

// Get a single post by ID
app.get('/:id', async (req,res) => {
    const ans = await Post.findById(req.params.id);
    res.send(ans);
    
});

// Update a post by ID
app.put('/:id', async (req,res) => {
    const stu = await Post.findById(req.params.id);
        stu.title = req.body.title;
        stu.content = req.body.content;
        const ans = await stu.save();
        res.send(ans);
});

// Delete a post by ID
app.delete('/:id', async (req,res) => {
    const ans = await Post.findByIdAndDelete(req.params.id);
    res.send(ans);
});

module.exports = app;
