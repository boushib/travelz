const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "A location must have a name"], 
    unique: true 
  },
  country: { 
    type: String, 
    required: [true, "A location must have a country"] 
  },
  price: { 
    type: Number, 
    default: 0
  },
  discount: { 
    type: Number, 
    default: 0 
  },
  rating: { 
    type: Number, 
    default: 0 
  },
  description: { 
    type: String, 
    trim: true, 
    required: true 
  },
  coverImage: { 
    type: String, 
    required: true 
  },
  images: [String],
  createdAt: { 
    type: Date, 
    default: 
    Date.now() 
  }
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location
