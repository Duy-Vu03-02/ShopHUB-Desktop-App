import React, { useState, useContext } from "react";
import close from "../../../../assets/icon/close.svg";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import { v4 as uuidv4 } from "uuid";
import Input from "./sellerInfor/Input";
import NotClassification from "./sellerInfor/NotClassification";
import { SellerContext } from "../../../context/sellerContext";

const SelerInfor = React.memo(() => {
  const { setAddProduct, addProduct, shopData } = useContext(SellerContext);

  const [statusClassification, setStatusClassification] = useState(false);
  const init = {
    key: uuidv4(),
    data: {
      img: "",
      color: "",
      sizes: [
        {
          size: "S",
          total: 1,
          checked: false,
        },
        {
          size: "M",
          total: 1,
          checked: false,
        },
        {
          size: "L",
          total: 1,
          checked: false,
        },
        {
          size: "XL",
          total: 1,
          checked: false,
        },
        {
          size: "XXL",
          total: 1,
          checked: false,
        },
        {
          size: "XXXL",
          total: 1,
          checked: false,
        },
      ],
    },
  };

  const [mainData, setMainData] = useState([init]);
  const [currentMain, setCurrentMain] = useState([{ key: "", data: "" }]);
  const [modData, setModData] = useState({ price: "", totalProduct: "" });

  const handleAddInputList = () => {
    setAddProduct((prev) => {
      return {
        ...prev,
        quantity: [...prev.quantity, init],
      };
    });
  };

  const handleDeleteInputList = (valueKey) => {
    setAddProduct((prevState) => {
      return {
        ...prevState,
        quantity: prevState.quantity.filter((x) => {
          return x.key != valueKey;
        }),
      };
    });
  };

  const handleChangeMain = (value, id) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity.map((item) => {
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
        }),
      };
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
    setAddProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity.map((item) => {
          if (item.key === currentMain.key) {
            const updatedSizes = item.data.sizes.map((sizeObj) => {
              if (sizeObj.size === resize) {
                return {
                  ...sizeObj,
                  checked: !sizeObj.checked,
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
        }),
      };
    });
  };

  const handleChangeTotal = (e, size) => {
    const newTotal = e.target.value;

    if (newTotal < 0 || parseInt(newTotal) < 0) return;

    // Cập nhật currentMain
    setCurrentMain((prev) => {
      const updatedSizes = prev.data.map((sizeObj) => {
        if (sizeObj.size === size) {
          return {
            ...sizeObj,
            total:
              newTotal.trim() === ""
                ? ""
                : parseInt(newTotal) > 99999999
                ? 99999999
                : parseInt(newTotal),
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
    setAddProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity.map((item) => {
          if (item.key === currentMain.key) {
            const updatedSizes = item.data.sizes.map((sizeObj) => {
              if (sizeObj.size === size) {
                return {
                  ...sizeObj,
                  total:
                    newTotal.trim() === ""
                      ? ""
                      : parseInt(newTotal) > 99999999
                      ? 99999999
                      : parseInt(newTotal),
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
        }),
      };
    });
  };

  function handleClassification() {
    setStatusClassification(!statusClassification);
  }

  const handleChangeNotClass = (e) => {
    try {
      const { name, value } = e.target;
      if (value < 0 || parseInt(value) < 0) {
        return;
      }
      setAddProduct((prev) => {
        return {
          ...prev,
          [name]:
            value.trim() === ""
              ? ""
              : parseInt(value) > 99999999
              ? 99999999
              : parseInt(value),
        };
      });
    } catch (err) {
      console.error(err);
      return;
    }
  };

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
                    {addProduct.quantity.map((item) => (
                      <div
                        key={item.key}
                        style={{
                          border:
                            item.key == currentMain.key
                              ? "1px solid rgb(238, 77, 45)"
                              : undefined,
                        }}
                        onClick={() => {
                          const product = addProduct.quantity.map((e) => {
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
              notClassification={{
                price: addProduct.price,
                totalProduct: addProduct.totalProduct,
              }}
              handleChangeNotClass={handleChangeNotClass}
            />
          )}
        </div>
      </div>
    </>
  );
});

export default SelerInfor;
