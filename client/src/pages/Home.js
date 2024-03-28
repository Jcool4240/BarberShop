import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useSelector, useDispatch } from "react-redux";


const Home = () => {
  const sanphamState = useSelector((state) =>state?.SanPhams?.SanPhams);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getSanPhams=() => {
    dispatch(getSanPhams());
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="../images/main-banner-1.jpg "
                style={{ width: "830px", height: "550px" }}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                {/* <h4>BarberShop</h4>
                <h5>BarberShop</h5>
                <p>BarberShop</p> */}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="../images/catbanner-01.jpg"
                  style={{ width: "405px", height: "265px" }}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Style</h4>
                  <h5>Undercut</h5>
                 
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../images/catbanner-02.jpg"
                  style={{ width: "405px", height: "265px" }}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Cool Style</h4>
                  <h5>Mohican</h5>
                 
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="../images/catbanner-03.jpg"
                  style={{ width: "405px", height: "265px" }}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Popular Style</h4>
                  <h5>Uốn xoăn</h5>
              
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="../images/catbanner-04.jpg"
                  style={{ width: "405px", height: "265px" }}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Legend Style</h4>
                  <h5>Side part 7/3</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Các kiểu tóc khác</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="../images/famous-1.webp"
                style={{ width: "650px", height: "400px" }}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-caption-h5">Mohawk</h5>
              </div>
              <p className="text-caption-p">Kiểu tóc nam mohawk đầy cá tính.</p> 
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="../images/famous-2.webp"
                style={{ width: "650px", height: "400px" }}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-caption-h5">Quiff</h5>
                
              </div>
              <p className="text-caption-p">Kiểu tóc nam quiff ca sĩ Sơn Tùng MTP lựa chọn.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="../images/famous-3.webp"
                style={{ width: "650px", height: "400px" }}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-caption-h5">Pompadour</h5>
              </div>
              <p className="text-caption-p">Kiểu tóc nam pompadour đầy nam tính.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.webp"
                style={{ width: "600px", height: "400px" }}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-caption-h5">Mái ngố</h5>
              </div>
              <p className="text-caption-p">Tóc nam mái ngố trẻ trung.</p>
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            sanphamState && sanphamState?.map((item, index)=>{
              if (item.tags === "special") {
                return <SpecialProduct 
                key = {index}
                id={item._maSP}
                tenSP={item?.tenSP}
                price={item.giaSP}
                quantity={item.soluongton}
                
                />;
              }
            })
          }
      
        </div>
      </Container> */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Các sản phẩm nổi tiếng </h3>
          </div>
        </div>
        
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                {/* <div className="mx-4 w-25">
                  <img src="images/brand-07.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" style={{ width: "200px", height: "200px" }} alt="brand" />
                </div> */}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      
    </>
  );
};

export default Home;
