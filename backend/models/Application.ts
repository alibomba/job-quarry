import { model, Schema, Types } from 'mongoose';

const application = new Schema({
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
        maxLength: 40
    },
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 25
    },
    CV: {
        type: String,
        required: true
    },
    details: {
        type: String,
        maxLength: 300
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    offer: {
        type: Types.ObjectId,
        ref: 'Offer',
        required: true
    },
    status: {
        type: String,
        enum: ['Oczekujące', 'Odrzucone', 'Zaakceptowane'],
        default: 'Oczekujące'
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Application', application);