const { Button, makeStyles, ThemeProvider, Grid } = MaterialUI;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "800px",
  },
}));

const btnReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECK":
      return { checkClicked: action.checkClicked };
    default:
      return state;
  }
};

const CustomButton = () => {
  const [buttonColor, setBottonColor] = React.useState("default");
  const [checkClicked, dispatch] = React.useReducer(btnReducer, true);

  const colors = ["primary", "secondary", "default"];
  const handleClick = () => {
    console.log(checkClicked);
    dispatch({
      type: "TOGGLE_CHECK",
      checkClicked: !checkClicked,
    });
  };

  React.useEffect(() => {
    console.log("effect");
    let random = Math.floor(Math.random() * colors.length);
    setBottonColor(colors[random]);
  }, [checkClicked]);

  return (
    <Button variant="contained" color={buttonColor} onClick={handleClick}>
      btn
    </Button>
  );
};

const App = () => {
  const btnContext = React.createContext();
  const [checkClicked, dispatch] = React.useReducer(btnReducer, true);
  const classes = useStyles();
  let items = [];

  for (let i = 0; i < 12 * 12; i++) {
    items.push(
      <Grid item key={i} xs={1}>
        <CustomButton />
      </Grid>
    );
  }

  return (
    <btnContext.Provider
      className={classes.container}
      value={{ checkClicked, dispatch }}
    >
      <Grid container justify="space-around">
        {items}
      </Grid>
    </btnContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
