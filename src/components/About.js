import React from "react";
// import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(150),
//       height: theme.spacing(28),
//     },
//   },
// }));

export default function About() {
  // const classes = useStyles();
  return (
    <div
      style={{ margin: "25px", paddingLeft: "2.5%" }}
      // className={classes.root}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > *": {
            margin: 1,
            width: 150,
            height: 28,
          },
        }}
      >
        <Paper>
          <div style={{ margin: "5px" }}>
            {" "}
            <p style={{ textJustify: "inter-word" }}>
              I'm from Tijuana, Mexico where I studied my degree in Electronics
              Engineering. I have always been pasionate about technology that's
              why I decided to persue a career in the tech industry. During my
              career I have been learning all sort of skills some of them are
              circuit analysis and design, power electronics, embedded
              programming, electrical testing, validations, material management,
              quality assurace, and more!
            </p>
            <p style={{ textJustify: "inter-word" }}>
              Finally I decided to continue my career coding software so I took
              the FullStack Web Development and Computer Science program at
              Lambda School. Through my journey at Lambda I learnt to develop
              web applications working on real world projects and on my spare
              time I decided to take it upon myself to continue learning more
              technology out there.
            </p>
            <p style={{ textJustify: "inter-word" }}>
              I'm currently on the look out for a company that will help me to
              continue add up to my skills.
            </p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
