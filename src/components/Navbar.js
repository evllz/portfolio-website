import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/projects");
        break;
      case 2:
        navigate("/about");
        break;
      case 3:
        navigate("/contact");
        break;
      default:
        break;
    }
  }, [value, navigate]);

  return (
    <div>
      <Box
        sx={{
          root: {
            flexGrow: 1,
          },
        }}
      >
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Skills" />
            <Tab label="Projects" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Paper>
      </Box>
    </div>
  );
}
