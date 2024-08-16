import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BoxChoie from "../BoxChoie";
import addPhoto from "../../../../assets/icon/addPhoto.svg";
import addVideo from "../../../../assets/icon/addVideo.svg";

const BasicInfor = React.memo(() => {
  const [nameProduct, setNameProduct] = useState("");
  const [majorProduct, setMajorProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [displayBoxChoie, setDisplayBoxChoie] = useState(false);
  const [dataSentCompoment, setDataSentCompoment] = useState([]);
  const [renderDataSentCompoment, setRenderDataSentCompoment] = useState("");

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
                <div>Thêm hình ảnh(0/8)</div>
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
    </>
  );
});

export default BasicInfor;
