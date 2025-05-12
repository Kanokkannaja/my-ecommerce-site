const express = require('express');
const Router = express.Router();

//const subject ='{ "contactSubject": ["General Enquery","classes","Schedules","Instructor","Pricess","Other" ] }';
const subject = require('../data/contact_subject.json');


Router.get('/',(req, res) =>{
//res.end(subject);
res.json(subject_file);
});


module.exports= Router;