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
            let response = await db.Singer.findAll({
                where: {idUser: query.idUser},
                raw: true,
            })
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

module.exports = { handleSignUpService, handleLoginService, handleGetUserService, handleUpdateUserService, handAddSingerService, handleGetPersonalService }