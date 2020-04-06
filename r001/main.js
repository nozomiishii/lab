const { Button, createMuiTheme, makeStyles, ThemeProvider } = MaterialUI;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4BD6E1",
    },
    secondary: {
      main: "#FFD84C",
    },
  },
});

const useStyle = makeStyles((theme) => ({
  main: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px red",
    height: "100vh",
  },
  dinosaur: {
    fontSize: "4rem",
  },
}));

const App = () => {
  const [speech, setSpeech] = React.useState(false);

  const comment = "ya man! let's get started React Lab!!!";
  const handleClick = () => {
    console.log("click");
    console.log(speech);
    setSpeech(!speech);
  };

  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div className={classes.dinosaur}>
        🦕{"{"}
        {speech ? comment : "..."})
      </div>
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
