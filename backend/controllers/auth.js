const User = require("../models/user");
const AsyncErrorWrapper = require("express-async-handler")
const {tokenHelpers} = require("../helpers/authorization/tokenHelpers")
const {validateUserInput, comparePassword} = require("../helpers/input/inputHelpers")
const CustomError = require("../helpers/error/CustomError");

const register = AsyncErrorWrapper(async (req, res, next) => {
   let oldUser = await User.findOne({email: req.body.email})
   if (oldUser) return next(new CustomError("Email zaten kayıtlı", 400))
   const user = await User.create({...req.body});
   await user.save();
   return res.status(200).json({
      success: true,
      message: "Kullanıcı başarıyla oluşturuldu"
   })
})
const login = AsyncErrorWrapper(async (req, res, next) => {
   const {email, password} = req.body;
   if (!validateUserInput(email, password)) {
      return next(new CustomError("Please check your inputs!", 400))
   }

   const user = await User.findOne({email}).select("+password")
   if (!comparePassword(password, user.password)) {
      return next(new CustomError("Please check your credentials", 400))
   }
   tokenHelpers(user, res)
});

module.exports = {
   login,
   register,
}