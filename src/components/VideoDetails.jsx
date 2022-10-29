import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
// import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetails = () => {
  const [data, setData] = useState({});
  const [videos, setVideos] = useState([]);

  // const getData = () => {
  //   fetch("https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList")
  //     .then(function (response) {
  //       // console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson);
  //     });
  // };
  const getData = async () => {
    const response = await fetch(
      "https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList"
    );
    const tempdata = await response.json(); //convert json to object

    setData(tempdata);
  };

  useEffect(() => {
    getData();
    // localStorage.setItem("videoList", data);
    // console.log(localStorage.getItem("videoList"));
    console.log(data);
  }, []);

  // data.data.map((i, video) => setVideos(data?.trailer));
  // console.log(videos);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <Iframe
              url={data?.data[1]?.trailer}
              className="react-player"
              controls
            />
            {/* <h2 style={{ color: "#fff" }}>{data?.data[1]?.name}</h2> */}
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              {/* <img src={data.data[1]?.poster} alt="" /> */}
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Videos direction="column" /> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
