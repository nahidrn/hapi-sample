'use strict';

const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    FirstName: { type: String, required: true, index: true },
    LastName: { type: String, required: true, index: true },
    IsActive: { type: Boolean, default: true },
    Email: { type: String },
    Phone: { type: String },
    Scope: { type: String, required:true }
}, { timestamps: true });

userSchema.virtual('FullName')
    .get(function () {

        return this.FirstName + ' ' + this.LastName;
    })
    .set(function (name) {

        this.FirstName = name.substr(0, name.indexOf(' '));
        this.LastName = name.substr(name.indexOf(' ') + 1);
    });

module.exports = Mongoose.model('User', userSchema);
