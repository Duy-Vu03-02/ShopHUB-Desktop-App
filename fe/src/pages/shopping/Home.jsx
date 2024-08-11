import React, { useEffect } from "react";
import "../../resources/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../../componments/home/HomeBanner";
import HomeContainer from "../../componments/home/HomeContainer";
import HomeIntroduce from "../../componments/home/HomeIntroduce";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetch() {
      const localSessionToken = JSON.parse(
        localStorage.getItem("shop-hub-user")
      );
      const data = {
        localSessionToken,
      };
      if (!localSessionToken) {
        // navigate("/login");
        return;
      } else {
        try {
          await axios
            .post("http://127.0.0.1:8080/auth/sessionToken", data)
            .then((response) => {
              console.log(response);
              if (response.status === 200) {
                console.log("axios");
                localStorage.setItem(
                  "shop-hub-user",
                  JSON.stringify(response.data)
                );
              }
            })
            .catch(() => {
              navigate("/login");
            });
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetch();
  }, []);
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
