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
  dinosaur: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
  },
}));

const App = () => {
  const [speech, setSpeech] = React.useState(false);

  const comment = "ya man! React Lab Start!!!";
  const handleClick = () => {
    console.log("click");
    console.log(speech);
    setSpeech(!speech);
  };
  return (
    <div>
      <div>
        🦕{"{"}
        {speech ? comment : "click me"})
      </div>
      <Button variant="contained" onClick={handleClick}>
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
