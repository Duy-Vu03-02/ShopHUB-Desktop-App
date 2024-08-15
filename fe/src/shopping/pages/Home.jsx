import React, { useEffect } from "react";
import "../../resources/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../components/home/HomeBanner";
import HomeContainer from "../components/home/HomeContainer";
import HomeIntroduce from "../components/home/HomeIntroduce";
const Home = React.memo(() => {
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
});
export default Home;
