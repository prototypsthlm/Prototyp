const express = require('express');
const router = express.Router();

const files = require('./controllers/files');

//add file
router.post('/addfile', files.addFile);

//retrieve all files
router.get('/getallfiles', files.getAllFiles);

//delete a file
router.post('/deletefile', files.deleteFile);

module.exports = router;
