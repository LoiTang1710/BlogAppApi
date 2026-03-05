import { response } from "express";
import Blog from "../models/blogModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(`Lỗi khi gọi getAllBlogs: ${error}`);
    res.status(400).json({ message: "Bad Request" });
  }
};
export const getDetailBlog = async (req,res)=>{
    try {
        const blog = await Blog.findById(req.params._id)
        res.status(200).json(blog)
    } catch (error) {
        console.error(`Lỗi khi gọi getDetailBlog: ${error}`);
        res.status(400).json({ message: "Bad Request" });
    }
}
export const createBlog = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const blog = new Blog({ title, content, category, tags });
    const newBlog = await blog.save();
    const response = {
      _id: blog.id,
      title: blog.title,
      content: blog.content,
      category: blog.category,
      tags: blog.tags,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    };
    res.status(201).json(response);
  } catch (error) {
    console.error(`Lỗi khi gọi createBlog: ${error}`);
    res.status(400).json({ message: "Bad Request" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params._id);
    const { title, content, category, tags } = req.body;
    blog.title = title;
    blog.content = content;
    blog.category = category;
    blog.tags = tags;
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    console.error(`Lỗi khi gọi updateBlog: ${error}`);
    res.status(400).json({ message: "Bad Request" });
  }
};
export const deleteDetailBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params._id)
        res.status(200).send("Blog deleted successfully")
    } catch (error) {
        console.error(`Lỗi khi gọi updateBlog: ${error}`);
        res.status(404).json({ message: "Not Found" });
    }
};
