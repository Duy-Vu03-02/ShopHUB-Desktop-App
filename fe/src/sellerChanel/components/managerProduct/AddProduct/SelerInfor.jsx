import React, { useState, useCallback, useEffect } from "react";
import close from "../../../../assets/icon/close.svg";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import { v4 as uuidv4 } from "uuid";
import Input from "./sellerInfor/Input";
import NotClassification from "./sellerInfor/NotClassification";

const SelerInfor = React.memo(() => {
  const [statusClassification, setStatusClassification] = useState(false);
  const init = {
    key: uuidv4(),
    data: {
      img: "",
      color: "",
      sizes: [
        {
          size: "M",
          total: 0,
          checked: false,
        },
        {
          size: "L",
          total: 0,
          checked: false,
        },
        {
          size: "XL",
          total: 0,
          checked: false,
        },
        {
          size: "XXL",
          total: 0,
          checked: false,
        },
        {
          size: "XXXL",
          total: 0,
          checked: false,
        },
      ],
    },
  };

  const [mainData, setMainData] = useState([init]);
  const [currentMain, setCurrentMain] = useState([{ key: "", data: "" }]);
  const [modData, setModData] = useState({ price: "", sold: "" });

  const handleAddInputList = () => {
    setMainData((prev) => {
      return [...prev, init];
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

  const handleChangeCheckBoxSize = (resize) => {
    // update current
    setCurrentMain((prev) => {
      const updatedSizes = prev.data.map((sizeObj) => {
        if (sizeObj.size === resize) {
          return {
            ...sizeObj,
            checked: !sizeObj.checked,
          };
        }
        return sizeObj;
      });

      return {
        ...prev,
        data: updatedSizes,
      };
    });

    // update main
    setMainData((prev) => {
      return prev.map((item) => {
        if (item.key === currentMain.key) {
          const updatedSizes = item.data.sizes.map((sizeObj) => {
            if (sizeObj.size === resize) {
              return {
                ...sizeObj,
                checked: !sizeObj.checked, // Đảo ngược trạng thái checked
              };
            }
            return sizeObj;
          });

          return {
            ...item,
            data: {
              ...item.data,
              sizes: updatedSizes,
            },
          };
        }
        return item;
      });
    });
  };

  const handleChangeTotal = (e, size) => {
    const newTotal = e.target.value;

    if (newTotal < 0) return;

    // Cập nhật currentMain
    setCurrentMain((prev) => {
      const updatedSizes = prev.data.map((sizeObj) => {
        if (sizeObj.size === size) {
          return {
            ...sizeObj,
            total: newTotal, // Cập nhật total với giá trị mới
          };
        }
        return sizeObj;
      });

      return {
        ...prev,
        data: updatedSizes,
      };
    });

    // Cập nhật mainData
    setMainData((prev) => {
      return prev.map((item) => {
        if (item.key === currentMain.key) {
          const updatedSizes = item.data.sizes.map((sizeObj) => {
            if (sizeObj.size === size) {
              return {
                ...sizeObj,
                total: newTotal, // Cập nhật total với giá trị mới
              };
            }
            return sizeObj;
          });

          return {
            ...item,
            data: {
              ...item.data,
              sizes: updatedSizes,
            },
          };
        }
        return item;
      });
    });
  };

  function handleClassification() {
    setStatusClassification(!statusClassification);
  }

  const handleChangeNotClass = (e) => {
    const { name, value } = e.target;
    setModData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(modData);

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
                      <div
                        key={item.key}
                        style={{
                          border:
                            item.key == currentMain.key
                              ? "1px solid rgb(238, 77, 45)"
                              : undefined,
                        }}
                        onClick={() => {
                          const product = mainData.map((e) => {
                            if (item.key === e.key) return item;
                          });
                          if (product) {
                            setCurrentMain({
                              key: item.key,
                              data: item.data.sizes,
                            });
                          }
                        }}
                      >
                        <Input
                          key={item.key}
                          handleDelete={() => handleDeleteInputList(item.key)}
                          handleChangeData={(value) =>
                            handleChangeMain(value, item.key)
                          }
                          inputData={item.data}
                        />
                      </div>
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
                  {currentMain?.key &&
                    currentMain?.data?.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              onChange={() =>
                                handleChangeCheckBoxSize(item.size)
                              }
                              checked={item.checked}
                            />
                            <span>&nbsp;{item.size}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="img-size-outline">
                            <div
                              className="flex img-input-list "
                              style={{ border: "none", textAlign: "center" }}
                            >
                              <input
                                type="text"
                                placeholder="Số lượng"
                                value={item.checked ? item.total : "Không chọn"}
                                style={{ textAlign: "center" }}
                                min={0}
                                onChange={(e) =>
                                  handleChangeTotal(e, item.size)
                                }
                                disabled={!item.checked}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </>
          ) : (
            <NotClassification
              handleClassification={handleClassification}
              notClassification={modData}
              handleChangeNotClass={handleChangeNotClass}
            />
          )}
        </div>
      </div>
    </>
  );
});

export default SelerInfor;
