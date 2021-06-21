import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function Navbar() {
  const { push } = useHistory();
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        push("/");
        break;
      case 1:
        push("/projects");
        break;
      case 2:
        push("/about");
        break;
      case 3:
        push("/contact");
        break;
      default:
        break;
    }
  }, [value, push]);

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Skills" />
          <Tab label="Projects" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Paper>
    </div>
  );
}
