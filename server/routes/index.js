'use strict';

var router = require('express').Router();
module.exports = router;

router.use('/test1', require('./test1'));
router.use(function (req, res) {
    res.status(404).end();
});