import _ from "lodash"
// import homeServices from '../services/homeServices'
import Zingmp3 from "zingmp3-api-full"

let getSongById = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.id) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing id song"
            })
        } else {
            let response = await Zingmp3.getSong(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let getHome = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.page) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing"
            })
        } else {
            let response = await Zingmp3.getHome(req.query.page)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let getSongInfo = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.id) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing id"
            })
        } else {
            let response = await Zingmp3.getInfoSong(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let getDetailPlaylist = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.id) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing id"
            })
        } else {
            let response = await Zingmp3.getDetailPlaylist(req.query.id)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let getChartHome = async (req, res) => {
    try {
        let response = await Zingmp3.getChartHome()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let getArtist = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.name) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing name"
            })
        } else {
            let response = await Zingmp3.getArtist(req.query.name)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}
let seach = async (req, res) => {
    try {
        if (_.isEmpty(req.query) || !req.query.keyword) {
            return res.status(200).json({
                errCode: 1,
                message: "error from controller" + "missing keyword"
            })
        } else {
            let response = await Zingmp3.search(req.query.keyword)
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            message: "error from controller" + error
        })
    }
}

module.exports = {
    getSongById,
    getDetailPlaylist,
    getHome,
    getSongInfo,
    getDetailPlaylist,
    getChartHome,
    getArtist,
    seach
}
