const Blog = require("../model/Blog");

const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (error) {
        console.log(error);
    }

    if (!blogs) {
        return res.status(404).json({ message: "No products Found !!" })
    }
    return res.status(200).json({ blogs })
}


const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (error) {
        console.log(error);
    }

    if (!blog) {
        return res.status(404).json({ message: "No Blog Found !!" })
    }
    return res.status(200).json({ blog })
    

}


const addBlog = async (req, res, next) => {
    const { name, author, description, image } = req.body;
    let blog;
    try {
        blog = new Blog({
            name: name,
            author: author,
            description: description,
            image: image

        })
        await blog.save();

    } catch (error) {
        console.log(error);
    }

    if (!blog) {
        return res.status(500).json({ message: "unable to Add" })
    }
    return res.status(201).json({ blog })
}


const updateBlog = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, image } = req.body;
    let blog;

    try {
        blog = await Blog.findByIdAndUpdate(id, {
            name,
            author,
            description,
            image
        })
        blog = await blog.save();
    } catch (error) {
        console.log(error);
    }


    if (!blog) {
        return res.status(404).json({ message: "unable to Update. Worng ID" })
    }
    return res.status(200).json({ blog })

}


const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    // const { name, author, description, image } = req.body;
    let blog;

    try {
        blog = await Blog.findByIdAndRemove(id)

    } catch (error) {
        console.log(error);
    }


    if (!blog) {
        return res.status(404).json({ message: "unable to Delete. Worng ID" })
    }
    return res.status(200).json({ message: "Product Deleted Succsfully" })
}


exports.getAllBlogs = getAllBlogs;
exports.addBlog = addBlog;
exports.getById = getById;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;