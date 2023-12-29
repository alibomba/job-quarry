import { model, Schema, Types } from 'mongoose';

const message = new Schema({
    company: {
        type: Types.ObjectId,
        ref: 'Company',
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    sender: {
        type: String,
        enum: ['User', 'Company'],
        required: true
    },
    content: {
        type: String,
        required: true,
        maxLength: 300
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Message', message);