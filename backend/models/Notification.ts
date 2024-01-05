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
    userRecipient: {
        type: Types.ObjectId,
        ref: 'User'
    },
    companyRecipient: {
        type: Types.ObjectId,
        ref: 'Company'
    },
    seen: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Notification', notification);