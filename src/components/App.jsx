import { useState } from "react";
import "../css/App.css";
import Piano from "./Piano";
import { Grid2 } from "@mui/material";
import ScaleSearch from "./ScaleSearch";
import ChordResult from "./ChordResult";
import ScaleMaker from "./ScaleMaker";
import ChordMaker from "./ChordMaker";
import { Button } from "@mui/material";

function App() {
  const [scale, setScale] = useState("");
  const [scaleNotes, setScaleNotes] = useState([]);
  const [base, setBase] = useState();
  const [chord, setChord] = useState("");
  const [chordNotes, setChordNotes] = useState([]);
  const [chordNotesKey, setChordNotesKey] = useState([]);

  function onClickHandler() {
    setScale("");
    setScaleNotes([]);
    setChordNotesKey([]);
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid2
        container
        spacing={2}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid2 item>
          <Piano
            scaleNotes={scaleNotes}
            chordNotes={chordNotes}
            chordNotesKey={chordNotesKey}
          />
        </Grid2>
        <Grid2 item>
          <ScaleSearch
            scale={scale}
            setScale={setScale}
            setScaleNotes={setScaleNotes}
            setChordNotesKey={setChordNotesKey}
          />
          <ScaleMaker scale={scale} setScaleNotes={setScaleNotes} />
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "white",
                borderColor: "black",
              },
            }}
            onClick={onClickHandler}
          >
            Clear Scale
          </Button>
        </Grid2>
        <Grid2 item>
          <ChordResult
            setBase={setBase}
            setChord={setChord}
          />
          <ChordMaker
            base={base}
            chord={chord}
            scaleNotes={scaleNotes}
            setChordNotes={setChordNotes}
            setChordNotesKey={setChordNotesKey}
          />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
