const express = require('express')
const cors = require('cors')
const app = express();

// Settings
app.set('port',4000)

//  Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))
module.exports = app;
