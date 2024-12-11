import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function About() {
  return (
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
      <Paper style={{ width: "100%", height: "100%" }}>
        <div style={{ margin: "2rem" }}>
          <p style={{ textJustify: "inter-word" }}>
            Hello! I'm a full-stack developer with extensive expertise in modern
            web technologies and cloud environments. Holding a Bachelor’s degree
            in Electronics Engineering and a Web Development Certification, I
            have experience in frameworks like React.js, Vue.js, and Angular,
            along with backend technologies such as Node.js and Express. I have
            significant experience in building scalable microservices
            architectures, integrating databases like MongoDB, and leveraging
            messaging systems such as Kafka within event-driven systems.
          </p>
          <p style={{ textJustify: "inter-word" }}>
            A strong advocate for software quality, Erick employs Test-Driven
            Development (TDD) and Behavior-Driven Development (BDD) practices to
            ensure robust and maintainable solutions. Skills in containerization
            and cloud infrastructure, particularly on Google Cloud Platform
            (GCP), have enabled me to deploy secure and efficient applications.
            My experience extends to technical leadership, where he has
            successfully managed teams, transformed business requirements into
            technical deliverables, and implemented end-to-end software
            solutions.
          </p>
        </div>
      </Paper>
    </Box>
  );
}
