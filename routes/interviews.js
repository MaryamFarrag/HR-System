var express = require('express');
var router = express.Router();
const participants = require('../models/Participants')

/* GET users listing. */
router.get('/', function(req, res, next) {
    var id = req.params.id;
    participants.findAll({}).then(applicants =>{
        const data = JSON.stringify(applicants, null, 1);
        // console.log(applicants)
        return res.render('interviews', { data:JSON.parse(data)});
    })
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    participants.findAll({
        where: {
            id: id
        }
    }).then(applicants =>{
        const data = JSON.stringify(applicants, null, 1);
        return res.render('interviews', { data:JSON.parse(data)});
    })
});

module.exports = router;
