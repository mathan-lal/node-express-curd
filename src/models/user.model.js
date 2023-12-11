import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    }
}, {timestamps: true});

userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}
const secret = 'mathanlal';
userSchema.methods.generateToken = async function () {
    return await jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    }, secret, { expiresIn: '10d' });
};

export const User = model("User", userSchema);