import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function ProjectCard(props) {
  console.log(props);
  return (
    
      <Box
        sx={{
          root: {
            maxWidth: 345,
          },
          media: {
            height: 175,
          },
          margin: 2
        }}
      >
        <Card>
          <CardMedia image={props.image.default} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              <span style={{ fontSize: "2rem", color: "black" }}>
                <a href={props.link}>
                  <i className="fab fa-github" />
                </a>
              </span>
            </Button>
          </CardActions>
        </Card>
      </Box>

  );
}
