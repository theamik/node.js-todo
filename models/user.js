import mongoose from "mongoose";

const userShecma = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
});

export const User = mongoose.model("User", userShecma);