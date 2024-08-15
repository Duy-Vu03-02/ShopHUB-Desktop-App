import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../resources/login.css";
import icon from "../../assets/login/tiktok.jpg";

function Register() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [verification, setVerification] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }
  function handleChangeVerification(e) {
    setVerification(e.target.value);
  }
  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleChangePass(e) {
    setPass(e.target.value);
  }
  function handleChangeConfirm(e) {
    setConfirm(e.target.value);
  }
  function handleValidate() {
    if (pass !== confirm) {
      return false;
    } else if (pass.length < 3 || username < 3 || phone < 3) {
      return false;
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (handleValidate()) {
      const data = {
        username,
        password: pass,
        phone,
      };
      axios
        .post("http://127.0.0.1:8080/auth/register", data)
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
    }
    setPhone("");
    setVerification("");
    setUsername("");
    setPass("");
    setConfirm("");
  }

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
      <div className="login_form_login_register">
        <form>
          <h3 className="login_login_register">Đăng ký</h3>
          <input
            type="text"
            name="phonenumber"
            value={phone}
            onChange={handleChangePhone}
            placeholder="Số điện thoại"
            required
          />
          <div className="login_confirm">
            <input
              type="text"
              name="verification"
              value={verification}
              onChange={handleChangeVerification}
              placeholder="Nhập mã OTP"
              required
            />
            <span className="login_otp">Lấy OTP</span>
          </div>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Tên tài khoản"
            required
          />
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={handleChangePass}
            placeholder="Mật khẩu"
            required
          />
          <input
            type="password"
            name="confirm"
            value={confirm}
            onChange={handleChangeConfirm}
            placeholder="Xác nhận mật khẩu"
            required
          />
          <button className="login_button_submit" onClick={handleSubmit}>
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
