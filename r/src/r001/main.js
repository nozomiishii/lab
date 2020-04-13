import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Dinosaur from "../components/Dinosaur";

const useStyles = makeStyles((theme) => ({
  main: {
    ...theme.centerize,
    background: "#9ADF66",
    height: "100vh",
    width: "100vw",
    margin: "0",
  },
  speak: {
    color: theme.palette.error.light,
    fontSize: "5rem",
    fontWeight: "900",
    animation: "$painting 1s infinite linear alternate",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
  dinosaur: {
    fontSize: "8rem",
    fontWeight: "900",
    animation: "$move 1s infinite linear alternate",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },
  "@keyframes move": {
    "0%": { transform: "translateX(-10px)" },
    "100%": { transform: "translateX(10px)" },
  },
  "@keyframes painting": {
    "0%": { color: theme.palette.error.light },
    "50%": { color: theme.palette.info.light },
    "100%": { color: theme.palette.warning.main },
  },
}));

const R001 = () => {
  const [speech, setSpeech] = useState(false);

  const comment = "Ya man!\nlet's get started React Lab!!!";
  const handleClick = () => {
    setSpeech(!speech);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.main}
      >
        <p className={classes.speak}>{speech ? comment : "..."}</p>
        <h1 className={classes.dinosaur}>
          <Dinosaur />
        </h1>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Hey!
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default R001;
