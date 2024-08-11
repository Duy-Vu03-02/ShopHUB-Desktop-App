import React, { useEffect, useState } from "react";
import "../../resources/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/login/tiktok.jpg";
import logoFace from "../../assets/login/facebook.png";
import logoGoogle from "../../assets/login/google.png";

function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    async function fetchData() {
      const dataSessionToken = await JSON.parse(
        localStorage.getItem("shop-hub-user")
      );
      if (dataSessionToken) {
        try {
          const type = "SESSIONTOKEN";
          const data = {
            type,
            dataSessionToken,
          };
          await axios
            .post("http://127.0.0.1:8080/auth/login", data)
            .then((response) => {
              if (response.status === 200) {
                localStorage.setItem(
                  "shop-hub-user",
                  JSON.stringify(response.data)
                );
                navigate("/");
              }
            })
            .catch((err) => {
              console.error(err);
            });
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetchData();
  }, []);

  function handleChangeName(e) {
    setAccount(e.target.value);
  }
  function handleChangePass(e) {
    setPass(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = "LOGIN";
    const data = {
      type,
      phone: account,
      password: pass,
    };
    await axios
      .post("http://127.0.0.1:8080/auth/login", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("shop-hub-user", JSON.stringify(response.data));
          navigate("/");
        }
      })
      .catch((err) => {
        setAccount("");
        console.error(err);
      });
  };

  return (
    <>
      <div className="login_nav_bar">
        <div className="login_logo">
          <img src={icon} alt="logo" />
          <Link to="/login">
            <h1 className="login_hubshop">
              <span className="login_hub">Shop&nbsp;</span>
              <span className="login_shop">Hub</span>
            </h1>
          </Link>
        </div>
        <div className="login_button_status">
          <button>
            <Link to="/login">Đăng nhập</Link>
          </button>
          <button>
            <Link to="/register">Đăng ký</Link>
          </button>
        </div>
      </div>
      <div className="login_content">
        <img src={icon} alt="background" />
        <div className="login_form_login_register">
          <form>
            <h3 className="login_login_register">Đăng nhập</h3>
            <input
              type="text"
              name="account"
              value={account}
              onChange={handleChangeName}
              placeholder="Email/Tên đăng nhập "
            />
            <input
              type="password"
              name="password"
              value={pass}
              onChange={handleChangePass}
              placeholder="Mật khẩu"
            />
            <button className="login_button_submit" onClick={handleSubmit}>
              ĐĂNG NHẬP
            </button>
            <div className="login_optinal">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <hr style={{ width: 125, height: 1, marginTop: 20 }} />
                <span style={{ margin: 15, textAlign: "center" }}>HOẶC</span>
                <hr style={{ width: 125, height: 1, marginTop: 20 }} />
              </div>
              <div className="login_socialnetwork">
                <div className="login_face">
                  <img
                    src={logoFace}
                    alt="facebbok"
                    style={{ marginTop: -7, marginLeft: 20 }}
                  />
                  <span style={{ marginLeft: 57 }}>Facebook</span>
                </div>
                <div className="login_googlemail">
                  <img
                    src={logoGoogle}
                    alt="google"
                    style={{ marginTop: 7, marginLeft: 28 }}
                  />
                  <span style={{ marginRight: 33 }}>Google</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
