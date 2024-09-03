import "../css/App.css";
import Piano from "./Piano";
import { Grid2 } from "@mui/material";
import ScaleSearch from "./ScaleSearch";
import ChordResult from "./ChordResult";

function ChordAssist() {
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
          <Piano />
        </Grid2>
        <Grid2 item>
          <ScaleSearch />
        </Grid2>
        <Grid2 item>
          <ChordResult />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ChordAssist;
