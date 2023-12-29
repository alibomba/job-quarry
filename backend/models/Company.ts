import { model, Schema } from 'mongoose';

const company = new Schema({
    companyName: {
        type: String,
        required: true,
        unique: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 40
    },
    password: {
        type: String,
        required: true
    },
    website: {
        type: String,
        maxLength: 500
    },
    logo: {
        type: String
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
    description: {
        type: String,
        maxLength: 600
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Company', company);