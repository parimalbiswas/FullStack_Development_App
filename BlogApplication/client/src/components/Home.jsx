import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>


      <h1>Home</h1>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Button LinkComponent={Link} to="/blogs" sx={{ marginTop: 25, bgcolor: 'black' }} variant="contained">
          <Typography variant='h3'>View All Products</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home