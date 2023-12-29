import { model, Schema } from 'mongoose';

const experience = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 40
    },
    company: {
        type: String,
        required: true,
        maxLength: 40
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    }
});

const user = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    surname: {
        type: String,
        required: true,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 40
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 99
    },
    profilePicture: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength: 600
    },
    portfolio: {
        type: String,
        maxLength: 500
    },
    socialMedia: {
        facebook: {
            type: String,
            maxLength: 500
        },
        instagram: {
            type: String,
            maxLength: 500
        },
        linkedin: {
            type: String,
            maxLength: 500
        },
        github: {
            type: String,
            maxLength: 500
        }
    },
    skills: {
        type: [String],
        default: []
    },
    experience: {
        type: [experience],
        default: []
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('User', user);