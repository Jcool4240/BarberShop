import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactImageZoom from "react-image-zoom";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getASanPhams } from "../features/sanpham/sanphamSlice";
import { addSanPhams } from "../features/user/userSlice";
import { toast } from 'react-toastify';
import { addToCart } from '../app/slice/cartSlice';
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()
  const getSanPhamsId = location.pathname.split("/")[2]
  const dispatch = useDispatch();
  const sanphamState = useSelector((state) =>state?.SanPhams.getSingleSanPhams);

  const handleAddToCart = () => {
    dispatch(
        addToCart({
            ...sanphamState,
            quantity: 1,
        }),
    );
    // alert('SuccessFully');
};

 
  useEffect(()=>{
    dispatch(getASanPhams(getSanPhamsId)); 
  },[])
  const uploadCart = () => {
    if(quantity === null) {
    toast.error("Hãy chọn số lượng!");
    }else {
      dispatch(addSanPhams({sanphamId:sanphamState?._maSP}))
    }
}
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 480,

    img: sanphamState?.hinh || 'URL_DEFAULT_IMAGE'
  }
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const redirectToProducts = () => {
    window.location.replace('http://localhost:3000/product');
  };

  return (
    <>
      <Meta title={"Chi tiết sản phẩm"} />
      <BreadCrumb title="Chi tiết sản phẩm" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-SanPhams-hinh">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                {sanphamState?.tenSP}
                </h3>
              </div>

              <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                      onClick={handleAddToCart} variant="success"
                    >
                      Thêm vào giỏ hàng
                    </button>
                    {/* <button className="button signup">Mua ngay</button> */}
                  </div>
                  
              <div className="border-bottom py-3">
                <p className="price"> Giá: {sanphamState?.giaSP}₫ </p>
                <div className="d-flex align-items-center gap-80">
                <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  <p className="mb-0 t-review">( 60 đánh giá )</p>
                </div>
                <a className="review-btn" href="#review">
                  Viết đánh giá
                </a>
              </div>
              <div className=" py-3">
              <div className="row">
          <div className="col-12">
            <h4>Miêu tả</h4>
            <div className="bg-white p-3">
              <p dangerouslySetInnerHTML={{__html:sanphamState?.moTa}}>
              </p>
            </div>
          </div>
        </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {/* <h3 className="product-heading">Số lượng:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                      onChange={(e)=>setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div> */}
                  
                </div>
                <div className="d-flex gap-20 flex-column  my-6">
                  <h3 className="product-heading">Vận chuyển:</h3>
                  <p className="product-data">
                    Miễn phí vận chuyển! <br /> 
                    Chúng tôi vận chuyển tất cả các đơn hàng trong nước trong vòng
                    <b> 3-7 ngày làm việc!</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Miêu tả</h4>
            <div className="bg-white p-3">
              <p dangerouslySetInnerHTML={{__html:sanphamState?.moTa}}>
              </p>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Nhận xét</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Phản hồi từ khách hàng</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Dựa trên 60 đánh giá</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Viết đánh giá
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Viết đánh giá</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Gửi đánh giá</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                <div className="success-message">
                <p>✔️ Thêm sản phẩm thành công</p>
              </div>
                  <img src={sanphamState?.hinh} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">{sanphamState?.tenSP}</h6>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal"  onClick={redirectToProducts}>
                Danh sách sản phẩm
              </button>
              {/* <button type="button" className="button signup">
                Thủ tục thanh toán
              </button> */}
            </div>
            {/* <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Tiếp tục mua sắm
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
