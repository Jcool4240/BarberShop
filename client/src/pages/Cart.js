import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/user/userSlice";
import CartItem from "./CartItem";
import { convertPrice } from "../utils/convert";

const Cart = () => {
  const dispatch = useDispatch();
  const sanphamState = useSelector((state) => state?.SanPhams?.SanPhams);
  const carts = useSelector((state) => state.carts);
  const { list } = carts;

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  return (
    <>
      <Meta title={"Giỏ hàng"} />
      <BreadCrumb title="Giỏ hàng" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
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
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Tiếp tục mua sắm
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Tổng tiền: {convertPrice(carts?.total)}</h4>
                <Link to="/checkout" className="button">
                  Đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
