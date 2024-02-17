const express = require('express');
const router =  express.Router();

module.exports = function(){
    router.get('/',(req, res) =>{
        res.send('estamos en acapulco');
    
    });
    
    router.get('/nosotros',(req, res) =>{
        res.send('estamos en tijuana');
    
    });

    return router;
}