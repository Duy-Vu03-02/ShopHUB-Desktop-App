import React, { useEffect, useState } from "react";
import BasicInfor from "./AddProduct/BasicInfor";
import ProductInfor from "./AddProduct/ProductInfor";
import Transport from "./AddProduct/Transport";
import SelerInfor from "./AddProduct/SelerInfor";

const AddProduct = React.memo(() => {
  return (
    <>
      <div>
        <BasicInfor />
        <ProductInfor />
        <SelerInfor />
        <Transport />

        <div className="btn-add-product">
          <button
            style={{
              margin: " auto auto 10px auto",
              padding: "12px 30px",
              display: "block",
            }}
          >
            Thêm sản phẩm
          </button>
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

export default AddProduct;
