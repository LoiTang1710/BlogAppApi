import express from "express";
import {
  createBlog,
  deleteDetailBlog,
  getAllBlogs,
  getDetailBlog,
  updateBlog,
} from "../services/blogService.js";
import { blogValidation } from "../validations/blogValidation.js";
const Router = express.Router();

Router.route("/posts")
  .get(getAllBlogs)
  .post(blogValidation.createNew, createBlog);
Router.route("/posts/:_id")
  .get(getDetailBlog)
  .put(updateBlog)
  .delete(deleteDetailBlog);

export const blogRoute = Router;
