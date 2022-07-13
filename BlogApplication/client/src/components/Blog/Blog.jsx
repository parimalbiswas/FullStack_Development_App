import React from 'react';
import { Button } from "@mui/material";
import style from "./Blog.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Blog = (props) => {
    const history = useNavigate();
    const { _id, name, author, description, image } = props.blog;

    const deleteHandler = async () => {
        await axios.delete(`http://localhost:8080/blogs/${_id}`)
            .then((res) => res.data)
            .then(()=> history("/"))
            .then(() => history("/blogs"));
    }


    return (
        <div className={style.card}>

            <img src={image} alt={name} />
            <p>By {author}</p>
            <p>{name}</p>
            <p>{description}</p>

            <Button LinkComponent={Link} to={`/blogs/${_id}`} variant="contained" color="success">Update</Button>
            <Button onClick={deleteHandler} variant="outlined" color="error">Delete</Button>



        </div>
    )
}

export default Blog