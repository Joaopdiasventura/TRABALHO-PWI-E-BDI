import { Router } from "express";
import mongoose from "mongoose";
import empresas from "../models/empre.js";

const viewr = Router();

viewr.get("/", (req, res) => {
    res.render("index");
});


export default viewr;
