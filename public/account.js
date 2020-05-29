const router = require('express').Router()

router.get('/login', async(req,res) => {
    try{
        res.send('Login page')
    }catch(e){
        console.log(e.message)
    }
})

router.get('/reg', async(req,res) => {
    try{
        res.send('Registration page')
    }catch(e){
        console.log(e.message)
    }
})


router.get('/dashboard', async(req,res) => {
    try{
        res.send('Dashboard page')
    }catch(e){
        console.log(e.message)
    }
})

module.exports = router