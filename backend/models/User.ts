import { model, Schema } from 'mongoose';
import { Application, Message, Notification } from '.';

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

user.post('deleteOne', async function (doc) {
    const applications = await Application.find({ user: doc._id });
    const messages = await Message.find({ user: doc._id });
    const notifications = await Notification.find({ user: doc._id });

    for (let application of applications) {
        await Application.deleteOne({ _id: application._id });
    }
    for (let message of messages) {
        await Message.deleteOne({ _id: message._id });
    }
    for (let notification of notifications) {
        await Notification.deleteOne({ _id: notification._id });
    }
});

export default model('User', user);