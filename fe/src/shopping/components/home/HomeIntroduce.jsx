import React from "react";
import pay1 from "../../../assets/home/visa.png";
import pay2 from "../../../assets/home/visa1.png";
import pay3 from "../../../assets/home/visa2.png";
import pay4 from "../../../assets/home/visa3.png";
import pay5 from "../../../assets/home/visa4.png";
import pay6 from "../../../assets/home/visa5.png";

import tran1 from "../../../assets/home/tran1.png";
import tran2 from "../../../assets/home/tran2.png";
import tran3 from "../../../assets/home/tran3.png";
import tran4 from "../../../assets/home/tran4.png";
import tran5 from "../../../assets/home/tran5.png";
import tran6 from "../../../assets/home/tran6.png";
import tran7 from "../../../assets/home/tran7.png";
import tran8 from "../../../assets/home/tran8.png";
import tran9 from "../../../assets/home/tran9.png";

import iconface from "../../../assets/home/icon_face.png";
import icon_inter from "../../../assets/home/icon_tele.png";
import icon_linked from "../../../assets/home/icon_licked.png";
import barcode from "../../../assets/home/barcode.png";
import appstore from "../../../assets/home/appstore.png";
import appget from "../../../assets/home/appget.png";
import googleplay from "../../../assets/home/googleplay.png";

const HomeIntroduce = React.memo(() => {
  return (
    <>
      <div className="home_content_foter">
        <div className="home_foter">
          <div className="home_customer_care column_out">
            <h4>chăm sóc khách hàng</h4>
            <p>Trung tâm trợ giúp</p>
            <p>Hướng dẫn mua hàng</p>
            <p>Hướng dẫn bán hàng</p>
            <p>Thanh toán</p>
            <p>ShopHub xu</p>
            <p>Vận chuyển</p>
            <p>Trả hàng & hoàn tiền</p>
            <p>Chăm sóc khách hàng</p>
            <p>Chính sách bảo hành</p>
            <p></p>
          </div>
          <div className="home_about_shophub column_out">
            <h4>về ShopHub</h4>
            <p>Giới thiệu về ShopHub</p>
            <p>Tuyển dụng</p>
            <p>Điều khoản ShopHub</p>
            <p>Chính sách bảo mật</p>
            <p>Chính hãng</p>
            <p>Kênh người bán</p>
            <p>Flash Sales</p>
            <p>Chương trinh tiếp thị liên kết</p>
          </div>
          <div className="home_about_pay column_out">
            <h4>thanh toán</h4>
            <div>
              <div className="home_img_group">
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
              </div>
              <div className="home_img_group">
                <img src={pay4} alt="" />
                <img src={pay5} alt="" />
                <img src={pay6} alt="" />
              </div>
            </div>
            <div>
              <h4>đơn vị vận chuyển</h4>
              <div className="home_img_group">
                <img src={tran1} alt="" />
                <img src={tran2} alt="" />
                <img src={tran3} alt="" />
              </div>
              <div className="home_img_group">
                <img src={tran4} alt="" />
                <img src={tran5} alt="" />
                <img src={tran6} alt="" />
              </div>
              <div className="home_img_group">
                <img src={tran7} alt="" />
                <img src={tran8} alt="" />
                <img src={tran9} alt="" />
              </div>
            </div>
          </div>
          <div className="home_keep_track column_out">
            <h4>theo dõi chúng tôi trên</h4>
            <div className="home_img_keep_track">
              <div>
                <img src={iconface} alt="" />
                <span>facebook</span>
              </div>
              <div>
                <img src={icon_inter} alt="" />
                <span>intagram</span>
              </div>
              <div>
                <img src={icon_linked} alt="" />
                <span>linkedln</span>
              </div>
            </div>
          </div>
          <div className="home_dowload_app column_out">
            <h4>tải ứng dụng shophub ngay thôi</h4>
            <div className="home_barcode_app">
              <div className="home_img_barcode">
                <img src={barcode} alt="" />
              </div>
              <div className="home_app_store">
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" style={{ marginLeft: 8 }} />
                <img src={appget} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default HomeIntroduce;
