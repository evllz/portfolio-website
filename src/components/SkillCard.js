import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SkillCard(props) {
  return (
    
      <Box
        sx={{
          root: {
            width: 240,
          },
          media: {
            height: 140,
          },
          margin: 2
        }}
      >
        <Card sx={{width: 150}}>
          <CardContent>
            <span style={{ fontSize: "5rem", color: "#4153AF", paddingLeft:"1.5rem" }}>
              <i className={props.icon} />
            </span>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
              {props.skill}
            </Typography>
          </CardContent>
        </Card>
      </Box>

  );
}
