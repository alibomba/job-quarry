import { model, Schema } from 'mongoose';
import { Message, Offer } from '.';

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

company.post('deleteOne', async function (doc) {
    const messages = await Message.find({ company: doc._id });
    const offers = await Offer.find({ company: doc._id });
    for (let message of messages) {
        await Message.deleteOne({ _id: message._id });
    }
    for (let offer of offers) {
        await Offer.deleteOne({ _id: offer._id });
    }
})

export default model('Company', company);