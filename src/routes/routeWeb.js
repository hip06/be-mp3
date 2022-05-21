import express from "express"
import homeController from "../Controllers/homeControllers"
import userController from '../Controllers/userControlleres'

let router = express.Router()

let initWebRoutes = app => {
    router.get("/", (req, res) => {
        return res.send("hello")
    })

    //api zing mp3z
    router.get("/api/get-song", homeController.getSongById)
    router.get("/api/get-detail-playlist", homeController.getDetailPlaylist)
    router.get("/api/get-home", homeController.getHome)
    router.get("/api/get-song-info", homeController.getSongInfo)
    router.get("/api/get-chart-home", homeController.getChartHome)
    router.get("/api/get-artist", homeController.getArtist)
    router.get("/api/search", homeController.seach)
    router.get("/api/get-new-release", homeController.getNewRelease)

    // api user
    router.post('/api/sign-up', userController.handleSignUp)
    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-user', userController.handleGetUser)
    router.put('/api/update-user', userController.handleUpdateUser)
    router.post('/api/add-favorite-singer', userController.handAddSinger)
    router.get('/api/get-personal', userController.handleGetPersonal)
    router.post('/api/add-favorite-album', userController.handleAddAlbum)
    router.post('/api/add-recent', userController.handleAddRecent)
    router.post('/api/add-recent', userController.handleAddRecent)
    router.get('/api/get-recent', userController.handleGetRecent)
    router.delete('/api/delete-recent', userController.handleDeleteRecent)
    router.delete('/api/delete-like', userController.handleDeleteLike)
    router.post('/api/create-playlist', userController.handleCreatePlaylist)
    router.get('/api/get-playlist', userController.handleGetPlaylist)
    router.get('/api/get-playlist-by-id', userController.handleGetPlaylistById)
    router.put('/api/update-playlist-by-id', userController.handleUpdatePlaylistById)
    router.delete('/api/delete-song-from-playlist', userController.handleDeleteSongPlaylist)
    router.post('/api/add-favorite-song', userController.handleAddSong)
    router.get('/api/get-favorite-song', userController.handleGetSong)
    router.delete('/api/delete-favorite-song', userController.handleDeleteSong)
    router.put('/api/update-password-user', userController.handleUpdatePassword)

    
    return app.use("/", router)
}
module.exports = initWebRoutes
