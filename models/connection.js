const mongoose = require('mongoose');

const connectionString ='mongodb+srv://belletcarole:b7TZuvvcrl2oqHtl@cluster0.jlrn9mu.mongodb.net/ticketHack';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(()=> console.log('Database Connected'))
.catch(error => console.log(error));