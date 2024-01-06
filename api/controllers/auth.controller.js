import User from '../model/user.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utlis/error.js'

export const signup = async (req, res, next) => {
 const { username, email, password } = req.body

 if(!username || !email || !password || username === "" || email === "" || password === ""){
    next(errorHandler(400, 'All Fiels are required'))
 } 
 const hashedPassword = bcryptjs.hashSync(password, 10);

 const newUser = new User({username, email, password: hashedPassword, 
});
  try{
    await newUser.save();
    res.json('Signup succesfully');
  }catch(error){
    next(error);
  }
  
}