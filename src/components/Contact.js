import React from "react";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <div style={{ margin: "25px", paddingLeft: "5%" }}>
      <Box
        sx={{
          root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
              margin: 1,
              width: 150,
              height: 20,
            },
          },
        }}
      >
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
      </Box>
    </div>
  );
}
