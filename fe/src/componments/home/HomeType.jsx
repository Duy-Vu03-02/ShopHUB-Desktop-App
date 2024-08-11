import React from "react";
import set1 from "../../assets/product/set1.avif";
import set2 from "../../assets/product/set2.avif";
import set3 from "../../assets/product/set3.avif";
import set4 from "../../assets/product/set4.avif";
import set5 from "../../assets/product/set5.avif";
import set6 from "../../assets/product/set6.avif";
import set7 from "../../assets/product/set7.avif";
import set8 from "../../assets/product/set8.avif";
import set9 from "../../assets/product/set9.avif";
import set10 from "../../assets/product/set10.avif";
import flyers from "../../assets/product/flyers.avif";

export default function HomeType() {
  const data1 = {
    id: set1,
    description: "Đầm cổ vuông thiết kế hình nấm cổ tích",
    price: "380. 000",
    sold: 257,
  };
  const data2 = {
    id: set2,
    description: "Cô gái Mỏi may mắn nhỏ bé có khí chất",
    price: "570. 000",
    sold: 583,
  };
  const data3 = {
    id: set3,
    description: "Mới thời trang phong cách Hepby",
    price: "560. 000",
    sold: 879,
  };
  const data4 = {
    id: set4,
    description: "Váy trắng cổ xanh hải quân cho nữ",
    price: "280. 000",
    sold: 217,
  };
  const data5 = {
    id: set5,
    description: "Disney trang phục Pháp tình yêu đầu tiên",
    price: "780. 000",
    sold: 503,
  };
  const data6 = {
    id: set6,
    description: "Đầm Pháp nhỏ Puff Puff",
    price: "980. 000",
    sold: 808,
  };
  const data7 = {
    id: set7,
    description: "Đầm nữ mùa hè tay phồng",
    price: "380. 000",
    sold: 257,
  };
  const data8 = {
    id: set8,
    description: "Bộ đồ màu đen kiểu Pháp Hepburn",
    price: "380. 000",
    sold: 257,
  };
  const data9 = {
    id: set9,
    description: "Plus size nữ phong cách Hàn Quốc ",
    price: "380. 000",
    sold: 257,
  };
  const data10 = {
    id: set10,
    description: "Thời trang giản dị mùa thu",
    price: "380. 000",
    sold: 257,
  };

  const sets = [data1, data2, data3, data4];
  const sets1 = [data5, data6, data7, data8];
  const sets5 = [data2, data3, data4];
  const sets3 = [data5, data6, data7];
  const sets4 = [data1, data2, data8];
  const products1 = [...sets, data9];
  const products2 = [...sets1, data10];
  const empty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
      <h3 className="home_name_type">Phân loại</h3>
      <div className="home_content">
        <div className="home_optinal_type">
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
                      <div className="home_default home_likes">
                        <ul>
                          {sets3.map((set, index) => (
                            <li key={index}>
                              <img src={set.id} alt="product" />
                              <p className="home_desription">
                                {set.description}
                              </p>
                              <br />
                              <div className="home_sub">
                                <p className="home_price">${set.price}</p>
                                <p className="hone_slod">Đã bán {set.sold}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <ul>
                          {sets3.map((set, index) => (
                            <li key={index}>
                              <img src={set.id} alt="product" />
                              <p className="home_desription">
                                {set.description}
                              </p>
                              <br />
                              <div className="home_sub">
                                <p className="home_price">${set.price}</p>
                                <p className="hone_slod">Đã bán {set.sold}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="home_default">
          <ul>
            {sets.map((set, index) => (
              <li key={index}>
                <img src={set.id} alt="product" />
                <p className="home_desription">{set.description}</p>
                <br />
                <div className="home_sub">
                  <p className="home_price">${set.price}</p>
                  <p className="hone_slod">Đã bán {set.sold}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {sets1.map((set, index) => (
              <li key={index}>
                <img src={set.id} alt="product" />
                <p className="home_desription">{set.description}</p>
                <br />
                <div className="home_sub">
                  <p className="home_price">${set.price}</p>
                  <p className="hone_slod">Đã bán {set.sold}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
