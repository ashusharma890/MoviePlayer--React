import React from "react";
import VideoDetails from "./components/VideoDetails";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <Grid justifyContent="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <VideoDetails />
          </Grid>
          <Grid item xs={4} style={{ color: "#fff" }}>
            Video list
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
