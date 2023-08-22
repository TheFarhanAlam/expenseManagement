import mongoose, { Types } from "mongoose";

const transectionSchema = new mongoose.Schema({
    userId: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reference: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true});

const Transection = mongoose.model("TRANSECTION", transectionSchema);

export default Transection;