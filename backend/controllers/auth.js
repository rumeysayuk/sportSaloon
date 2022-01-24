const User = require("../models/User");
const AsyncErrorWrapper = require("express-async-handler")
const {tokenHelpers} = require("../helpers/authorization/tokenHelpers")
const {validateUserInput, comparePassword} = require("../middlewares/input/inputHelpers")
const CustomError = require("../helpers/error/CustomError");
const mongoose = require("mongoose")

const register = AsyncErrorWrapper(async (req, res, next) => {
    const {name, email, password, role} = req.body;

    const user = await User.create({
        name, email, password, role
    })
    tokenHelpers(user, res)
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