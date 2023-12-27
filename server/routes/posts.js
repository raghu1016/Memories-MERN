import express from "express";
import { getPosts } from "../controllers/posts.js";

const Route = express.Router();

Route.get("/", getPosts);

export default Route;
