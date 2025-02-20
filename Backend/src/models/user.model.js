import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password"))  next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function(){
    return jwt.sign({ email: this.email }, process.env.SECRET, { expiresIn: 86400 });
}

const userModel = mongoose.model("user", userSchema);

export default userModel;