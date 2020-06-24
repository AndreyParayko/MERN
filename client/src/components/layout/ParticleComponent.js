import React from "react";
import Particles from "react-particles-js";
import config from "./config.json";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles params={config} />
  </div>
);
