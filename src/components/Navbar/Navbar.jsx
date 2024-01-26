import React from "react";
import { AppBar, Typography } from "@mui/material";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          // component={Link}

          to="/"
          variant="h2"
          align="center"
          className={classes.heading}
        >
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60"
          className={classes.image}
        />
      </div>
    </AppBar>
  );
}
