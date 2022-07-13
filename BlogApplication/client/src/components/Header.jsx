import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    const [value, setValue] = useState()
    return (
        <>
            <AppBar sx={{ backgroundColor: "black" }}>
                <Toolbar>
                    <NavLink to="/" style={{ color: "white" }}>
                        <Typography>
                            <BookIcon />
                        </Typography>
                    </NavLink>
                    <Tabs sx={{ ml: "auto" }} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add blog (C)" />
                        <Tab LinkComponent={NavLink} to="/blogs" label="Blog (R)" />
                        {/* <Tab LinkComponent={NavLink} to="/update" label="Update (U)" />
                        <Tab LinkComponent={NavLink} to="/delete" label="Delete (D)" /> */}
                    </Tabs>
                </Toolbar>

            </AppBar>

        </>
    )
}

export default Header


// 1:10 me done