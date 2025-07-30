import express from "express";
import { handleFormSubmit } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit-form", handleFormSubmit);

export default router;
