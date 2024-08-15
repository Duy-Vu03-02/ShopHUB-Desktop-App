import React from "react";
import addPhoto from "../assets/icon/addPhoto.svg";

function Test() {
  const size = ["S", "M", "L", "XL", "2XL", "3XL"];
  const imgElement = document.querySelectorAll(".img-size-outline");
  imgElement.forEach((x) => (x.style.display = "none"));
  function handleChangeCheckBox(e) {
    console.log(e.target.getAttribute("data-id"));
  }

  return (
    <>
      <div style={{ margin: 30 }}>
        <table>
          <tbody>
            <tr>
              {size.map((data, index) => (
                <td key={index}>
                  <input
                    type="checkbox"
                    value={index}
                    data-id={index}
                    onChange={(e) => handleChangeCheckBox(e)}
                  />
                  <span>&nbsp;{data}</span>
                </td>
              ))}
            </tr>
            <tr>
              {size.map((data, index) => (
                <td key={index} data-id={index} className="img-size-outline">
                  <div className="add-img-video add-img-size">
                    <img src={addPhoto} alt="" />
                    <div>Them hinh anh</div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Test;
