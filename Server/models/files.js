const mongoose = require('.');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
