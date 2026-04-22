import mongoose from 'mongoose';

const veterinarySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    phone: {
        type: String,
        default: null,
        trim: true,
    },

    web: {
        type: String,
        default: null,
    },

    token: {
        type: String,
        default: generarId(),
    },

    confirmado: {
        type: Boolean,
        default: false,
    },
});