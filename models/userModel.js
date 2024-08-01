const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema({});

const User = mongoose.model("User", userSchema);

module.exports = User;
