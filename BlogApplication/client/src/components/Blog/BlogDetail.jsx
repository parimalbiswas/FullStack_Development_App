import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
    Button,
    FormLabel,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const BlogDetail = () => {

    const [inputs, setInputs] = useState({});

    const id = useParams().id;
    const history = useNavigate();
    // console.log(id);
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:8080/blogs/${id}`)
                .then((res) => res.data)
                .then(data => setInputs(data.blog));
        };
        fetchHandler()
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:8080/blogs/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            image: String(inputs.image),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/blogs"))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    // console.log(inputs);
    return (
        <div>


            {inputs && <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={"center"}
                    maxWidth={700}
                    alignContent={"center"}
                    alignSelf="center"
                    marginLeft={"auto"}
                    marginRight="auto"
                    marginTop={10}
                >
                    <FormLabel>Name</FormLabel>
                    <TextField margin="normal" fullWidth variant="outlined" name="name" onChange={handleChange} value={inputs.name}/>

                    <FormLabel>Author</FormLabel>
                    <TextField margin="normal" fullWidth variant="outlined" name="author" onChange={handleChange} value={inputs.author}/>

                    <FormLabel>Description</FormLabel>
                    <TextField margin="normal" fullWidth variant="outlined" name="description" onChange={handleChange} value={inputs.description}/>

                    <FormLabel>Image</FormLabel>
                    <TextField margin="normal" fullWidth variant="outlined" name="image" onChange={handleChange} value={inputs.image}/>

                    <Button variant="contained" type="submit">Update Blog</Button>
                </Box>
            </form>}






        </div>
    )
}

export default BlogDetail