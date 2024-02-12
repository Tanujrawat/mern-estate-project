import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { UserName, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ UserName, email, password:hashPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
      } catch (error) {
        //res.status(500).json(error.message);
        next(error);
      }
}
