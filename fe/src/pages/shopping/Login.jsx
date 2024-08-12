import React, { useEffect, useState, useContext } from "react";
import "../../resources/login.css";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/login/tiktok.jpg";
import logoFace from "../../assets/login/facebook.png";
import logoGoogle from "../../assets/login/google.png";
import { useApolloClient } from "@apollo/client";
import { login } from "../../graphQL/query";
import { UserContext } from "../../context/userContext";
import Loadding from "../Loadding";

const Login = React.memo(() => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  const client = useApolloClient();
  const { setUserData } = useContext(UserContext);

  function handleChangeName(e) {
    setAccount(e.target.value);
  }
  function handleChangePass(e) {
    setPass(e.target.value);
  }

  const handleSubmit = async (e) => {
    try {
      setIsLoadding(true);
      e.preventDefault();
      const { data, errors } = await client.query({
        query: login,
        variables: { phone: account, password: pass },
      });

      if (errors) {
        console.error(errors);
        setIsLoadding(false);
      } else {
        if (data.user !== null) {
          setUserData(data.user);
          navigate("/shopping");
        }
        setIsLoadding(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoadding(false);
    }
  };

  return (
    <>
      {isLoadding ? (
        <Loadding />
      ) : (
        <div>
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
                    <span style={{ margin: 15, textAlign: "center" }}>
                      HOẶC
                    </span>
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
        </div>
      )}
    </>
  );
});

export default Login;
