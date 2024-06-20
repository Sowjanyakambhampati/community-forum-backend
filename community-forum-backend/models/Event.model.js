
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  participants: {
    type: Array,
    required: false,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    enum: ["paid", "free"],
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

// EXPORT THE MODEL
module.exports = Event;