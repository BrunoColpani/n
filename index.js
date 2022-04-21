const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./db/db')
const taks = require('./models/Task')
const taksRoutes = require('./routes/taksRoutes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use('/tasks', taksRoutes)

db.sync()
.then(()=> {
    app.listen(3000)
})
.catch((err) => console.log(err))
