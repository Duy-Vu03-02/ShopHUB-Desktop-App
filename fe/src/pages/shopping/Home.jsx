import React, { useEffect } from "react";
import "../../resources/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../../componments/home/HomeBanner";
import HomeContainer from "../../componments/home/HomeContainer";
import HomeIntroduce from "../../componments/home/HomeIntroduce";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home_container">
        <HomeBanner />
        <HomeContainer />
        <HomeIntroduce />
      </div>
    </>
  );
}
export default Home;
