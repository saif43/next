import React, { useEffect, useState } from "react";
import AboutChild from "./aboutChild";

const About = () => {
  useEffect(() => {
    console.log("Change");
    return () => {
      console.log("Removed");
    };
  });

  return (
    <div>
      <AboutChild />
      <br />
      <AboutChild />
      <br />
      <AboutChild />
      <br />
      <AboutChild />
      <br />
    </div>
  );
};

export default About;
