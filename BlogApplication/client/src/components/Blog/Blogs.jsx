import React from 'react';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';
// import style from "./Blog.module.css";

const URL = "http://localhost:8080/blogs";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBlogs(data.blogs))
    }, []);
    console.log(blogs);

    return (
        <div>
            <ul>
                {blogs && blogs.map((blog, i) => (
                    <li key={i}>
                        <Blog blog={blog} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Blogs

// 1:33