import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BoxChoie from "./BoxChoie";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import addVideo from "../../../../assets/icon/addVideo.svg";
import close from "../../../../assets/icon/close.svg";
import { v4 as uuidv4 } from "uuid";
import { SellerContext } from "../../../context/sellerContext";

const BasicInfor = React.memo(() => {
  const { setAddProduct, addProduct, imgs, setImgs } =
    useContext(SellerContext);
  const [displayBoxChoie, setDisplayBoxChoie] = useState(false);
  const [stateAddImg, setStateAddImg] = useState(true);

  const handleChangeDataSentCompoment = (data) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        type: data,
      };
    });
  };

  const handleDisplayBoxChoie = () => {
    const fullScreen = document.querySelector(".full-screen");
    if (displayBoxChoie) {
      setDisplayBoxChoie(false);
    } else {
      setDisplayBoxChoie(true);
      fullScreen.style.display = "block";
    }
  };

  const handleChangeNameProduct = (e) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  const handleChangeDescriptionProduct = (e) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        description: {
          ...prev.description,
          content: e.target.value,
        },
      };
    });
  };

  const handleImageChange = async (e) => {
    const files = e.target.files;

    if (files.length > 6) {
      setStateAddImg(false);
      setAddProduct((prev) => {
        return {
          ...prev,
          description: {
            ...prev.description,
            imgs: [],
          },
        };
      });
      return;
    }

    try {
      const fileArray = Array.from(files);

      const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
          resolve({ img: URL.createObjectURL(file), id: uuidv4() });
          reject(new Error("File reading error"));
        });
      };

      const imgUrls = await Promise.all(fileArray.map(readFileAsDataURL));

      setAddProduct((prev) => {
        return {
          ...prev,
          description: {
            ...prev.description,
            imgs: imgUrls,
            imgsFile: files,
          },
        };
      });
      setImgs(files);
      setStateAddImg(true);
    } catch (err) {
      console.error(err);
      setStateAddImg(false);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAddProduct((prev) => {
        return {
          ...prev,
          video: URL.createObjectURL(file),
        };
      });
    }
  };

  const handleDelImgAdd = (id) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        description: {
          ...prev.description,
          imgs: prev.description.imgs.filter((item) => {
            return item.id !== id;
          }),
        },
      };
    });
  };

  const handleDelVideo = () => {
    setAddProduct((prev) => {
      return {
        ...prev,
        video: false,
      };
    });
  };

  return (
    <>
      {addPhoto && (
        <>
          <div className="full-screen" style={{ zIndex: 10000 }}>
            <div className="position-box-choie">
              {displayBoxChoie && (
                <BoxChoie
                  handleChangeDataSentCompoment={handleChangeDataSentCompoment}
                />
              )}
            </div>
          </div>
          <div className="content-li">
            <div className="add-new-product">
              <div className="title-content">
                <h4>Thông tin cơ bản</h4>
              </div>
              <div className="list-add-product">
                <div className="add-new-img">
                  <p>*Thêm hình ảnh sản phẩm</p>
                  <div style={{ display: "inline-flex" }}>
                    {addProduct.description?.imgs?.length < 6 && (
                      <div
                        className="add-new-img add-img-video"
                        style={{ position: "relative", marginRight: "10px" }}
                      >
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
                          onChange={handleImageChange}
                          multiple
                        />
                        <img src={addPhoto} alt="Add" />
                        <div>
                          Thêm hình ảnh({addProduct.description?.imgs?.length}
                          /6)
                        </div>
                        {!stateAddImg && (
                          <div className="flex" style={{ width: "200px" }}>
                            Chỉ được thêm tối đa 6 ảnh
                          </div>
                        )}
                      </div>
                    )}
                    {addProduct.description?.imgs?.length > 0 && (
                      <div
                        className="flex list-img-add"
                        style={{
                          marginLeft:
                            addProduct.description?.imgs?.length === 6
                              ? "300px"
                              : undefined,
                        }}
                      >
                        {addProduct.description?.imgs?.map((item, index) => (
                          <div key={index} style={{ position: "relative" }}>
                            <div
                              className="img-input-list"
                              style={{ marginBottom: 0, border: "none" }}
                              onClick={() => handleDelImgAdd(item.id)}
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
                            <img src={item.img} alt="Uploaded" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="add-new-video flex">
                  <div className="flex">
                    <p>Video sản phẩm</p>
                    <div
                      className="add-new-video add-img-video"
                      style={{ position: "relative", zIndex: 0 }}
                    >
                      {!addProduct?.video ? (
                        <div>
                          <input
                            type="file"
                            id="videoInput"
                            accept="video/*"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              top: 0,
                              left: 0,
                              height: "65px",
                              width: "65px",
                              cursor: "pointer",
                              zIndex: 2,
                            }}
                            onChange={handleVideoChange}
                          />
                          <img
                            style={{ marginTop: 5 }}
                            src={addVideo}
                            alt="Add Video"
                          />
                          <div>Thêm video</div>
                        </div>
                      ) : (
                        <div style={{ position: "relative" }}>
                          <div
                            className="img-input-list"
                            style={{
                              marginBottom: 0,
                              border: "none",
                            }}
                            onClick={handleDelVideo}
                          >
                            <img
                              src={close}
                              alt="Remove"
                              style={{
                                top: "3px",
                                zIndex: 100,
                                right: "3px",
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                                border: "none",
                              }}
                            />
                          </div>
                          <video
                            src={addProduct?.video}
                            style={{ width: "65px", height: "65px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="list-condition">
                    <li>
                      Kích thước: Tối đa 30Mb, độ phân giải không quá 1280x1280
                    </li>
                    <li>Độ dài: 10s - 60s</li>
                    <li>Định dạng: MP4</li>
                    <li>
                      Lưu ý: sản phẩm có thể hiển thị trong khi video đang xử
                      lí.
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
                    value={addProduct?.name}
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
                    value={addProduct?.type}
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
                    value={addProduct.description?.content}
                    onChange={handleChangeDescriptionProduct}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default BasicInfor;
