const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //                                cats-app-dev is the name of our database
  //                                   |
  .connect('mongodb+srv://aKuma:elEfante32@supercuster.guubw.mongodb.net/movies?retryWrites=true&w=majority')
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
