const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')
const usersPath = path.join(__dirname,'../database/db.json')
const bcrypt = require('bcryptjs')
const userData = JSON.parse(fs.readFileSync(usersPath,'utf-8'))


//notas
const notasPath = path.join(__dirname, '../database/notas.json');
const notas = JSON.parse(fs.readFileSync(notasPath, 'utf-8'));


const userController = {}

// Retorno del login
userController.login = (req,res) => {
    let error = validationResult(req)
    if (!error.isEmpty()) {
        return res.render('login',{msgError: error.mapped(),old: req.body})
    } else {
        res.render('login')
    }
}

//Retorno de notas
userController.notas = (req, res) => {
    res.render('notas', { notasFinal: notas });
  };

// Retorno de register
userController.register = (req,res) => {
    res.render('register',{userData})
}

// Creacion de usuarios
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
},

//Retorno de materias
userController.materias = (req,res) => {
    res.render('materias')
}

module.exports = userController