const express = require('express');
const router = express.Router();

const ctrl = require('./../controllers/empresa')

router.get('/', async function (req, res, next) {
    try {
        const result = await getMany()
        res.send(result)
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;