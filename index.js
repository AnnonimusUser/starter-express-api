const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo DiguBha!')
})
app.get('/clg',(req,res)=>{
res.send("Yo it's /Clg")})
app.listen(process.env.PORT || 3000)
