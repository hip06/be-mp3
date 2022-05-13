import Zingmp3 from 'zingmp3-api-full'
import _ from 'lodash'

let getSongByIdService = (idSong) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseGetSong = await Zingmp3.getSong(idSong)
            resolve(responseGetSong)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { getSongByIdService }