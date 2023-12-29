import { model, Schema } from 'mongoose';

const technology = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20
    }
});

export default model('Technology', technology);