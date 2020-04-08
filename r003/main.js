const { Button, createMuiTheme, makeStyles, ThemeProvider, Grid } = MaterialUI;

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

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
    width: "100vw",
    maxWidth: "800px",
  },
  fallBox: {
    animation: "$fall 3s both linear",
  },
  out: {
    width: "100%",
    display: "block",
    animation: "$getout 10s linear both",
  },
  "@keyframes getout": {
    "0%": { transform: "translateY(10px)" },
    "50%": { transform: "translateY(-500px)" },
    "100%": { transform: "translateX(50px)", display: "none" },
  },
  "@keyframes fall": {
    "0%": { top: "-100%" },
    "70%": { top: "60%" },
    "80%": { top: "40%" },
    "90%": { top: "55%" },
    "100%": { top: "50%" },
  },
}));

const CustomButton = (props) => {
  const [buttonColor, setBottonColor] = React.useState("default");
  const classes = useStyles();
  const handleClick = (e) => {
    props.handleSwich();
    console.log(e.target);
  };

  React.useEffect(() => {
    let random = Math.floor(Math.random() * colors.length);
    setBottonColor(colors[random]);
  }, [props.sensor]);

  const colors = ["primary", "secondary"];

  return (
    <Button
      variant="contained"
      color={buttonColor}
      onClick={(e) => {
        handleClick(e);
        e.target.classList.add(classes.out);
      }}
    >
      {buttonColor === "primary" ? "🥶" : "🥵"}
    </Button>
  );
};

const App = () => {
  const classes = useStyles();
  const [sensor, setSensor] = React.useState(false);

  const handleSwich = () => {
    setSensor(!sensor);
  };

  React.useEffect(() => {
    const btnBox = document.getElementById("btnBox");
    btnBox.classList.add(classes.fallBox);
  }, []);
  let items = [];
  for (let i = 0; i < 12 * 12; i++) {
    items.push(
      <Grid item key={i} xs={2} md={1}>
        <CustomButton sensor={sensor} handleSwich={handleSwich} />
      </Grid>
    );
  }

  return (
    <div id="btnBox" className={classes.container}>
      <Grid container justify="space-around">
        {items}
      </Grid>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
