const { Button, makeStyles, ThemeProvider, Grid } = MaterialUI;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "800px",
  },
}));

const CustomButton = () => {
  const [buttonColor, setBottonColor] = React.useState("default");
  const [sensor, setSensor] = React.useState(0);
  const colors = ["primary", "secondary"];
  const handleClick = () => {
    let random = Math.floor(Math.random() * colors.length);
    setBottonColor(colors[random]);
    setSensor(sensor === 0 ? 1 : 0);
    console.log(sensor);
    const changeColor = setInterval(() => {
      let random = Math.floor(Math.random() * colors.length);
      setBottonColor(colors[random]);
      if (sensor === 1) {
        clearInterval(changeColor);
        setBottonColor("default");
      }
    }, 100);
  };

  // React.useEffect(() => {
  //   const changeColor = setInterval(() => {
  //     let random = Math.floor(Math.random() * colors.length);
  //     setBottonColor(colors[random]);
  //   }, 1000);
  //   return () => clearInterval(changeColor);
  // }, [sensor]);

  return (
    <Button variant="contained" color={buttonColor} onClick={handleClick}>
      btn
    </Button>
  );
};

const App = () => {
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
    <div className={classes.container}>
      <Grid container justify="space-around">
        {items}
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
