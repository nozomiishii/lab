const { Button, makeStyles, ThemeProvider, Grid } = MaterialUI;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "800px",
  },
}));

const App = () => {
  const classes = useStyles();
  const colors = [
    "primary",
    "secondary",
    "default",
    // "warning",
    // "info",
    // "success",
  ];
  let items = [];
  for (let i = 0; i < 12 * 12; i++) {
    let random = Math.floor(Math.random() * colors.length);
    items.push(
      <Grid item key={i} xs={1}>
        <Button variant="contained" color={colors[random]}>
          btn
        </Button>
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
