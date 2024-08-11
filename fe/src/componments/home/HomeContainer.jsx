import React from "react";
import "../../resources/home.css";
import button_back from "../../assets/home/button_back.png";
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

function HomeContainer() {
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
  return (
    <>
      <div className="home_container_type">
        <div className="home_type">
          <h3 className="home_name_type">Phân loại</h3>
          <div className="home_content">
            <div className="home_optinal_type">
              <div className="home_type_detail">
                <p>Cuộc sống gia đình</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Công cụ phần cứng</li>
                  <li>Nội thất nhà ở</li>
                  <li>Bồ đồ ăn</li>
                  <li>Vải nhà</li>
                  <li>Nguồn ánh sáng trang trí nhà cửa</li>
                  <li>Trang trí nhà cửa</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Thời trang nữ/ Giày nữ</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Quần áo phụ nữ</li>
                  <li>Giày nữ</li>
                  <li>Đồ lót/Lội Y</li>
                  <li>Trang sức/Trang sức thời trang</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets5.map((set, index) => (
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
                        {sets4.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Thời trang nam/ Giày nam</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Quần áo nam giới</li>
                  <li>Giày nam</li>
                  <li>Đồ lót nam</li>
                  <li>Trang sức/Đồng hồ/Thắt lưng</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets4.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Túi/ Phụ kiện</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Túi xách/Túi nữ/Túi nam</li>
                  <li>ZIPPO/Dao quân đội/Kính</li>
                  <li>Đồng hồ</li>
                  <li>Phụ kiện quần áo/Mũ/Khăn quàng cổ</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Thể thao ngoài trời</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Thể thao/Yoga/Thể dục/Đồ dùng cho quạt</li>
                  <li>Đồ dùng ngoài trời/Leo núi/Cắm trại/Du lịch</li>
                  <li>Giày thể thao</li>
                  <li>Trang phục thể thao/Trang phục thường ngày</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets4.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Điện thoại thông minh</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Điện thoại/SmartPhone/Tablet/IPad</li>
                  <li>Chợ link kiện điển tử</li>
                  <li>Phụ kiện kĩ thuật số</li>
                  <li>Thiết bị văn phòng/Vật tư tiêu hao/Dịch vụ liên quan</li>
                  <li>Trò chơi điện tử/Phụ kiện/Trò chơi/Chiến lược</li>
                  <li>Máy ảnh kĩ thuật số/Máy ảnh SLR/Máy quay video</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets4.map((set, index) => (
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
                        {sets4.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Đồ chơi/ Mô hình</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Phần cứng máy tính/Màn hình/Thiết bị ngoại vi</li>
                  <li>Máy tính để bàn thương hiệu/Máy tính</li>
                  <li>Mô hình gundam/mecha/robot/Biến hình</li>
                  <li>Quần áo/Đạo cụ/Dịch vụ cosplay</li>
                  <li>Nhân vật/ Gacha/Búp bê/BJD/Lính</li>
                  <li>Cửa hàng trực tuyến/Dịch vụ trực tuyến/Phần mềm</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets5.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Đồ chơi/ Mẹ và bé</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Đồ chơi/Xe đẩy em bé/Câu đố/Khối xây dựng/Mô hình</li>
                  <li>Quần áo trẻ em/Quần áo cha me và con cái</li>
                  <li>Sản phẩm dánh cho trẻ em</li>
                  <li>Giày trẻ em/Giày em bé/Giày cha mẹ và con cái</li>
                  <li>Quần áo bà bầu/Sản phẩm bà bầu/dinh dưỡng</li>
                  <li>Tã/Bỉm/Sửa trẻ em</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets4.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Ô tô/ Xe máy/ Xe đạp</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Xe máy/Thiết bị/Phụ kiện</li>
                  <li>Ô tô/Thiết bị/Phụ kiện</li>
                  <li>Vật tư ô tô/Điện tử/Làm sạch/Sửa đổi</li>
                  <li>Phụ tùng ô tô/Bảo trì/Làm đẹp/ Bảo trì</li>
                  <li>Hàng hóa ảo</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Thiết bị gia dụng</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Dụng cụ nhà bếp</li>
                  <li>Thiết bị gia đình</li>
                  <li>Thiết bị chính</li>
                  <li>Chăm sóc cá nhân/Sức khỏe/Thiết bị massage</li>
                  <li>Vệ sinh/Thực phẩm/Thiết bị thương mại</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets3.map((set, index) => (
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
                        {sets4.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Chăm sóc sắc đẹp</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Dụng cụ trang điểm/Nước hoa/Làm đẹp</li>
                  <li>Làm đẹp và chăm socs da/Cơ thể/Tinh dầu</li>
                  <li>Chất tẩy rửa/ Băng vệ sinh/Giấy/Dầu thơm</li>
                  <li>Thiết bị làm đẹp và cơ thể</li>
                  <li>Chăm sóc tóc/ tóc giả</li>
                  <li>Chăm sóc răng miệng</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets4.map((set, index) => (
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
                        {sets4.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Đồ ăn nhẹ và đồ uống</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Đồ ăn nhẹ/Các loại hạt/Đặc sản</li>
                  <li>Trà</li>
                  <li>Cà phê/Ngũ cốc/Đồ uống</li>
                  <li>Thực phẩm sức khỏe/Thực phẩm bổ sung dinh dưỡng</li>
                  <li>Gia vị ngũ cốc và dầu/Thức ăn nhanh/Đồ khô/Nướng</li>
                  <li>Bổ sung dinh dưỡng truyền thống</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets5.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
              <div className="home_type_detail">
                <p>Y học và sức khỏe</p>
                <span className="home_icon_small">&gt;</span>
                <ul className="home_detail_list">
                  <li>Dụng cụ y tế</li>
                  <li>Sản phẩm người lớn/Đồ chơi tình dục</li>
                  <li>Vật tư y tế khác</li>
                  <li>Dịch vụ y tế</li>
                  <hr />
                  <div className="home_like">
                    <div className="home_default home_likes">
                      <ul>
                        {sets4.map((set, index) => (
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
                        {sets3.map((set, index) => (
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
                </ul>
              </div>
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
      </div>
      <div className="home_flyers">
        <img src={flyers} alt="foter" />
      </div>
      <div className="home_maybe_like">
        <h2>Có thể bạn cũng thích</h2>
        <div className="home_like_product">
          <div className="home_default  home_products">
            <ul>
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
              {products1.map((set, index) => (
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
              {products2.map((set, index) => (
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
    </>
  );
}

export default HomeContainer;
