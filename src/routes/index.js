const express =require('express');
const router= express.Router();
router.get('/main',(req, res) =>{
    res.redirect('/main');
});

module.exports = router;