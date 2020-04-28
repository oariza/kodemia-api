const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (request, response) => {
    const allMentors = await mentors.getAll()
    response.json({
        message: 'all mentors',
        data: {
            mentors: allMentors
        }
    })
})

router.post('/', async (request, response) => {
    const newMentor = request.body
    const mentorCreated = await mentors.create(newMentor)
  
    response.json({
      message: 'new Mentor',
      data: {
        mentor: mentorCreated
      }
    })
  })

module.exports = router