const express = require('express');
const router = express.Router();

router.post('/',(req, res)=> {
    const {fname , lname, email, subject, message}= req.body;
    console.log('content form summited', {fname , lname, email, subject, message});
    res.status(200).json({staus : 'Message Receei'})
});