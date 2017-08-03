const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('HELLO WORLD!');
});

var post = require('../controllers/post.server.controller');
router.get('/posts', post.getPosts);
router.get('/post/:id', post.getPost);
router.post('/createPost', post.createPost);
router.put('/post/:id', post.updatePost);
router.delete('/post/:id', post.deletePost);

module.exports = router;