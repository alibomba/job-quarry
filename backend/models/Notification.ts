import { model, Schema, Types } from 'mongoose';

const notification = new Schema({
    image: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        maxLength: 50
    },
    redirect: {
        type: String,
        required: true,
        maxLength: 200
    },
    recipient: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Notification', notification);