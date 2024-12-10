import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SkillCard(props) {
  return (
    <div style={{ margin: "20px" }}>
      <Box
        sx={{
          root: {
            width: 240,
          },
          media: {
            height: 140,
          },
        }}
      >
        <Card>
          <CardContent>
            <span style={{ fontSize: "100px", color: "#4153AF" }}>
              <i className={props.icon} />
            </span>
            <Typography gutterBottom variant="h5" component="h2">
              {props.skill}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
