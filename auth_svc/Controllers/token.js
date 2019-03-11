import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const token = async (req, res) => {
  try {
    const encodedString = req.headers.authorization.split(' ')[1];
    const decodedString = jwt.verify(encodedString, process.env.JWT_SECRET);
    res.send(decodedString);
  } catch (err) {
    res
      .status(401)
      .send('Unauthorized.');
  }
};

export default token;
