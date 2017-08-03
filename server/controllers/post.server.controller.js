var Post = require('../models/post.server.model');

exports.getPosts= (req, res) =>{
    // get all the posts
    Post.find({}, (err, posts) => {
        if (err) throw err;

        // object of all the posts
        //console.log(posts);

        //Returning json with posts
        res.json({
            posts: posts
        });
    });
};

exports.createPost = (req, res) =>{
    //this function expects a req.body.* with all post data
    var post = new Post({
        title: req.body.title,
        content: req.body.content,
        subject: req.body.subject
    });

    post.save(function(err) {
    if (err){
        console.log(err);
        res.json({
            status: false,
            message:"Duplicate post! Change the post's title and try again"
        }); 
    } else {
        res.json({
            status: true,
            message: req.body.title + " added!"
        });
    }
    });   
};

exports.getPost = (req, res) =>{
    Post.find({ _id: req.params.id }, (err, post) =>{
        if(err){ 
            console.log(err);
        } else {
            res.json({
                post: post
            });
        }
    });
}

exports.updatePost = (req, res) => {
    //get a Post with ID of req.body._id
    Post.findById(req.body._id, function(err, post) {
        post.title = req.body.title;
        post.subject = req.body.subject;
        post.content = req.body.content;
        console.log(post);

        if (err){
            console.log("Something went wrong");
            res.json({
                message: "There was an error. Try refreshing the page.",
                status: false
            });
        } else {
                // save the user
            post.save(function(err) {
                if (err){
                    console.log("Something went wrong");
                    res.json({
                        message: "There was an error. Try refreshing the page.",
                        status: false
                    });
                } else {
                    console.log("Success");
                    res.json({
                        status: true,
                        message: "Post updated successfully!"
                    });
                }
            });
        }
    });
}

exports.deletePost = (req, res) => {
    console.log(req.params.id);
    // find the post of req.body.id
    Post.findOneAndRemove({ _id: req.params.id }, function(err) {
        if (err){
            console.log("An error has occurred.");
            res.json({
                status: false
            });
        } else {
            console.log("Post deleted!");
            res.json({
                status: true
            });
        }

        //deleted the post
        console.log('Post deleted!');
    });

};