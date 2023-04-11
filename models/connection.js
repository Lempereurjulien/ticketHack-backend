const mongoose = require('mongoose');

const connectionString ='mongodb+srv://lempereurjulien83:velkoz83@clusterlempereur.hyqltcd.mongodb.net/ticketHack';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(()=> console.log('Database Connected'))
.catch(error => console.log(error));