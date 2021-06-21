const { request } = require('express');
const express = require ('express');
const router= express.Router();
const moment = require('moment');
const data = require('data');

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add');
});
router.get('/main', (req, res) => {
    res.render('links/main');
});
router.get('/end', (req, res) => {
    res.render('links/end');
});
router.get('/addclient', (req, res) => {
    res.render('links/addclient');
});

router.post('/add', (req, res) => {
    const {placa}  = req.body;  
    const Hsalida = moment().format('YYYY-MM-DD h:mm:ss') 
    pool.query('INSERT INTO registro SET =?',{
        placa,
        Hsalida
    });
    res.redirect('/links/main');
});
router.post('/addclient', (req, res) => {
    const {placa, fullname}  = req.body;  
    const newdate = {
        placa, 
        fullname 
    };
    pool.query('INSERT INTO cliente SET ?',[newdate]
    );
    res.redirect('/links/main');
});
router.post('/end',async (req, res) => {
    const placa  = req.body;
    const Hsalida1 = moment().format("YYYY-MM-DD hh:mm:ss");
    const Hsalida = Hsalida1.toString();
    pool.query('UPDATE registro SET ? WHERE placa = ?',[Hsalida,placa]);  
    //pool.query('SELECT FROM registro WHERE placa =',{
    //    placa
    //});
    res.redirect('/links/main');
});

router.get('/',async (req,res)=>{
    const reg = await pool.query('SELECT * FROM registro');
    res.render('links/list', {reg});
});

module.exports = router;