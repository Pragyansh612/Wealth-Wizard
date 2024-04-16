const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const DB = 'mongodb+srv://saxenapragyansh:Bittu@2005@cluster0.vtqcziz.mongodb.net/';
mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

}).then(() => {
    console.log(`connection is succesfull`);
}).catch((err) => console.log(`no connection`));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello Abut!')
})
app.get('/contact', (req, res) => {
  res.send('Hello con!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})