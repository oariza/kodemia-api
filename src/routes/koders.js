const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// GET /koders/
router.get('/', async (request, response) => {
  try  {
    const allKoders = await koders.getAll()
    response.json({
        message: 'all koders',
        data: {
            koders: allKoders
        }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error:error.message
    })
  }
})

// POST /koders/
router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'new Koder',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)    
    response.json({
      success: false,
      error: error.message
    })
  }
})


// DELETE
//PATCH /koders/:id 

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }  
})

router.patch('/:id', async (request, response) => {
  try{
    const { id } = request.params
    const koderUpdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder with id ${id} updated`,
      data: {
        koderUpdated
      }
    })
  } catch (error){
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})


module.exports = router




