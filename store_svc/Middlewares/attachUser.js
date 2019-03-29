import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sequelize from '../db';
import { db } from '../Schemas';

const { User } = db;

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const userData = req.headers['x-user'];
  if (userData) req.body.user = JSON.parse(req.headers['x-user']);
  next();
};

export default authMiddleware;
