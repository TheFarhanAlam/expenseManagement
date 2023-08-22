import Transection from "../Models/Transection.js";
import moment from "moment"

export const getAllTransections = async (req, res) => {
    try {
        const {frequency, type} = req.body; 
        const allTransections = await Transection.find({userId: req.body.userId, date: {$gt: moment().subtract(Number(frequency), "d").toDate()}, ...(type !== "all" && {type: type})});
        res.status(200).json({
            allTransections
        });
    } catch (error) {
        console.log(error);
    }
};
export const addTransection = async (req, res) => {
    try {
        console.log(req.body);
        const newTransection = new Transection(req.body);
        await newTransection.save();
        res.status(201).json({
            newTransection
        });
    } catch (error) {
        console.log(error);
    }
};
export const deleteTransection = async (req, res) => {
    try {
        const {_id} = req.params;
        console.log(_id);
        const deleteTransection = await Transection.findOneAndDelete({_id: _id});
        res.status(200).json({
            deleteTransection
        });
    } catch (error) {
        console.log(error);
    }
};