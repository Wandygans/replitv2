const moment = require('moment-timezone')

const express = require("express"),
    logger = require("morgan"),
    cors = require("cors"),
    cookieParser = require("cookie-parser"),
    bodyParser = require("body-parser"),
    database = require("./db/mongo"),
    db = database.get("short-link");

const app = express()
const port = process.env.PORT || 8080

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

app.set('json spaces', 2)
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = false
}
if(time2 < "19:03:00"){
        var ucapanWaktu = false
}
if(time2 < "19:02:00"){
        var ucapanWaktu = true
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = true
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = false
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = false
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = false
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = false
}

app.get('/jamsholat', (req, res) => {
data = ucapanWaktu;
res.json({ data })
})


// Handling 404
app.use(function (req, res, next) {
    res.sendStatus(404)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
