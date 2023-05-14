const mainController = {}
const fs = require('fs')
const path = require('path');
const usersPath = path.join(__dirname,'../database/db.json')
const users = fs.readFileSync(usersPath,'utf-8')

mainController.inicio = (req,res) => {
    res.render('index')
}
mainController.subida = (req,res) => {
    res.render('subida')
}
module.exports = mainController