import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BoxChoie from "./menuProductList/BoxChoie";
import close from "../../assets/icon/close.svg";
import addPhoto from "../../assets/icon/addPhoto.svg";
import addVideo from "../../assets/icon/addVideo.svg";

const MenuProduct = React.memo((handleDisplayBoxChoie) => {
  const [nameProduct, setNameProduct] = useState("");
  const [majorProduct, setMajorProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [displayBoxChoie, setDisplayBoxChoie] = useState(false);
  const [dataSentCompoment, setDataSentCompoment] = useState([]);
  const [renderDataSentCompoment, setRenderDataSentCompoment] = useState("");
  useEffect(() => {
    if (dataSentCompoment[0] !== null && dataSentCompoment[0] !== undefined) {
      setRenderDataSentCompoment(
        `${dataSentCompoment[0]} > ${dataSentCompoment[1]}`
      );
    } else {
      setRenderDataSentCompoment("");
    }
  }, [dataSentCompoment]);

  function handleChangeDataSentCompoment(data) {
    setDataSentCompoment(data);
  }
  function handleDisplayBoxChoie() {
    const fullScreen = document.querySelector(".full-screen");
    if (displayBoxChoie) {
      setDisplayBoxChoie(false);
    } else {
      setDisplayBoxChoie(true);
      fullScreen.style.display = "block";
    }
  }
  function handleChangeNameProduct(e) {
    setNameProduct(e.target.value);
  }
  function handleChangeDescriptionProduct(e) {
    setDescriptionProduct(e.target.value);
  }
  return (
    <>
      <div className="full-screen">
        <div className="position-box-choie">
          {displayBoxChoie ? (
            <BoxChoie
              handleChangeDataSentCompoment={handleChangeDataSentCompoment}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <div className="content-li">
          <div className="add-new-product ">
            <div className="title-content">
              <h4>Thông tin cơ bản</h4>
            </div>
            <div className="list-add-product">
              <div className="add-new-img ">
                <p>*Thêm hình ảnh sản phẩm</p>
                <div className="add-new-img add-img-video">
                  <img src={addPhoto} alt="" />
                  <div>Thêm hình ảnh(0/9)</div>
                </div>
              </div>
              <div className="add-new-video flex">
                <div className="flex">
                  <p>Video sản phẩm</p>
                  <div className="add-new-video add-img-video">
                    <img style={{ marginTop: 5 }} src={addVideo} alt="" />
                    <div>Thêm video</div>
                  </div>
                </div>
                <ul className="list-condition">
                  <li>
                    Kích thước: Tối đa 30Mb, độ phân giải không quá 1280x1280
                  </li>
                  <li>Độ dài: 10s - 60x</li>
                  <li>Định dạng: MP4</li>
                  <li>
                    Lưu ý: sản phẩm có thể hiển thị trong khi video đang xử lí.
                  </li>
                </ul>
              </div>
              <div className="add-new-name flex">
                <div>
                  <p>*Tên sản phẩm</p>
                </div>
                <input
                  type="text"
                  placeholder="Nhập vào"
                  value={nameProduct}
                  onChange={handleChangeNameProduct}
                />
              </div>
              <div className="add-new-major flex">
                <div>
                  <p>*Ngành hàng</p>
                </div>
                <input
                  type="text"
                  placeholder="Chọn ngành hàng"
                  onClick={handleDisplayBoxChoie}
                  value={renderDataSentCompoment}
                  style={{ cursor: "pointer" }}
                  readOnly
                />
              </div>
              <div className="add-new-description flex">
                <div>
                  <p>*Mô tả sản phẩm</p>
                </div>
                <TextareaAutosize
                  style={{ borderRadius: 5, marginLeft: 50 }}
                  minRows={6}
                  maxRows={30}
                  onChange={handleChangeDescriptionProduct}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="add-infor-detail">
          <h4>Thông tin bán hàng</h4>
          <div>
            {/* <p style={{ width: "100%", textAlign: "left" }}>
              Có thể điều chỉnh sau khi chọn ngành hàng
            </p> */}
            <InformationDetail />
          </div>
        </div>

        <div className="add-infor-store">
          <h4>Thông tin bán hàng</h4>
          <div>
            {/* <p style={{ width: "100%", textAlign: "left" }}>
              Có thể điều chỉnh sau khi chọn ngành hàng
            </p> */}
            <InformationSeller />
          </div>
        </div>

        <div className="add-transport">
          <h4>Vận chuyển</h4>
          <div>
            <p style={{ width: "100%", textAlign: "left" }}>
              {/* Có thể điều chỉnh sau khi chọn ngành hàng */}
              <Transport />
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

const InformationDetail = React.memo(() => {
  const [brand, setBrand] = useState("");
  const [meterial, setMeterial] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  function handleChangeBrand(e) {
    setBrand(e.target.value);
  }
  function handleChangeMeterial(e) {
    setMeterial(e.target.value);
  }
  function handleChangeColor(e) {
    setColor(e.target.value);
  }
  function handleChangeSize(e) {
    setSize(e.target.value);
  }
  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }
  function handleChangeWidth(e) {
    setWidth(e.target.value);
  }

  return (
    <>
      <div className=" detail-information flex">
        <div className="left-infor">
          <div className="brand-infor input-detail-infor flex">
            <p>*Thương hiệu</p>
            <input type="text" value={brand} onChange={handleChangeBrand} />
          </div>
          <div className="meterial-infor input-detail-infor flex">
            <p>Chất liệu</p>
            <input
              type="text"
              value={meterial}
              onChange={handleChangeMeterial}
            />
          </div>
          <div className="color-infor input-detail-infor flex">
            <p>Màu sắc</p>
            <input type="text" value={color} onChange={handleChangeColor} />
          </div>
        </div>
        <div className="right-infor">
          <div className="size-infor input-detail-infor flex">
            <p>Kích thước</p>
            <input type="text" value={size} onChange={handleChangeSize} />
          </div>
          <div className="height-infor input-detail-infor flex">
            <p>Chiều dài</p>
            <input type="text" value={height} onChange={handleChangeHeight} />
          </div>
          <div className="width-infor input-detail-infor flex">
            <p>Chiều rộng</p>
            <input type="text" value={width} onChange={handleChangeWidth} />
          </div>
        </div>
      </div>
    </>
  );
});

const InformationSeller = React.memo(() => {
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
            <img src={close} onClick={() => handleDelete(index)} />
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
      <div className="detail-infor">
        {
          // Quan ly state trong React qua 2 component thi khong quan ly duoc
        }
        {statusClassification ? (
          <>
            <div className="classification-product">
              <div className="flex" style={{ justifyContent: "space-between" }}>
                <div style={{ margin: "0 0 20px 50px" }}>
                  Phân loại theo size
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
              <table>
                <tbody>
                  <tr>
                    {boradSize.map((board, index) => (
                      <td key={index}>
                        <input
                          type="checkbox"
                          value={board}
                          onChange={handleChangeCheckBoxSize}
                        />
                        <span>&nbsp;{board}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {boradSize.map((board, index) => (
                      <td key={index} className="img-size-outline">
                        <div className="add-img-video add-img-size">
                          <img src={addPhoto} alt="" />
                          <div>Thêm hình ảnh</div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div style={{ margin: "30px 0 20px 50px" }}>
                Phân loại theo màu sắc
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
            </div>
          </>
        ) : (
          <NotClassification />
        )}
      </div>
    </>
  );
});

const Transport = React.memo(() => {
  const [unitLength, setUnitLength] = useState("");
  const [unitWidth, setUnitWidth] = useState("");
  const [unitHeight, setUnitHeight] = useState("");
  const [checkedTransport, setCheckedTransport] = useState([]);
  function handleChangeUnitLength(e) {
    setUnitLength(e.target.value);
  }
  function handleChangeUnitWidth(e) {
    setUnitWidth(e.target.value);
  }
  function handleChangeUnitHeight(e) {
    setUnitHeight(e.target.value);
  }
  function handleChangeButtonTranSport(e) {
    const value = e.target.value;
    setCheckedTransport((prevState) => {
      if (checkedTransport.includes(value)) {
        return prevState.filter((x) => x !== value);
      } else {
        return [...prevState, value];
      }
    });
  }
  return (
    <>
      <div>
        <div className="over-transport-infor left-over-transport">
          <div className="flex ">
            <div>
              <p>* Cân nặng(Sau khi đóng gói)</p>
            </div>
            <div className="input-transport-infor flex">
              <input
                type="text"
                placeholder="Nhập vào"
                className="unit-relative-cm"
              />
              <span className="unit-cm">gr</span>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>Kích thước đóng gói</p>
            </div>
            <div className="flex">
              <div className="input-transport-infor flex">
                <input
                  type="text"
                  placeholder="Chiều dài"
                  value={unitLength}
                  onChange={handleChangeUnitLength}
                  className="unit-relative-cm"
                />
                <span className="unit-cm">cm</span>
              </div>
              <div className="input-transport-infor flex">
                <input
                  type="text"
                  placeholder="Chiều rộng"
                  value={unitWidth}
                  onChange={handleChangeUnitWidth}
                  className="unit-relative-cm"
                />
                <span className="unit-cm">cm</span>
              </div>
              <div className="input-transport-infor flex">
                <input
                  type="text"
                  placeholder="Chiều cao"
                  value={unitHeight}
                  onChange={handleChangeUnitHeight}
                  className="unit-relative-cm"
                />
                <span className="unit-cm">cm</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>Phí vận chuyển</p>
            </div>
            <div className="cost-transport">
              <div>
                <p
                  style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                >
                  Standard
                </p>
                <div className="flex ">
                  <div className="flex name-transport-infor">
                    <p>Nhanh</p>
                    <span className="uppercase">shophub vận chuyển</span>
                  </div>
                  <div className="flex over-button-value">
                    <p>value Tien</p>
                    <div className="wrapper-button-animation flex">
                      <input
                        type="checkbox"
                        className="switch-toggle-button"
                        value="fast"
                        onChange={handleChangeButtonTranSport}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>Economy</p>
                <div className="flex">
                  <div className="flex name-transport-infor">
                    <p>Tiết kiêm</p>
                    <span className="uppercase">shophub vận chuyển</span>
                  </div>
                  <div className="flex over-button-value">
                    <p>value Tie</p>
                    <div className="wrapper-button-animation flex">
                      <input
                        type="checkbox"
                        className="switch-toggle-button"
                        value="save"
                        onChange={handleChangeButtonTranSport}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

// function OtherInformation() {
//   const RADIOYES = "RADIO YES";
//   const RADIONO = "RADIO NO";
//   const [checked, setChecked] = useState(true);
//   const [productStatus, setProductStatus] = useState("Moi");
//   const [skuProduct, setSkuProduct] = useState("");

//   function handleChangeInput(e) {
//     setChecked((prevState) => {
//       const value = e.target.getAttribute("data-id");
//       if (value === RADIOYES) {
//         return true;
//       }
//       return false;
//     });
//   }
//   function handleChangeSkuProduct(e) {
//     setSkuProduct(e.target.value);
//   }
//   function handleChangeOptionSelect(e) {
//     console.log(e.target.value);
//   }
//   function handleChangeOptionSelectAll() {
//     console.log("length");
//   }
//   return (
//     <>
//       <div className="orther-information">
//         <div>
//           <div className="flex">
//             <p>Hàng đặt trước</p>
//             <div className="flex">
//               <input
//                 type="radio"
//                 data-id={RADIOYES}
//                 checked={checked ? true : false}
//                 onChange={(e) => handleChangeInput(e)}
//               />
//               <span>Không</span>
//             </div>
//             <div className="flex">
//               <input
//                 type="radio"
//                 data-id={RADIONO}
//                 checked={checked ? false : true}
//                 onChange={(e) => handleChangeInput(e)}
//               />
//             </div>
//           </div>
//           <div className="flex">
//             <p>Tình trạng</p>
//             <div>
//               <select
//                 className="select-option-status"
//                 id=""
//                 onChange={handleChangeOptionSelectAll}
//               >
//                 <option
//                   defaultValue="1"
//                   onClick={(e) => handleChangeOptionSelect(e)}
//                 >
//                   Mới
//                 </option>
//                 <option value="0" onClick={(e) => handleChangeOptionSelect(e)}>
//                   Cũ
//                 </option>
//               </select>
//             </div>
//           </div>
//           <div className="flex">
//             <p>SKU sản phẩm</p>
//             <div>
//               <input
//                 type="text"
//                 value={skuProduct}
//                 onChange={handleChangeSkuProduct}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default MenuProduct;
