const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  `mongodb://${process.env.AUTH_DB_NAME}:${process.env.AUTH_DB_PORT}/users`,
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    else console.log('MongoDB Connected.'); // eslint-disable-line no-console
  },
);

const userSchema = new mongoose.Schema({
  password: {
    required: true,
    type: String,
  },
  auth_token: {
    required: false,
    type: String,
    unique: true,
    default: null,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  role: {
    required: true,
    type: Boolean,
    default: false,
  },
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  zip: {
    type: String,
  },
  phone: {
    type: Number,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('User', userSchema);

const model = {};

model.getUsers = () => User.find({});

model.addUser = (user) => {
  const newUser = new User({ ...user });
  return newUser.save();
};

module.exports = model;
