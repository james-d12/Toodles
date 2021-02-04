const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const app = express()
const port = 8000;

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')
// Should 'public/' be 'public' instead?
app.use(express.static('public/'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./Server/Routes/Router'))



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
