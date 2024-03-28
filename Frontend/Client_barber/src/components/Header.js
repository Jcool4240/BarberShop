import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
import Search from "../features/Search";

const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.carts);
  const hisstory = useNavigate();
  const handleLogout = () => {
    dispatch(logout());

    hisstory("/");
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                BarberShop xin kính chào quý khách
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: +84 889342105">
                  +84 889342105
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <NavLink to="/">BarberShop</NavLink>
              </h2>
            </div>
            {/* <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <Search/>
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div> */}

            <Search />

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Lịch sử <br /> Đặt lịch
                    </p>
                  </Link>
                </div>
                {/* <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
<p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div> */}
                <Link
                  to={authState?.user === null ? "/login" : ""}
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <div>
                    <img src={user} alt="user" />
                  </div>
                  {authState?.user === null ? (
                    <div>
                      <p className="mb-0">Đăng nhập</p>
                    </div>
                  ) : (
                    <div className="d-flex gap-3 align-items-center dropdown">
                      <div
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <p className="mb-0">
                          Xin chào {authState?.user?.user?.firstName}
                        </p>
                      </div>
                      <div className="dropdown-menu">
                        <li>
                          <button
                            className="dropdown-item py-1 mb-1"
                            style={{ height: "auto", lineHeight: "20px" }}
                            onClick={handleLogout}
                          >
                            Signout
                          </button>
                        </li>
                      </div>
                    </div>
                  )}
                </Link>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {list?.length}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">Danh mục</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Sản phẩm</NavLink>
                    <NavLink to="/blogs">Đặt lịch</NavLink>
                    <NavLink to="/contact">Liên hệ</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
