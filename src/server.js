const express = require('express')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const app = express()

app.use(express.json())

//montamos router koders
app.use('/koders', kodersRouter)

app.use('/mentors', mentorsRouter)

// todos los recursos en las rutas se escriben en plural

// mismo recurso
// router '/koders'
// GET /koders
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id

// router yo lo puedo montar en la ruta que quiera
// router se montara /koders
// GET / -> GET/koders
// POST / -> POST/koders
//PATCH /:id -> PATCH /koders/:id

//exporta server
module.exports = app