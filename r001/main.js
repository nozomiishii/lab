const App = () => {
  const [speech, setSpeech] = React.useState(false);

  const comment = "ya man! React Lab Start!!!";
  const handleClick = () => {
    console.log("click");
    console.log(speech);
    setSpeech(!speech);
  };
  return (
    <div onClick={handleClick}>
      🦕{"{"}
      {speech ? comment : "click me"})
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
