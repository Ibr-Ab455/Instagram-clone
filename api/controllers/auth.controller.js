import User from '../model/user.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utlis/error.js'
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
 const { fullname, username, email, password } = req.body

 if(!fullname || !username || !email || !password || fullname === "" || username === "" || email === "" || password === ""){
    next(errorHandler(400, 'All Fiels are required'))
 } 
 const hashedPassword = bcryptjs.hashSync(password, 10);

 const newUser = new User({ fullname, username, email, password: hashedPassword, 
});
  try{
    await newUser.save();
    res.json('Signup succesfully');
  }catch(error){
    next(error);
  }
  
}

export const signin = async (req, res, next) => {
 const { email, password } = req.body;

 if(!email || !password || email === '' || password === ''){
  next(errorHandler(400, 'All fields are required'));
 }

 try {
  const validUser = await User.findOne({ email });
  if(!validUser){
    return next(errorHandler(404, 'not found'));
  }

  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(!validPassword){
   return next(errorHandler(404, 'not password'));
  }

  const token = jwt.sign(
    { id: validUser.id, }, process.env.JWT_SECRET);

    const { password: pass, ...rest} = validUser._doc;
    res.status(200).cookie('access_token', token, {
      httpOnly: true,
    }).json(rest);

 } catch (error) {
    next(error)
 }
}