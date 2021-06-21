import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div style={{ margin: "20px" }}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.image} />
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
            <span style={{ fontSize: "30px", color: "black" }}>
              <a href={props.link}>
                <i className="fab fa-github" />
              </a>
            </span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
