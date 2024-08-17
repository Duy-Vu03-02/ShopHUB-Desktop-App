import React, { useState, useCallback, useEffect } from "react";
import close from "../../../../assets/icon/close.svg";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import { v4 as uuidv4 } from "uuid";

const Input = React.memo(({ handleDelete, inputData, handleChangeData }) => {
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        return handleChangeData({
          img: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(name, value);
    handleChangeData({
      [name]: value,
    });
  }, []);

  return (
    <>
      <div className="input-list-outline" style={{ marginBottom: 0 }}>
        <div className="flex img-input-list" style={{ marginBottom: 0 }}>
          <input
            type="text"
            value={inputData.color}
            onChange={handleChange}
            name="color"
          />
          <img src={close} onClick={handleDelete} />
        </div>
        <div
          className="add-img-video classification-img"
          style={{ margin: "10px auto" }}
        >
          {!inputData?.img ? (
            <div style={{ position: "relative" }}>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "65px",
                  width: "65px",
                  cursor: "pointer",
                }}
                name="img"
                onChange={handleImageChange}
              />
              <img src={addPhoto} alt="" />
              <div>Thêm hình ảnh</div>
            </div>
          ) : (
            <div style={{ position: "relative" }}>
              <div
                className="img-input-list"
                style={{ marginBottom: 0, border: "none" }}
                onClick={handleDelete}
              >
                <img
                  src={close}
                  alt="Remove"
                  style={{
                    top: "3px",
                    right: "3px",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    border: "none",
                  }}
                />
              </div>
              <img
                src={inputData.img}
                alt="Uploaded"
                style={{
                  width: "65px",
                  height: "65px",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

const NotClassification = React.memo(({ handleClassification }) => {
  const [price, setPrice] = useState("");
  const [sold, setSold] = useState("");

  function handleChangePrice(e) {
    setPrice(e.target.value);
  }
  function handleChangeSold(e) {
    setSold(e.target.value);
  }

  return (
    <>
      <div className="not-classification">
        <div className="classification-infor input-detail-infor flex">
          <p>Phân loại hàng</p>
          <button
            className="flex display-button-classfication"
            style={{
              paddingLeft: 5,
              marginLeft: 50,
              width: 160,
              height: 40,
            }}
            onClick={handleClassification}
          >
            <span style={{ fontSize: 35, fontWeight: 200, margin: "auto" }}>
              +
            </span>
            <p
              style={{
                margin: "auto",
                marginLeft: 0,
                textAlign: "left",
                width: 150,
                lineHeight: 0,
              }}
            >
              &nbsp;Thêm nhóm phân loại
            </p>
          </button>
        </div>
        <div className="price-infor input-detail-infor flex">
          <p>*Giá</p>
          <input type="text" value={price} onChange={handleChangePrice} />
        </div>
        <div className="sold-infor input-detail-infor flex">
          <p>*Kho hàng</p>
          <input type="text" value={sold} onChange={handleChangeSold} />
        </div>
      </div>
    </>
  );
});

const SelerInfor = React.memo(() => {
  const boradSize = ["M", "L", "XL", "XXL", "XXXL"];
  const [statusClassification, setStatusClassification] = useState(false);
  const [colorData, setColorData] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);

  const handleSendColorData = (data) => {
    setColorData((prev) => {
      const check = prev.some((item) => item.id === data.id);
      if (check) {
        return prev.filter((item) => item !== data);
      } else {
        return [...prev, data];
      }
    });
  };

  const [mainData, setMainData] = useState([
    {
      key: uuidv4(),
      data: {
        img: "",
        color: "",
      },
    },
  ]);
  const [modData, setModData] = useState();

  // console.log(mainData);

  const handleAddInputList = () => {
    setMainData((prev) => {
      return [...prev, { key: uuidv4(), img: "", color: "" }];
    });
  };

  const handleDeleteInputList = (valueKey) => {
    setMainData((prevState) => {
      return prevState.filter((x) => {
        return x.key != valueKey;
      });
    });
  };

  const handleChangeMain = (value, id) => {
    console.log(value);
    console.log(id);
    setMainData((prev) => {
      return prev.map((item) => {
        if (item.key == id) {
          return {
            ...item,
            data: {
              ...item.data,
              ...value,
            },
          };
        }
        return item;
      });
    });
  };

  function handleChangeCheckBoxSize(e) {
    const value = e.target.value;
    setCheckedSize((prevState) => {
      if (checkedSize.includes(value)) {
        return prevState.filter((x) => x !== value);
      } else {
        return [...prevState, value];
      }
    });
  }

  function handleClassification() {
    statusClassification
      ? setStatusClassification(false)
      : setStatusClassification(true);
  }

  return (
    <>
      <div className="add-infor-store">
        <h4>Thông tin bán hàng</h4>

        <div className="detail-infor">
          {statusClassification ? (
            <>
              <div className="classification-product">
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ margin: "0 0 20px 50px" }}>
                    Phân loại theo màu sắc
                  </div>
                  <div style={{ float: "rigth" }}>
                    <img
                      src={close}
                      alt=""
                      className="img-close"
                      onClick={handleClassification}
                    />
                  </div>
                </div>
                <div
                  className="flex all-classification-color"
                  style={{ marginBottom: 0 }}
                >
                  <div
                    className="flex list-img-type"
                    style={{
                      maxWidth: "700px",
                      overflowX: "auto",
                      overflowY: "hidden",
                    }}
                  >
                    {mainData.map((item) => (
                      <Input
                        key={item.key}
                        handleDelete={() => handleDeleteInputList(item.key)}
                        handleChangeData={(value) =>
                          handleChangeMain(value, item.key)
                        }
                        inputData={item.data}
                      />
                    ))}
                  </div>
                  <div className="add-classification-color">
                    <button onClick={handleAddInputList}>
                      <div
                        className="text-content-button"
                        style={{ marginBottom: 0, color: "#ee4d2d" }}
                      >
                        <div className="plus-add-classification">+</div>
                        Thêm một phân loại
                      </div>
                    </button>
                  </div>
                </div>
                <div style={{ margin: "30px 0 20px 50px" }}>
                  Phân loại theo size
                </div>

                <table style={{ display: "flex", justifyContent: "center" }}>
                  {boradSize.map((board, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            value={board}
                            onChange={handleChangeCheckBoxSize}
                          />
                          <span>&nbsp;{board}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="img-size-outline">
                          <div
                            className="flex img-input-list "
                            style={{ border: "none" }}
                          >
                            <input type="text" placeholder="Số lượng" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </>
          ) : (
            <NotClassification handleClassification={handleClassification} />
          )}
        </div>
      </div>
    </>
  );
});

export default SelerInfor;
