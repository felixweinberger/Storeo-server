const mongoose = require('mongoose');

mongoose.connect(
  `${process.env.AUTH_DB_NAME}:${process.env.AUTH_DB_PORT}/users`,
  { useNewUrlParser: true },
  () => console.log('MongoDB Connected.'), // eslint-disable-line no-console
);

const userSchema = new mongoose.Schema({
  id: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

const model = {};

model.getUsers = () => User.find({});

model.addUser = (user) => {
  const newUser = new User({
    id: user.id,
    password: user.password,
  });
  return newUser.save();
};

module.exports = model;
