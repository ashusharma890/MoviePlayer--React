import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Iframe from "react-iframe";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
import { toast } from "react-toastify";

const VideoDetails = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList"
      );
      const tempdata = await response.json();
      console.log(tempdata);
      setData(tempdata);
      // toast("error");
    } catch (error) {
      console.log(error);
      toast("Error");
    }
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <Iframe
                url={data?.data["0"]?.trailer}
                className="react-player"
                controls
              />
              <h1
                style={{
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {data?.data[0]?.name} - {data?.data[0]?.year}
              </h1>
            </Box>
          </Box>
        </Stack>
      </Box>
      <div className="playlist">
        <Carousel className="carousel">
          {data &&
            data["data"].map((item, i) => (
              <Card
                key={i}
                sx={{
                  width: { xs: "100%", sm: "358px", md: "320px", lg: "500px" },
                  boxShadow: "none",
                  borderRadius: 0,
                  alignItems: "center",
                }}
              >
                <a href={item.trailer}>
                  <CardMedia
                    image={item.poster}
                    alt=""
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "358px",
                        md: "320px",
                        lg: "500px",
                      },
                      height: 500,
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="imgs"
                  />
                </a>
              </Card>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default VideoDetails;
