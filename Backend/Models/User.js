import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 3,
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 4,
        maxlength: 100
    },
    token: {
        type: String
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
