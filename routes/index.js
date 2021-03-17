const express = require('express'),
    router = express.Router();
    
    router.get('/', (req, res) =>{
        res.json("Welcome to job.fetch()").status(200)
    })

module.exports = router;