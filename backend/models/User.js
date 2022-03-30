const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: [true, "Please provide a name!"]
    },
    Lastname: {
        type: String,
        required: [true, "Please provide a lastname!"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minlength: [6, "Please provide password with min length 6 "],
        required: ["true", "please provide a password"],
    },
    phone: {
        type: String,
        minlength: [10, "Please provide telephone number with min length 11"],
        required: ["true", "please provide a telephone number"],
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    title: {type: String},
    about: {type: String},
    place: {type: String},
    website: {type: String},
    profileImage: {
        type: String,
        default: "default.jpg"
    },
    blocked: {
        type: Boolean,
        default: false
    }
})
UserSchema.methods.generateJwtFromUser = function () {
    const {JWTSECRETKEY, JWTEXPIRE} = process.env
    const payload = {
        id: this._id,
        name: this.name
    }
    const token = jwt.sign(payload, JWTSECRETKEY, {
        expiresIn: JWTEXPIRE
    })
    return token
}
UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            this.password = hash;
            next();
        });
    });
})
module.exports = mongoose.model("User", UserSchema);