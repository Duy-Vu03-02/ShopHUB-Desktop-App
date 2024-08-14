import React, { useState, useEffect, Compo } from "react";
import "../../../resources/sellerChanel.css";
import close from "../../../assets/icon/close.svg";

const BoxChoie = React.memo(({ handleChangeDataSentCompoment }) => {
  const [dislayConponment, setDisplayComponment] = useState("");
  const [optionFirst, setOptionFirst] = useState("");
  const [optionSecond, setOptionSecond] = useState("");
  const [stateDisabled, setStateDisabled] = useState(false);
  const data = [optionFirst, optionSecond];

  useEffect(() => {
    const fetch = () => {
      if (data[1] != "") {
        setStateDisabled(false);
      } else {
        setStateDisabled(true);
      }
    };
    fetch();
  }, [data]);

  function handleDisplayList(e) {
    setOptionFirst(e.target.textContent);
    setDisplayComponment(e.target.textContent.trim());
    setOptionSecond("");
  }
  function handleSetOptionSecond(e) {
    setOptionSecond(e.target.textContent);
  }
  function handleButtonCancel() {
    const elemnt = document.querySelector(".choie-type-product");
    const fullScreen = document.querySelector(".full-screen");
    elemnt.style.display = "none";
    fullScreen.style.display = "none";
  }
  const handleButtonOk = async () => {
    await handleChangeDataSentCompoment([optionFirst, optionSecond]);
    handleButtonCancel();
  };

  const componment = {
    "Thời trang nữ": (
      <ThoiTrangNu handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Thời trang nam": (
      <ThoiTrangNam handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Túi Phụ kiện": (
      <TuiPhuKien handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Thể thao": <TheThao handleSetOptionSecond={handleSetOptionSecond} />,
    "Điện thoại": <DienThoai handleSetOptionSecond={handleSetOptionSecond} />,
    "Đồ chơi Mô hình": (
      <DoChoiMoHinh handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Ô tô Xe máy": <OToXeMay handleSetOptionSecond={handleSetOptionSecond} />,
    "Thiết bị gia dụng": (
      <ThietBiGiaDung handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Chăm sóc sắc đẹp": (
      <ChamSocSacDep handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Đồ ăn và đồ uống": (
      <DoAnVaDoUong handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Y học và sức khỏe": (
      <YHocVaSucKhoe handleSetOptionSecond={handleSetOptionSecond} />
    ),
    "Đồ chơi Mẹ và bé": (
      <DoChoiMeVaBe handleSetOptionSecond={handleSetOptionSecond} />
    ),
  };

  return (
    <>
      <div className="choie-type-product ">
        <div style={{ padding: 5 }}></div>
        <div className="flex">
          <div className="content-choie-type capitalize">
            <h3>chỉnh sửa ngành hàng</h3>
          </div>
          <img
            src={close}
            alt=""
            className="img-close"
            onClick={handleButtonCancel}
          />
        </div>
        <div className="choie-and-choie flex">
          <div className="optinal-type">
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Thời trang nữ</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Thời trang nam</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Túi Phụ kiện</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Thể thao</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Điện thoại</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Đồ chơi Mô hình</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Đồ chơi Mẹ và bé</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Ô tô Xe máy</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Thiết bị gia dụng</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Chăm sóc sắc đẹp</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Đồ ăn và đồ uống</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
            <div className="type-detail">
              <div className="sidebar flex">
                <p onClick={(e) => handleDisplayList(e)}>Y học và sức khỏe</p>
                <span className="icon-small">&gt;</span>
              </div>
            </div>
          </div>
          <hr
            style={{
              width: 1,
              border: "none",
              backgroundColor: "#e8e8e8",
              marginRight: 10,
              position: "relative",
            }}
          />
          <div className="compoment-choie-type">
            {dislayConponment && componment[dislayConponment]}
          </div>
          <hr
            style={{
              width: 1,
              border: "none",
              backgroundColor: "#e8e8e8",
              position: "absolute",
              left: 100,
            }}
          />
        </div>
        <div className="display-choied flex">
          <p className="display-value-choie">
            Đã Chọn:&nbsp;
            <span className="optionFirst">{optionFirst}</span>
            <span>&nbsp;&gt;&nbsp;</span>
            <span className="optionSecond">{optionSecond}</span>
          </p>
          <div className="button-choie flex">
            <button onClick={handleButtonCancel}>Hủy</button>
            <button
              onClick={handleButtonOk}
              className="button-confirm"
              disabled={stateDisabled}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

function OToXeMay({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Xe máy/Thiết bị/Phụ kiện</li>
        <li onClick={handleSetOptionSecond}>Ô tô/Thiết bị/Phụ kiện</li>
        <li onClick={handleSetOptionSecond}>
          Vật tư ô tô/Điện tử/Làm sạch/Sửa đổi
        </li>
        <li onClick={handleSetOptionSecond}>
          Phụ tùng ô tô/Bảo trì/Làm đẹp/ Bảo trì
        </li>
        <li onClick={handleSetOptionSecond}>Hàng hóa ảo</li>
      </ul>
      ;
    </>
  );
}

function ThietBiGiaDung({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Dụng cụ nhà bếp</li>
        <li onClick={handleSetOptionSecond}>Thiết bị gia đình</li>
        <li onClick={handleSetOptionSecond}>Thiết bị chính</li>
        <li onClick={handleSetOptionSecond}>
          Chăm sóc cá nhân/Sức khỏe/Thiết bị massage
        </li>
        <li onClick={handleSetOptionSecond}>
          Vệ sinh/Thực phẩm/Thiết bị thương mại
        </li>
      </ul>
      ;
    </>
  );
}
function ChamSocSacDep({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>
          Dụng cụ trang điểm/Nước hoa/Làm đẹp
        </li>
        <li onClick={handleSetOptionSecond}>
          Làm đẹp và chăm socs da/Cơ thể/Tinh dầu
        </li>
        <li onClick={handleSetOptionSecond}>
          Chất tẩy rửa/ Băng vệ sinh/Giấy/Dầu thơm
        </li>
        <li onClick={handleSetOptionSecond}>Thiết bị làm đẹp và cơ thể</li>
        <li onClick={handleSetOptionSecond}>Chăm sóc tóc/ tóc giả</li>
        <li onClick={handleSetOptionSecond}>Chăm sóc răng miệng</li>
      </ul>
      ;
    </>
  );
}
function DoAnVaDoUong({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Đồ ăn nhẹ/Các loại hạt/Đặc sản</li>
        <li onClick={handleSetOptionSecond}>Trà</li>
        <li onClick={handleSetOptionSecond}>Cà phê/Ngũ cốc/Đồ uống</li>
        <li onClick={handleSetOptionSecond}>
          Thực phẩm sức khỏe/Thực phẩm bổ sung dinh dưỡng
        </li>
        <li onClick={handleSetOptionSecond}>
          Gia vị ngũ cốc và dầu/Thức ăn nhanh/Đồ khô/Nướng
        </li>
        <li onClick={handleSetOptionSecond}>Bổ sung dinh dưỡng truyền thống</li>
      </ul>
      ;
    </>
  );
}
function YHocVaSucKhoe({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Dụng cụ y tế</li>
        <li onClick={handleSetOptionSecond}>
          Sản phẩm người lớn/Đồ chơi tình dục
        </li>
        <li onClick={handleSetOptionSecond}>Vật tư y tế khác</li>
        <li onClick={handleSetOptionSecond}>Dịch vụ y tế</li>
      </ul>
      ;
    </>
  );
}
function ThoiTrangNu({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Quần áo phụ nữ</li>
        <li onClick={handleSetOptionSecond}>Giày nữ</li>
        <li onClick={handleSetOptionSecond}>Đồ lót/Lội Y</li>
        <li onClick={handleSetOptionSecond}>Trang sức/Thời trang</li>
      </ul>
      ;
    </>
  );
}

function ThoiTrangNam({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Quần áo nam giới</li>
        <li onClick={handleSetOptionSecond}>Giày nam</li>
        <li onClick={handleSetOptionSecond}>Đồ lót nam</li>
        <li onClick={handleSetOptionSecond}>Đồng hồ/Thắt lưng</li>
      </ul>
      ;
    </>
  );
}
function TuiPhuKien({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Túi xách/Túi nữ</li>
        <li onClick={handleSetOptionSecond}>ZIPPO/Dao quân đội</li>
        <li onClick={handleSetOptionSecond}>Đồng hồ</li>
        <li onClick={handleSetOptionSecond}>Phụ kiện quần áo/Mũ</li>
      </ul>
      ;
    </>
  );
}
function TheThao({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Thể thao/Yoga/Thể dục</li>
        <li onClick={handleSetOptionSecond}>Đồ dùng ngoài trời</li>
        <li onClick={handleSetOptionSecond}>Giày thể thao</li>
        <li onClick={handleSetOptionSecond}>Trang phục thể thao</li>
      </ul>
    </>
  );
}
function DienThoai({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Điện thoại/SmartPhone</li>
        <li onClick={handleSetOptionSecond}>Chợ link kiện điển tử</li>
        <li onClick={handleSetOptionSecond}>Phụ kiện kĩ thuật số</li>
        <li onClick={handleSetOptionSecond}>Thiết bị văn phòng</li>
        <li onClick={handleSetOptionSecond}>Trò chơi điện tử</li>
        <li onClick={handleSetOptionSecond}>Máy ảnh kĩ thuật số</li>
      </ul>
    </>
  );
}
function DoChoiMoHinh({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Phần cứng máy tính</li>
        <li onClick={handleSetOptionSecond}>Máy tính để bàn thương</li>
        <li onClick={handleSetOptionSecond}>Mô hình gundam/mecha</li>
        <li onClick={handleSetOptionSecond}>Dịch vụ cosplay</li>
        <li onClick={handleSetOptionSecond}>Nhân vật/ Gacha</li>
        <li onClick={handleSetOptionSecond}>Cửa hàng trực tuyến</li>
      </ul>
      ;
    </>
  );
}
function DoChoiMeVaBe({ handleSetOptionSecond }) {
  return (
    <>
      <ul className="detail-list">
        <li onClick={handleSetOptionSecond}>Đồ chơi/Xe đẩy em bé</li>
        <li onClick={handleSetOptionSecond}>Quần áo cha me và con cái</li>
        <li onClick={handleSetOptionSecond}>Sản phẩm dánh cho trẻ em</li>
        <li onClick={handleSetOptionSecond}>Giày trẻ em/Giày em bé</li>
        <li onClick={handleSetOptionSecond}>Sản phẩm bà bầu</li>
        <li onClick={handleSetOptionSecond}>Tã/Bỉm/Sửa trẻ em</li>
      </ul>
      ;
    </>
  );
}
export default BoxChoie;
