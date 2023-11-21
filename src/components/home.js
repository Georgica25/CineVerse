import React from "react";
import Trending from "./trending";
import Toprated from "./toprated";
import Action from "./action";
import Comedy from "./comedy";
import Horror from "./horror";
import { sliderSettings } from "../shared/sliderSettings";

const sliderSet = sliderSettings;

const Home = () => {
  return (
    <div>
      <Trending settings={sliderSet} />
      <Toprated settings={sliderSet} />
      <Action settings={sliderSet} />
      <Comedy settings={sliderSet} />
      <Horror settings={sliderSet} />
    </div>
  );
};

export default Home;
