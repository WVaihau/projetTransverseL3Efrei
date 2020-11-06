const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "Postgre_#Px789",
    database: "TI504_TP5",
    port: 5432
})

client.connect(); //Se connecte à la base de donnée
module.exports = router