const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allMentors = await mentors.getAll()
    response.json({
        message: 'all mentors',
        data: {
            mentors: allMentors
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

router.post('/', async (request, response) => {
  try {
    const newMentor = await mentors.create(request.body)  
    response.json({
      success: true,
      message: 'new Mentor',
      data: {
        mentor: newMentor
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

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const mentorDeleted = await mentors.deleteById(id)
    response.json({
      success: true,
      message: `mentor with id ${id} deleted`,
      data: {
        koder: mentorDeleted
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
    const mentorUpdated = await mentors.updateById(id, request.body)
    response.json({
      success: true,
      message: `mentor with id ${id} updated`,
      data: {
        mentorUpdated
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