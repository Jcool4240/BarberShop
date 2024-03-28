import { Link } from "react-router-dom";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserCart } from "../features/user/userSlice";
import CartItem from "./CartItem";
import { convertPrice } from "../utils/convert";
import * as orderServices from "../services/orderServices";
import * as productOrderServices from "../services/productOrderServices";

const Checkout = () => {
  const dispatch = useDispatch();
  const donhangState = useSelector((state) => state.SanPhams.getSingleSanPhams);
  console.log(donhangState);

  const authState = useSelector((state) => state.auth?.user?.user);
  const sanphamState = useSelector((state) => state?.SanPhams?.SanPhams);
  const carts = useSelector((state) => state.carts);
  const { list } = carts;
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddOrder = async () => {
    try {
      const order = await orderServices.createOrder(
        undefined,
        carts?.total,
        address,
        phone,
        authState?.id
      );
      // console.log("order VIP", order?.maDH);

      // console.log("list", carts?.list);

      // console.log("slgiohang", carts?.list?.length);

      console.log("maSP", data?.maSP);
      const listLength = carts?.list?.length || 0;
      for (let index = 0; index < listLength; index++) {
        const data = {
          maDH: order?.maDH,
          maSP: carts?.list[index].maSP,
          soLuong: carts?.list[index].quantity,
        };
        await productOrderServices.createChiTietDonHang(data);
      }

      // toast.success('Đặt hàng thành công!');
      localStorage.removeItem("persist:root");

      window.location.replace("http://localhost:3000/");
    } catch (error) {
      // toast.error("Đặt hàng thất bại");
    }
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const handlAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlPhoneChange = (p) => {
    setPhone(p.target.value);
  };

  console.log("list", list);

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="checkout-left-data">
              <h3 className="website-name">Đặt hàng</h3>
              <h4 className="mb-3">Thông tin đặt hàng</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="flex-grow-1">
                  <h4>Tổng tiền: {convertPrice(carts?.total)}</h4>
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    value={address}
                    placeholder="Địa chỉ nhận hàng"
                    className="form-control"
                    onChange={handlAddressChange}
                  />
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    value={phone}
                    placeholder="Số điện thoại nhận hàng"
                    className="form-control"
                    onChange={handlPhoneChange}
                  />
                </div>

                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Quay lại giỏ hàng
                    </Link>
                    <button
                      className="button-checkout"
                      onClick={handleAddOrder}
                    >
                      <BiArrowToRight className="me-2" />
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="d-flex gap-10">
                  <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                      <h4 className="cart-col-1">Sản phẩm</h4>
                      <h4 className="cart-col-2">Giá</h4>
                      <h4 className="cart-col-3">Số lượng</h4>
                      <h4 className="cart-col-4">Tổng cộng</h4>
                    </div>
                    {list && list.length > 0 ? (
                      list.map((item, index) => (
                        <CartItem key={item?.maSP} data={item} />
                      ))
                    ) : (
                      <div>
                        {list ? (
                          <p>Giỏ hàng của bạn đang trống.</p>
                        ) : (
                          <p>Đang tải giỏ hàng...</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
