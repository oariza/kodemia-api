const Koder =require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

function getAll () {
    return Koder.find()    
}

function create (koderData) {
    return Koder.create(koderData)    
}

function deleteById (id) {
    return Koder.findByIdAndRemove(id)
}

function updateById(id, newKoderData) {
    return Koder.findByIdAndUpdate(id, newKoderData)
}

//exporta un objeto
module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}