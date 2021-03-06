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
let handleAddRecent = async (req, res) => {
    try {
        if (_.isEmpty(req.body)) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleAddRecentService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetRecent = async ( req, res ) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetRecentService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleDeleteRecent = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleDeleteRecentService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleDeleteLike = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleDeleteLikeService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleCreatePlaylist = async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.idUser || !req.body.idPlaylist) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleCreatePlaylistService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetPlaylist = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetPlaylistService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetPlaylistById = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser || !req.query.idPlaylist) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetPlaylistByIdService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleUpdatePlaylistById =async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.idUser || !req.body.idPlaylist || !req.body.type) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleUpdatePlaylistByIdService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleDeleteSongPlaylist = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser || !req.query.idPlaylist) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleDeleteSongPlaylistService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleAddSong = async (req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.idUser || !req.body.idSong) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleAddSongService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleGetSong = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser || !req.query.idSong) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleGetSongService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleDeleteSong =  async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.idUser || !req.query.idSong) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleDeleteSongService(req.query)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}
let handleUpdatePassword =async ( req, res) => {
    try {
        if (_.isEmpty(req.body) || !req.body.email) {
            return res.status(200).json({
                err: 1,
                msg: "error from controller" + " missing payload"
            })
        } else {
            let response = await userServices.handleUpdatePasswordService(req.body)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            err: -1,
            msg: "error from controller" + error
        })
    }
}

module.exports ={ handleSignUp, handleLogin, handleGetUser, handleUpdateUser, handAddSinger, handleGetPersonal, handleAddAlbum, handleAddRecent, handleGetRecent,
    handleDeleteRecent, handleDeleteLike, handleCreatePlaylist, handleGetPlaylist, handleGetPlaylistById, handleUpdatePlaylistById, handleDeleteSongPlaylist, handleAddSong,
    handleGetSong, handleDeleteSong, handleUpdatePassword }