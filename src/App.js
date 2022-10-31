import React, { useEffect, useState } from "react";
import VideoDetails from "./components/VideoDetails";
import Grid from "@mui/material/Grid";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DarkModeToggle from "react-dark-mode-toggle";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    document.body.dataset.theme = "light";
  }, []);

  const setMode = () => {
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode ? "dark" : "light");
  };

  return (
    <Grid justifyContent="center" container spacing={16}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid item xs={12}>
        <DarkModeToggle onChange={setMode} checked={!isDarkMode} size={80} />
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <VideoDetails />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
