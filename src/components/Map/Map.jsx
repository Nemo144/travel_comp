import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();

  //ismobile = false when useMediaQuery > 600px
  // const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 59.9, lng: 67.8 };

  return (
    <div
      className={classes.mapContainer}
      style={{ height: "100vh", width: "100%" }}
    >
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        // }}
        // defaultCenter={coordinates}
        // center={coordinates}
        // defaultZoom={14}
        // margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
