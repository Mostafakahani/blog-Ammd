const express = require('express');
const { Post } = require('../models/User');

const router = express.Router();

// تعریف مسیرهای پست
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/posts', async (req, res) => {
    try {
        const { title, content, author, imageUrl } = req.body;

        const newPost = await Post.create({
            title,
            content,
            author,
            imageUrl,
        });

        res.json({ message: 'Post added successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
