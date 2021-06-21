import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 240,
  },
  media: {
    height: 140,
  },
});

export default function SkillCard(props) {
  const classes = useStyles();

  return (
    <div style={{ margin: "20px" }}>
      <Card className={classes.root}>
        <CardContent>
          <span style={{ fontSize: "100px", color: "#4153AF" }}>
            <i className={props.icon} />
          </span>
          <Typography gutterBottom variant="h5" component="h2">
            {props.skill}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
