import React, { useCallback } from "react";
import close from "../../../../../assets/icon/close.svg";
import addPhoto from "../../../../../assets/icon/addPhoto.svg";

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

export default Input;
