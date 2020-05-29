const express = require('express')
const path = require('path')
const configs = require('./configs')
const mongoose = require('mongoose')
const app = express();
const parser = require('body-parser')

const cors = require('cors')

const account = require('./public/account')

app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())

app.use(parser.json())

async function start(){
    try{
        await mongoose.connect(configs.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.get("/", async (req, res) => {
            try{
                res.send("Main page here")
            }catch(e){
                console.log("Main page async request error")
            }
        })

        app.use('/account', account)

        app.listen(configs.port, console.log("Start has been started"))
    }catch(e){
        console.log("There is no any db connection: "+e.message)
        process.exit(1)
    }
}

start()
