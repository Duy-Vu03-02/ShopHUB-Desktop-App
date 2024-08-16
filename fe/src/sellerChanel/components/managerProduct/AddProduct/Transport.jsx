import React, { useEffect, useState } from "react";

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
      <div className="add-transport">
        <h4>Vận chuyển</h4>
        <div>
          <p style={{ width: "100%", textAlign: "left" }}></p>
        </div>
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
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
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
      </div>
    </>
  );
});

export default Transport;
