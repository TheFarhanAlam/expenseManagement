import express from "express";
import { addTransection, getAllTransections, deleteTransection } from "../Controllers/transectionController.js";

const router = express.Router();

router.post("/add-transection", addTransection);
router.delete("/delete-transection/:_id", deleteTransection);
router.post("/get-transection", getAllTransections);

export default router;