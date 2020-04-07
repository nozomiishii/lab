const {
  Button,
  Box,
  createMuiTheme,
  createStyles,
  makeStyles,
  ThemeProvider,
  useMediaQuery,
} = MaterialUI;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4BD6E1",
    },
    secondary: {
      main: "#FFD84C",
    },
  },
  centerize: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      ...theme.centerize,
      background: "#9ADF66",
      height: "100vh",
      width: "100vw",
    },
    speak: {
      color: theme.palette.error.light,
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.5em",
      },
    },
    dinosaurBox: {
      ...theme.centerize,
      fontSize: "5rem",
    },
    dinosaur: {
      // display: "block",
      animation: "$move 1s infinite linear alternate",
    },
    "@keyframes move": {
      "0%": { transform: "translateX(-10px)" },
      "100%": { transform: "translateX(10px)" },
    },
  })
);

const App = () => {
  const [speech, setSpeech] = React.useState(false);

  const comment = "Ya man!\nlet's get started React Lab!!!";
  const handleClick = () => {
    setSpeech(!speech);
  };

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.dinosaurBox}>
        <p className={classes.speak}>{speech ? comment : "..."}</p>
        <h1 className={classes.dinosaur}>🦕</h1>
      </Box>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Hey!
      </Button>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
