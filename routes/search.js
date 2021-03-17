const { default: got } = require('got/dist/source');

const express = require('express'),
    router = express.Router();


router.get('/', async (req, res) => {
   const { url } = req.query
   const jobData = await got(url);
   console.log(jobData);
   res.send(jobData.body)
});

module.exports = router;