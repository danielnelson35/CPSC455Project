var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({ response: "Hello Recipe!" });
})

module.exports = router;