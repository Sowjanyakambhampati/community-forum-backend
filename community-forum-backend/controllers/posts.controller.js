//userposts.controller.js
const Posts = require('../models/Posts.model');

class PostsController {

    // Create a new  post
    async createPost(req, res) {
        if (!req.file) {
            next(new Error("No image uploaded!"));
            return;
        }
        console.log(req.body)
        console.log(req.file.path)

        try {
            const posts = new Posts({ image: req.file.path, ...req.body });
            await posts.save();
            res.status(201).send(posts);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Get all  posts
    async getAllPosts(req, res) {
        try {
            const posts = await Posts.find({});
            res.send(posts);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Get  post by id
    async getPostById(req, res) {
        try {
            const PostId = req.params.id;
            const post = await Posts.findById(PostId);
            if (!post) {
                return res.status(404).send("post not found");
            }
            res.send(post);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    //posts.controller.js

    // Get  posts by post author
    async getPostsByPostAuthor(req, res) {
        try {
            const postAuthor = req.params.postAuthor;
            const posts = await Posts.find({ postAuthor: postAuthor });
            if (!posts) {
                return res.status(404).send("posts not found");
            }
            res.send(posts);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }

    // Get  posts by city
    async getPostsByCity(req, res) {
        console.log("x")
        try {
            const city = req.params.city;
            const posts = await Posts.find({ city });
            console.log(posts)
            if (!posts) {
                return res.status(404).send("posts not found");
            }
            res.send(posts);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }



    // Update  post
    async updatePost(req, res) {
        try {
            const PostId = req.params.id;
            const updates = req.body;
            const options = { new: true }; // Return the updated user post
            const updatedPost = await Posts.findByIdAndUpdate(PostId, updates, options);
            if (!updatedPost) {
                return res.status(404).send(" post not found");
            }
            res.send(updatedPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete  post
    async deletePost(req, res) {
        try {
            const PostId = req.params.id;
            const deletedPost = await Posts.findByIdAndDelete(PostId);
            if (!deletedPost) {
                return res.status(404).send("post not found");
            }
            res.send(deletedPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = new PostsController();