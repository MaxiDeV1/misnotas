const userController = {}
const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')
const usersPath = path.join(__dirname,'../database/db.json')
const bcrypt = require('bcryptjs')
const userData = JSON.parse(fs.readFileSync(usersPath,'utf-8'))
userController.login = (req,res) => {
    let error = validationResult(req)
    if (!error.isEmpty()) {
        return res.render('login',{msgError: error.mapped(),old: req.body})
    } else {
        res.render('login')
    }
}
userController.tabla = (req,res) =>{
    res.render('tabla')
}
userController.register = (req,res) => {
    res.render('register',{userData})
}
userController.newUser = (req,res) => {
    let newData = {
        id: userData.length + 1,
        nombre: req.body.nombre,
        password: req.body.password
    }
    module.exports = newData.password;
    bcrypt.hashSync(newData.password,10)
    let newUser = {...newData}
    userData.push(newUser)
    fs.appendFileSync(usersPath,JSON.stringify(newData),'utf-8')
    return res.redirect('/login',{userData})
} 
module.exports = userController