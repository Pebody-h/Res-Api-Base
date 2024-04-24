// import express from 'express'  ---> module manejo de importaciones standarizado por ecms
const express = require('express')
const router = require('./api/routes/animals.routes')

const app = express()

app.use(express.json())
app.use('/', router)

app.listen(3001, () => {
  console.log('Funcionando')
})