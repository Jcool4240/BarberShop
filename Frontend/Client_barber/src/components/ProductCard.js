import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import OurStore from "../pages/OurStore";

const ProductCard = (props) => {
  const {grid } = props;
  const data = props?.data;
  console.log(data);
  let location = useLocation();
  console.log("Sorted Products: ", props.data);


  return (
    <> 
    {
      props.data?.map((item, index) => {
        return (
          <div
          key={index}
          className={` ${
            location.pathname == "/product" ? `gr-${grid}` : "col-3"
          } `}
        >        
          <div
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
               <button className="border-0 bg-transparent">
               <Link to={`/product/`+item?.maSP} className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </Link>
              </button> 
            </div>
            <div className="sanpham-image">
              <img src={item?.hinh} width="240px" height="240px" />
            </div>
            <div className="product-details">
              <h6 className = "brand">{item?.maNCC}</h6>
              <h5 className="product-title">
              {item?.tenSP}
              </h5>
          
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              dangerouslySetInnerHTML={{__html: item?.moTa}}
              >
              </p>
              <p className="price">{item?.giaSP}đ</p>
            </div>
            {/* <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <Link to={`/product/`+item?.maSP} className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </Link>
                <button className="border-0 bg-transparent" >
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div> */}

            
          </div>
          
        </div>
        )
      })
    }

    </>
  );
};

export default ProductCard;
