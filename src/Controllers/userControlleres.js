import _ from 'lodash'
import userServices from '../services/userServices'

let handleSignUp = async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.email) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleSignUpService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleLogin = async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.email) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleLoginService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetUser = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.email) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetUserService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleUpdateUser = async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.email) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleUpdateUserService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handAddSinger = async (req, res) => {
    try {
        if (_.isEmpty(req.body)) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handAddSingerService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetPersonal = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser || !req.query.type) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetPersonalService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleAddAlbum = async (req, res) => {
    try {
        if (_.isEmpty(req.body)) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleAddAlbumService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}

module.exports ={ handleSignUp, handleLogin, handleGetUser, handleUpdateUser, handAddSinger, handleGetPersonal, handleAddAlbum }