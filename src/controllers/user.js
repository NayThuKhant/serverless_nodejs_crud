const {userModel} = require('../models')
const {responder} = require('../utilities')
const validateUser = require('../validators/validateUser')

const index = async () => {
    const user = new userModel()
    const users = await user.all()
    return responder.success(users)
}


const create = async (event) => {
    const validator = new validateUser().validateCreation(event)

    if (!validator.passed) {
        return responder.validationFailed(validator)
    }

    const createdUser = await new userModel().create({name: validator.data.name})
    return responder.success(createdUser)
}


const show = async (event) => {
    const validator = new validateUser().validateShowing(event)

    if (!validator.passed) {
        return responder.validationFailed(validator)
    }

    const user = await new userModel().find(validator.data.id)
    return user
        ? responder.success(user)
        : responder.notFound(`User with id ${validator.data.id} not found`)
}


const update = async (event) => {
    const validator = await new validateUser().validateUpdating(event)

    if (!validator.passed) {
        return responder.validationFailed(validator)
    }

    const updatedUser = await new userModel().findAndUpdate(validator.data.id, {name: validator.data.name})
    return responder.success(updatedUser)
}

const deleteUser = async (event) => {
    const validator = await new validateUser().validateDeleting(event)

    if (!validator.passed) {
        return responder.validationFailed(validator)
    }

    const updatedUser = await new userModel().findAndDelete(validator.data.id)
    return responder.success(updatedUser)
}




module.exports = {index, create, show, update, deleteUser}
