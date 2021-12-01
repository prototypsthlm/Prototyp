const files = require('../models/file');
const mongoose = require('mongoose');

exports.addFile = async (req, res) => {
  try {
    console.log('addFile route');
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
