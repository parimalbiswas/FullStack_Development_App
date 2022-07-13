import React from 'react'
import { useState } from 'react';

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddBlog = () => {

  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    image: "",
  });



  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };



  const sendRequest = async () => {
    await axios.post("http://localhost:8080/blogs", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      image: String(inputs.image),
      
    }).then((res) => res.data);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/blogs"));
  };




  return (
    <>

      <form onSubmit={handleSubmit}>
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
          <TextField margin="normal" fullWidth variant="outlined" name="name" onChange={handleChange} />

          <FormLabel>Author</FormLabel>
          <TextField margin="normal" fullWidth variant="outlined" name="author" onChange={handleChange} />

          <FormLabel>Description</FormLabel>
          <TextField margin="normal" fullWidth variant="outlined" name="description" onChange={handleChange} />

          <FormLabel>Image</FormLabel>
          <TextField margin="normal" fullWidth variant="outlined" name="image" onChange={handleChange} />

          <Button variant="contained" type="submit">Add Blog</Button>
        </Box>
      </form>




    </>
  )
}

export default AddBlog