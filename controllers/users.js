const express = require('express');

const router = express.Router();

const Users = require('../models/usermodel');



router.get('/', (req, res) => {

    res.send('Hello Users');

})

router.post('/adduser', async (req, res) => {
    let alluser = req.body;
    try {

        const user = new Users(alluser);
        await user.save();
        res.send(user)

    } catch (err) {
        console.log(err.message)
    }
})



module.exports = router;