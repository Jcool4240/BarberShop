import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllSanPhams } from "../features/sanpham/sanphamSlice";
import sanphamService from "../features/sanpham/sanphamService";
import data from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const sanphamState = useSelector((state) =>state?.SanPhams?.SanPhams);
  const dispatch = useDispatch();
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllSanPhams());
    }, [dispatch]);
    
  const getSanPhams = () => {
    dispatch(getAllSanPhams());
  };

  useEffect(() => {
    if (sanphamState && sanphamState.length > 0) {
      setSortedProducts(sanphamState);
    }
  }, [sanphamState]);


  const displaySortedProducts = async (sortType) => {
    switch (sortType) {
      case "title-ascending":
        // Gọi các hàm từ service và lưu kết quả vào state
        const productsByTitleAscending = await sanphamService.getSanPhamTenAtoZ();
        setSortedProducts(productsByTitleAscending);
        break;
      case "title-descending":
        const productsByTitleDescending = await sanphamService.getSanPhamTenZtoA();
        setSortedProducts(productsByTitleDescending);
        break;
      case "price-ascending":
        const productsByPriceAscending = await sanphamService.getSanPhamsGiaTangDan();
        setSortedProducts(productsByPriceAscending);
        break;
      case "price-descending":
        const productsByPriceDescending = await sanphamService.getSanPhamGiaGiamDan();
        setSortedProducts(productsByPriceDescending);
        break;
      default:
        const defaultProducts = await sanphamService.getSanPhams();
        setSortedProducts(defaultProducts);
        console.log(defaultProducts)
        break;
        
    }
  };

  const handleSortChange = async (event) => {
    const selectedSortType = event.target.value;
    await displaySortedProducts(selectedSortType);
  };

  
  return (
    <>
      <Meta title={"Sản phẩm"} />
      <BreadCrumb title="Sản phẩm" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Mua sắm theo danh mục</h3>
              <div>
                <ul className="ps-0">
                  <li>Dầu Gội</li>
                  <li>Keo Xịt Tóc</li>
                  <li>Sáp Vuốt Tóc</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Lọc bởi</h3>
              <div>
                <h5 className="sub-title">Sẵn có</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Còn hàng (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Hết hàng (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Giá</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">Đến</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sản phẩm phổ biến</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/wax.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      18.21 Man Made WAX Sweet Tobacco
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>450.000₫</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/kevin.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kevin Murphy Rough Rider 30GR
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>350.000₫</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sắp xếp theo:
                  </p>
                  <select
                  name=""
                  defaultValue={"manual"}
                  className="form-control form-select"
                  onChange={handleSortChange} // Gọi hàm xử lý khi lựa chọn thay đổi
                >
                  <option value="manual">Chọn cách sắp xếp</option>
                  <option value="title-ascending">Theo thứ tự bảng chữ cái, A-Z</option>
                  <option value="title-descending">Theo thứ tự bảng chữ cái, Z-A</option>
                  <option value="price-ascending">Giá từ tăng dần</option>
                  <option value="price-descending">Giá giảm dần</option>
                </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              {/* <ProductCard data={sortedProducts  && sortedProducts.length>0?sortedProducts  : []} grid={grid} /> */}
              <ProductCard data={sortedProducts} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
