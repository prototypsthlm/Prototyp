const File = require('../models/files');
const mongoose = require('mongoose');

exports.addFile = async (req, res) => {
  try {
    const result = await File.create(req.body);
    res.status(201);
    res.json(result);
    // console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    console.log('get all files  route');
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFile = async (req, res) => {
  try {
    console.log('delete file route ');
  } catch (error) {
    console.log(error);
  }
};
