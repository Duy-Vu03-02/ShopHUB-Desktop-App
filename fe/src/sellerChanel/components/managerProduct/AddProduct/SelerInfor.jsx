import React, { useState } from "react";
import close from "../../../../assets/icon/close.svg";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import { IoMdClose } from "react-icons/io";

const SelerInfor = React.memo(() => {
  function Input({ handleDelete, index }) {
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (e) => {
      setInputValue(e.target.value);
    };
    return (
      <>
        <div className="input-list-outline" style={{ marginBottom: 0 }}>
          <div className="flex img-input-list" style={{ marginBottom: 0 }}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChangeInputValue}
            />
            <img src={close} />
          </div>
          <div
            className="add-img-video classification-img"
            style={{ margin: "10px auto" }}
          >
            <img src={addPhoto} alt="" />
            <div>Thêm hình ảnh</div>
          </div>
        </div>
      </>
    );
  }

  function NotClassification() {
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
  }

  const boradSize = ["M", "L", "XL", "XXL", "XXXL"];
  const [statusClassification, setStatusClassification] = useState(false);
  const [checkedColor, setCheckedColor] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [price, setPrice] = useState("");
  const [sold, setSold] = useState("");
  const [inputList, setInputList] = useState([
    <Input key={0} index={0} handleDelete={handleDeleteInputList} />,
  ]);

  function handleAddInputList() {
    if (inputList.length <= 4) {
      setInputList((prevState) => {
        return [
          ...prevState,
          <Input
            key={inputList.length}
            index={inputList.length}
            handleDelete={handleDeleteInputList}
          />,
        ];
      });

      if (inputList.length + 1 > 4) {
        const elementButtonAdd = document.querySelector(
          ".add-classification-color"
        );
        if (elementButtonAdd) {
          elementButtonAdd.style.display = "none";
        }
      }
    }
  }

  function handleDeleteInputList(valueKey) {
    if (inputList.length >= valueKey) {
      setInputList((prevState) => {
        return prevState.filter((x) => x.key != valueKey);
      });
      const elementButtonAdd = document.querySelector(
        ".add-classification-color"
      );
      if (elementButtonAdd) {
        elementButtonAdd.style.display = "flex";
      }
    }
  }

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
  function handleChangePrice(e) {
    setPrice(e.target.value);
  }
  function handleChangeSold(e) {
    setSold(e.target.value);
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
                  <div className="flex">{inputList}</div>
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

                <table>
                  <tbody style={{ display: "flex" }}>
                    {boradSize.map((board, index) => (
                      <div key={index}>
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
                      </div>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <NotClassification />
          )}
        </div>
      </div>
    </>
  );
});

export default SelerInfor;
