import React, { useEffect, useContext, useState } from "react";
import RenderProducts from "../product/RenderProducts";
import { useApolloClient } from "@apollo/client";
import { top8Product } from "../../graphQL/query";
import { ProductContext } from "../../context/productContext";

export default function HomeType() {
  const client = useApolloClient();
  const { setListProducts } = useContext(ProductContext);
  const [productFetch, setProductFetch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data, errors } = await client.query({
          query: top8Product,
        });

        if (errors) {
          console.error(errors);
        } else if (data.top8Product.length > 0) {
          setListProducts((prevState) => {
            return [...prevState, ...data.top8Product];
          });
          setProductFetch(data.top8Product);
        }
        return;
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const option = [
    {
      id: 1,
      content: "Cuộc sống gia đình",
      children: [
        "Công cụ phần cứng",
        "Nội thất nhà ở",
        "Bồ đồ ăn",
        "Vải nhà",
        "Nguồn ánh sáng trang trí nhà cửa",
        "Trang trí nhà cửa<",
      ],
    },
    {
      id: 2,
      content: "Thời trang nữ/ Giày nữ",
      children: [
        "Quần áo phụ nữ",
        "Giày nữ",
        "Đồ lót/Lội Y",
        "Trang sức/Trang sức thời trang",
      ],
    },
    {
      id: 3,
      content: "Thời trang nam/ Giày nam",
      children: [
        "Quần áo nam giới",
        "Giày nam",
        "Đồ lót nam",
        "Trang sức/Đồng hồ/Thắt lưng",
      ],
    },
    {
      id: 4,
      content: "Túi/ Phụ kiện",
      children: [
        "Túi xách/Túi nữ/Túi nam",
        "ZIPPO/Dao quân đội/Kính",
        "Đồng hồ",
        "Phụ kiện quần áo/Mũ/Khăn quàng cổ",
      ],
    },
    {
      id: 5,
      content: "Thể thao ngoài trời",
      children: [
        "Thể thao/Yoga/Thể dục/Đồ dùng cho quạt",
        "Đồ dùng ngoài trời/Leo núi/Cắm trại/Du lịch",
        "Giày thể thao",
        "Trang phục thể thao/Trang phục thường ngày",
      ],
    },
    {
      id: 6,
      content: "Điện thoại thông minh",
      children: [
        "Điện thoại/SmartPhone/Tablet/IPad",
        "Chợ link kiện điển tử",
        "Phụ kiện kĩ thuật số",
        "Thiết bị văn phòng/Vật tư tiêu hao/Dịch vụ liên quan",
        "Trò chơi điện tử/Phụ kiện/Trò chơi/Chiến lược",
        "Máy ảnh kĩ thuật số/Máy ảnh SLR/Máy quay video",
      ],
    },
    {
      id: 7,
      content: "Đồ chơi/ Mô hình",
      children: [
        "Phần cứng máy tính/Màn hình/Thiết bị ngoại vi",
        "Máy tính để bàn thương hiệu/Máy tính",
        "Mô hình gundam/mecha/robot/Biến hình",
        "Quần áo/Đạo cụ/Dịch vụ cosplay",
        "Nhân vật/ Gacha/Búp bê/BJD/Lính",
        "Cửa hàng trực tuyến/Dịch vụ trực tuyến/Phần mềm",
      ],
    },
    {
      id: 8,
      content: "Đồ chơi/ Mẹ và bé",
      children: [
        "Đồ chơi/Xe đẩy em bé/Câu đố/Khối xây dựng/Mô hình",
        "Quần áo trẻ em/Quần áo cha me và con cái",
        "Sản phẩm dánh cho trẻ em",
        "Giày trẻ em/Giày em bé/Giày cha mẹ và con cái",
        "Quần áo bà bầu/Sản phẩm bà bầu/dinh dưỡng",
        "Tã/Bỉm/Sửa trẻ em",
      ],
    },
    {
      id: 9,
      content: "Ô tô/ Xe máy/ Xe đạp",
      children: [
        "Xe máy/Thiết bị/Phụ kiện",
        "Ô tô/Thiết bị/Phụ kiện",
        "Vật tư ô tô/Điện tử/Làm sạch/Sửa đổi",
        "Phụ tùng ô tô/Bảo trì/Làm đẹp/ Bảo trì",
        "Hàng hóa ảo",
      ],
    },
    {
      id: 10,
      content: "Thiết bị gia dụng",
      children: [
        "Dụng cụ nhà bếp",
        "Thiết bị gia đình",
        "Thiết bị chính",
        "Chăm sóc cá nhân/Sức khỏe/Thiết bị massage",
        "Vệ sinh/Thực phẩm/Thiết bị thương mại",
      ],
    },
    {
      id: 11,
      content: "Chăm sóc sắc đẹp",
      children: [
        "Dụng cụ trang điểm/Nước hoa/Làm đẹp",
        "Làm đẹp và chăm socs da/Cơ thể/Tinh dầu",
        "Chất tẩy rửa/ Băng vệ sinh/Giấy/Dầu thơm",
        "Thiết bị làm đẹp và cơ thể",
        "Chăm sóc tóc/ tóc giả",
        "Chăm sóc răng miệng",
      ],
    },
    {
      id: 12,
      content: "Đồ ăn nhẹ và đồ uống",
      children: [
        "Đồ ăn nhẹ/Các loại hạt/Đặc sản",
        "Trà",
        "Cà phê/Ngũ cốc/Đồ uống",
        "Thực phẩm sức khỏe/Thực phẩm bổ sung dinh dưỡng",
        "Gia vị ngũ cốc và dầu/Thức ăn nhanh/Đồ khô/Nướng",
        "Bổ sung dinh dưỡng truyền thống",
      ],
    },
    {
      id: 13,
      content: "Y học và sức khỏe",
      children: [
        "Dụng cụ y tế",
        "Sản phẩm người lớn/Đồ chơi tình dục",
        "Vật tư y tế khác",
        "Dịch vụ y tế",
      ],
    },
  ];
  return (
    <div className="home_type">
      <div className="home_name_type">
        <h3>Phân loại</h3>
      </div>
      <div className="home_content">
        <div className="home_optinal_type" style={{ minWidth: "230px" }}>
          <ul>
            {option.map((element, index) => (
              <li key={index}>
                <div className="home_type_detail">
                  <p>{element.content}</p>
                  <span className="home_icon_small">&gt;</span>
                  <ul className="home_detail_list">
                    {element.children.map((item, z) => (
                      <li key={z}>{item}</li>
                    ))}
                    <hr />
                    <div className="home_like">
                      <RenderProducts data={productFetch} />
                    </div>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {productFetch && (
          <div className="home_default">
            <RenderProducts data={productFetch} />
          </div>
        )}
      </div>
    </div>
  );
}
