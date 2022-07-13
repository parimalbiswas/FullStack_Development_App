
const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog");

const blogcontroller = require("../controllers/Blogcontroller")

router.get("/", blogcontroller.getAllBlogs);

router.post("/",blogcontroller.addBlog);

router.get("/:id",blogcontroller.getById);

router.put("/:id",blogcontroller.updateBlog);
    
router.delete("/:id",blogcontroller.deleteBlog);    

module.exports = router;

// 25:10