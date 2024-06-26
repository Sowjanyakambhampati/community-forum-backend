//topics.controller.js
const Topic = require('../models/Topics.model');

class TopicController {
    // Create a new topic
    async createTopic(req, res) {
        try {
        const topic = new Topic(req.body);
        await topic.save();
        res.status(201).send(topic);
        } catch (error) {
        res.status(400).send(error);
        }
    }
    
    // Get all topics
    async getAllTopics(req, res) {
        try {
        const topics = await Topic.find({});
        res.send(topics);
        } catch (error) {
        res.status(500).send(error);
        }
    }

    // Get topic by id
    async getTopicById(req, res) {
        try {
        const topicId = req.params.id;
        const topic = await Topic
            .findById(topicId)
            .populate('author', 'username');
        if (!topic) {
            return res.status(404).send("Topic not found");
        }
        res.send(topic);
        }
        catch (error) {
        res.send(500).send (error);
        }
    }

    // Get topics by city
    async getTopicsByCity(req, res) {
        try {
        const city = req.params.city;
        const topics = await Topic .find({ city: city }).populate('author', 'username');
        if (!topics) {
            return res.status(404).send("Topics not found");
        }
        res.send(topics);
        }
        catch (error) {
        res.status(500).send(error);
        }
    }
        
    // Update topic
    async updateTopic(req, res) {
        try {
        const topicId = req.params.id;
        const updates = req.body;
        const options = { new: true }; // Return the updated topic
        const updatedTopic = await Topic.findByIdAndUpdate(topicId, updates, options);
        if (!updatedTopic) {
            return res.status(404).send("Topic not found");
        }
        res.send(updatedTopic);
        } catch (error) {
        res.status(400).send(error);
        }
    }
    
    // Delete topic
    async deleteTopic(req, res) {
        try {
        const topicId = req.params.id;
        const deletedTopic = await Topic.findByIdAndDelete(topicId);
        if (!deletedTopic) {
            return res.status(404).send("Topic not found");
        }
        res.send(deletedTopic);
        } catch (error) {
        res.status(400).send(error);
        }
    }
    }

module.exports = new TopicController();