import express from "express"
import bodyPaser from "body-parser"
import configViewEngine from "./config/configViewEngine"
import initWebRoutes from "./routes/routeWeb"
require("dotenv").config()
import {connectDatabase} from './config/connectDatabase'

let app = express()
//config cors
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT_APP)

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    )

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    )

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true)

    // Pass to next layer of middleware
    next()
})

//config params from fe
app.use(bodyPaser.json({limit: '50mb'}))
app.use(bodyPaser.urlencoded({ extended: true, limit: '50mb' }))
//config app
configViewEngine(app)
initWebRoutes(app)
connectDatabase()

//listen port
let port = process.env.PORT || 1510
app.listen(port, () => {
    console.log(`app run on the port ${port}`)
})
