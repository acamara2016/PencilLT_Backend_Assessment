const express = require('express')

const router = express.Router()
const question = require('../db/models/question');
router.get('/', async(req, res)=>{
    const message = "endpoint: /search?q=name of topic for e.g ?q=Reproduction";
    res.json(message);
});
router.get('/search', async(req, res)=> {
    var { q } = req.query;
    try{
        if(q===''){
            q = 'All';
        }
        const d = await question.findOne({$or:[{_id:q},{level1:q},{level2:q}]});
        const questions = d.questions;
        res.status(200).json(questions);
    } catch (error){
        res.status(400).json({message: error.message})
    }
});

module.exports = router