import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';

const insertUserAddress = async (body) => {
  const { id: userId } = body.user;
  const {
    country,
    address,
    zip,
    phone,
  } = body;
  // First query to update user record
  const insertObj = Object.assign({}, body.user, {
    auth_token: 'hi',
    address: body.address,
    country: body.country,
    zip: body.zip,
    phone: body.phone,
    role: body.user.role === 'admin'
  })
  delete insertObj.iat
  delete insertObj.created_at
  delete insertObj.updated_at
  
  await sequelize.query(
    `
    INSERT INTO users (id, password, auth_token, email, role, first_name, last_name, address, country, zip, phone)
    VALUES (:id, :password, :auth_token, :email, :role, :first_name, :last_name, :address, :country, :zip, :phone)
    ON DUPLICATE KEY UPDATE
    address=:address,
    country=:country,
    zip=:zip,
    phone=:phone;
    `,
    {
      replacements: insertObj,
      type: Sequelize.QueryTypes.UPDATE,
    },
  );
  
  const test = await db.user.upsert({});

  //  Second query to retrieve the updated user
  const updatedUser = await sequelize.query('SELECT * FROM users WHERE id = :userId',
    {
      replacements: {
        userId,
      },
      type: Sequelize.QueryTypes.SELECT,
    });
  return updatedUser;
};

export default insertUserAddress;
