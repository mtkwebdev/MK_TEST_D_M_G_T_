const express = require('express');

const app = express();
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.send('public/index.html')
})

app.listen(3000, ()=>{console.log('Server running on localhost:3000')});