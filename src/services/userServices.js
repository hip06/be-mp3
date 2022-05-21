import db from '../models/index'
import _ from 'lodash'
import bcrypt from 'bcryptjs'

let methodHash = bcrypt.genSaltSync(12)  //define method to hash password

let handleSignUpService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isCheckAccountExist = await db.User.findOne({
                where: {email: body.email},
                attributes: {exclude: ['password']},
                raw: true
            })
            if (!_.isEmpty(isCheckAccountExist)){
                resolve({err: 3, msg: 'Tài khoản đã tồn tại !', user: isCheckAccountExist})
            }else{
                await db.User.create({
                    email: body.email,
                    password: handleHashPassword(body.password),
                    name: body.name,
                    role: 'ROLE2'
                })
                resolve({ err: 0, msg: 'OK'})
            }
           
        } catch (error) {
            reject(error)
        }
    })
}

let handleHashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, methodHash);
}
let handleLoginService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isCheckAccountExist = await db.User.findOne({
                where: {email: body.email},
                raw: true
            })
            if (_.isEmpty(isCheckAccountExist)){
                resolve({err: 4, msg: 'Tài khoản không tồn tại !'})
            }else{
               bcrypt.compareSync(body.password, isCheckAccountExist.password) ? resolve({err: 0, msg: 'Login succeed!', user: {...isCheckAccountExist, password: ''}}) : resolve({err: 3, msg: 'Sai mật khẩu !'})
               
            }            
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetUserService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: query.email},
                attributes: {exclude : ['password']},
                raw: true
            })
            if (_.isEmpty(user)){
                resolve({err: 4, msg: 'Tài khoản không tồn tại !'})
            }else{
                resolve({err: 0, msg: 'OK', user })
            }             
        } catch (error) {
            reject(error)
        }
    })
}
let handleUpdateUserService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: body.email},
                attributes: {exclude : ['password']},
                raw: true
            })
            if (_.isEmpty(user)){
                resolve({err: 4, msg: 'Tài khoản không tồn tại !'})
            }else{
               await db.User.update({
                name: body.name || '',
                image: body.image || ''
               },{
                   where: {email: body.email}
               })
            }
            resolve({err: 0, msg: 'OK', idUser: user.id})          
        } catch (error) {
            reject(error)
        }
    })
}
let handAddSingerService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!body.idUser || !body.idSinger){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user và id song !'})
            }else{
                let user = await db.Singer.findOrCreate({
                    where: {idUser: body.idUser, idSinger: body.idSinger},
                    defaults: {
                        idUser: body.idUser,
                        idSinger: body.idSinger,
                        name: body.name,
                        avatar: body.avatar
                    },
                    raw: true
                })
                resolve({err: 0, msg: 'OK', songs: user[0]})    
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetPersonalService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = null
            switch (query.type) {
                case 'singer':
                    response = await db.Singer.findAll({
                        where: {idUser: query.idUser},
                        raw: true,
                    })
                    break;
                    case 'album':
                    response = await db.Album.findAll({
                        where: {idUser: query.idUser},
                        raw: true,
                    })
                    break;
            
                default:
                    break;
            }
            if (_.isEmpty(response)){
                resolve({err: 4, msg: 'Tài khoản không tồn tại !'})
            }else{
                resolve({err: 0, msg: 'OK', response })
            }             
        } catch (error) {
            reject(error)
        }
    })
}
let handleAddAlbumService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!body.idUser || !body.idAlbum){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user và id song !'})
            }else{
                let user = await db.Album.findOrCreate({
                    where: {idUser: body.idUser, idAlbum: body.idAlbum},
                    defaults: {
                        idUser: body.idUser,
                        idAlbum: body.idAlbum,
                        avatar: body.avatar
                    },
                    raw: true
                })
                resolve({err: 0, msg: 'OK', songs: user[0]})    
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleAddRecentService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!body.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user !'})
            }else{
                let user = await db.Recent.findOrCreate({
                    where: {idUser: body.idUser, idSong: body.idSong, idAlbum: body.idAlbum},
                    defaults: {
                        idUser: body.idUser,
                        idAlbum: body.idAlbum || null,
                        avatarAlbum: body.avatarAlbum || null,
                        avatarSong: body.avatarSong,
                        titleSong: body.titleSong,
                        artistSong: body.artistSong,
                        dayRelease: body.dayRelease,
                        duartion: body.duartion,
                        idSong: body.idSong
                    },
                    raw: true
                })
                resolve({err: 0, msg: 'OK', songs: user[0]})    
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetRecentService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
                let songs = await db.Recent.findAll({
                    where: {idUser: query.idUser},
                    raw: true
                })
                resolve({err: 0, msg: 'OK', songs: songs})    
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleDeleteRecentService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
                let recent = await db.Recent.findAll({
                    where: {idUser: query.idUser},
                    raw: true
                })
                if (recent && recent.length > 0){
                   let ids = recent.map(item => item.id)
                   if (ids.length > 20) ids.length = 10
                   await db.Recent.destroy({
                       where: { idUser: query.idUser, id: ids }
                   })
                }
                resolve({err: 0, msg: 'OK'})  
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleDeleteLikeService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
               if(query.type === 'singer'){
                  
                await db.Singer.destroy({
                    where: {idUser: query.idUser, idSinger: query.idSinger},
                    raw: true
                })
               }
               if (query.type === 'album'){
                await db.Album.destroy({
                    where: {idUser: query.idUser, idAlbum: query.idAlbum},
                    raw: true
                })
               }
                
                resolve({err: 0, msg: 'OK', })  
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleCreatePlaylistService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!body.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
               let playlist = await db.Playlist.findOrCreate({
                   where: { idUser: body.idUser, idPlaylist: body.idPlaylist,},
                   defaults: {
                       idUser: body.idUser,
                       idPlaylist: body.idPlaylist,
                       namePlaylist: body.namePlaylist || 'no name'
                   },
                   raw: true
               })
                
                resolve({err: 0, msg: 'OK', playlist })  
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetPlaylistService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
               let playlist = await db.Playlist.findAll({
                   where: { idUser: query.idUser, idSong: null},
                   raw: true
               })
                playlist ? resolve({err: 0, msg: 'OK', playlist }) : resolve({err: 3, msg: 'Not Found' })
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetPlaylistByIdService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
               let playlist = await db.Playlist.findAll({
                   where: { idUser: query.idUser, idPlaylist: query.idPlaylist},
                   raw: true
               })
                playlist ? resolve({err: 0, msg: 'OK', playlist }) : resolve({err: 3, msg: 'Not Found' })
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleUpdatePlaylistByIdService = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!body.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
              if (body.type === 'name'){
                await db.Playlist.update({
                    namePlaylist: body.name || 'Chưa đặt tên'
                },{
                    where: { idUser: body.idUser, idPlaylist: body.idPlaylist},
                })
                 resolve({err: 0, msg: 'OK' }) 
              }
              if (body.type === 'song'){
                let result =  await db.Playlist.findOrCreate({
                    where: { idUser: body.idUser, idPlaylist: body.idPlaylist, idSong: body.idSong},
                    defaults: { 
                            idSong: body.idSong,
                            thumbnail: body.thumbnail,
                            title: body.title,
                            artist: body.artist,
                            releasedDate: body.releasedDate,
                            duration: body.duration,
                            idUser: body.idUser, 
                            idPlaylist: body.idPlaylist, 
                        }
                    })
                result ? resolve({err: 0, msg: 'OK', result }) :resolve({err: 5, msg: 'Not found' }) 
              }
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleDeleteSongPlaylistService =(query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.idUser){
                resolve({err: 4, msg: 'Lỗi client: không thấy id user'})
            }else{
                await db.Playlist.destroy({
                   where: { idUser: query.idUser, idPlaylist: query.idPlaylist, idSong: query.idSong}
               })
               resolve({err: 0, msg: 'OK' })
            }
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleAddSongService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
           let response = await db.Song.findOrCreate({
                where: { idUser: body.idUser, idSong: body.idSong},
                defaults: {
                    idUser: body.idUser, 
                    idSong: body.idSong
                }
            })
            resolve({err: 0, msg: 'OK', response })
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleGetSongService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response
           if (query.type === 'all'){
            response = await db.Song.findAll({
                where: { idUser: query.idUser},
                raw: true
            })
           }else{
            response = await db.Song.findOne({
                where: { idUser: query.idUser, idSong: query.idSong},
                raw: true
            })
           }
            response ? resolve({err: 0, msg: 'OK', response }) : resolve({err: 6, msg: 'Not found' })
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleDeleteSongService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Song.destroy({
                where: { idUser: query.idUser, idSong: query.idSong},
            })
           resolve({err: 0, msg: 'OK' }) 
                  
        } catch (error) {
            reject(error)
        }
    })
}
let handleUpdatePasswordService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({
                password: handleHashPassword(body.password)
            },{
                where: { email: body.email},
            })
           resolve({err: 0, msg: 'OK' }) 
                  
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = { handleSignUpService, handleLoginService, handleGetUserService, handleUpdateUserService, handAddSingerService, handleGetPersonalService,
    handleAddAlbumService, handleAddRecentService, handleGetRecentService, handleDeleteRecentService, handleDeleteLikeService, handleCreatePlaylistService, handleGetPlaylistService,
    handleGetPlaylistByIdService, handleUpdatePlaylistByIdService, handleDeleteSongPlaylistService, handleAddSongService, handleGetSongService ,handleDeleteSongService,
handleUpdatePasswordService }