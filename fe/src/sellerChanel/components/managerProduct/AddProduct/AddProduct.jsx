import React, { useContext } from "react";
import axios from "axios";
import { useApolloClient } from "@apollo/client";
import { SellerContext } from "../../../context/sellerContext";
import { createProduct } from "../../../../graphQL/sellerChanel/query";
import BasicInfor from "./BasicInfor";
import ProductInfor from "./ProductInfor";
import Transport from "./Transport";
import SelerInfor from "./SelerInfor";

const AddProduct = React.memo(() => {
  const { addProduct } = useContext(SellerContext);
  const client = useApolloClient();

  const handleCreateProduct = async () => {
    try {
      const form = new FormData();
      const imgFileBasic = addProduct.description?.imgsFile;
      const imgFileSeller = addProduct?.quantity?.map(
        (item) => item.data.imgFile
      );
      for (let i = 0; i < imgFileBasic?.length; i++) {
        form.append("file-imgs", imgFileBasic[i]);
      }
      for (let i = 0; i < imgFileSeller?.length; i++) {
        form.append("file-imgs", imgFileSeller[i]);
      }

      const res = await axios.post("http://localhost:8080/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        const dataPath = res.data.map((item) => item.path);

        const dataSend = {
          idShop: "66b9c0163157a3dc7c66516e",
          type: addProduct.type,
          name: addProduct.name,
          description: {
            ...addProduct.description,
            imgs: dataPath
              .map((item, index) => {
                if (index < imgFileBasic.length) {
                  return item;
                }
              })
              .filter((item) => item !== undefined),
          },
          price: addProduct.price,
          quantity: addProduct.quantity
            .map((item, index) => {
              const result = {
                color: item.data.color,
                images: [dataPath[index + imgFileBasic.length]],
                sizes: item.data.sizes
                  .map((e) => {
                    if (e.checked) {
                      return { size: e.size, total: e.total };
                    }
                    return;
                  })
                  .filter((item) => item !== undefined),
              };
              return result;
            })
            .filter((item) => item.color.trim() !== ""),
        };
        delete dataSend.description.imgsFile;

        console.log(dataSend);
        const { data, errors } = await client.mutate({
          mutation: createProduct,
          variables: { ...dataSend },
        });

        if (errors) {
          console.error(errors);
          return;
        }

        if (data.createProduct) {
          console.log(data.createProduct);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <BasicInfor />
        <ProductInfor />
        <SelerInfor />
        <Transport />

        <div className="btn-add-product">
          <button
            onClick={handleCreateProduct}
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
