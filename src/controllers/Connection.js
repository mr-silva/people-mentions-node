const mongoose = require('mongoose');
require('dotenv/config');

exports.connectDataBase = () => {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;

  mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0-rfafu.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}