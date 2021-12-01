const File = require('../models/files');
const mongoose = require('mongoose');

exports.addFile = async (req, res) => {
  try {
    const result = await File.create(req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const result = await File.find({});
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await File.findOneAndDelete({
      _id: id,
    });
    res.status(201);
    res.end();
  } catch (error) {
    console.log(error);
  }
};
