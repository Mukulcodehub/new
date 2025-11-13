const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a skill name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Skill name cannot be more than 50 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Technical', 'Soft Skills', 'Language', 'Framework', 'Tool'],
    default: 'Technical'
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
    default: 1
  },
  targetProficiency: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  hoursPracticed: {
    type: Number,
    default: 0
  },
  lastPracticed: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot be more than 500 characters']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);