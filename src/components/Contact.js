import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      height: theme.spacing(20),
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div style={{ margin: "25px", paddingLeft: "5%" }} className={classes.root}>
      <Paper>
        <div style={{ margin: "5px" }}>
          {" "}
          <p style={{ textJustify: "inter-word" }}>
            For more information, checkout my socials below:
          </p>
          <div>
            <Button size="small" color="primary">
              <span style={{ fontSize: "30px", color: "black" }}>
                <a href="https://www.linkedin.com/in/erick-villegaz/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
            </Button>
            <Button size="small" color="primary">
              <span style={{ fontSize: "30px", color: "black" }}>
                <a href="https://github.com/evllz">
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </Button>
            <Button size="small" color="primary">
              <span style={{ fontSize: "30px", color: "black" }}>
                <a href="https://twitter.com/e_villegaz">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </span>
            </Button>
          </div>
          <p style={{ textJustify: "inter-word" }}>
            Or send me an emal to:{" "}
            <a href="mailto:erick.villegaz@yahoo.com.">
              erick.villegaz@yahoo.com.
            </a>{" "}
          </p>
        </div>
      </Paper>
    </div>
  );
}
