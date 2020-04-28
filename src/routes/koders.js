const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// GET /koders/
router.get('/', async (request, response) => {
    const allKoders = await koders.getAll()
    response.json({
        message: 'all koders',
        data: {
            koders: allKoders
        }
    })
})

// POST /koders/
router.post('/', async (request, response) => {
    const newKoder = request.body
    const koderCreated = await koders.create(newKoder)
  
    response.json({
      message: 'new Koder',
      data: {
        koder: koderCreated
      }
    })
  })

module.exports = router