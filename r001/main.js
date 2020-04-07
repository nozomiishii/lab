const { Button, Box, createMuiTheme, makeStyles, ThemeProvider } = MaterialUI;

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

const useStyle = makeStyles((theme) => ({
  main: {
    ...theme.centerize,
    background: "#9ADF66",
    height: "100vh",
    width: "100vw",
  },
  dinosaur: {
    ...theme.centerize,
    fontSize: "4rem",
  },
}));

const App = () => {
  const [speech, setSpeech] = React.useState(false);

  const comment = "ya man!　\n let's get started React Lab!!!";
  const handleClick = () => {
    setSpeech(!speech);
  };

  const classes = useStyle();
  return (
    <div className={classes.main}>
      <Box className={classes.dinosaur}>
        <p>{speech ? comment : "..."}</p>
        <h1>🦕</h1>
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
