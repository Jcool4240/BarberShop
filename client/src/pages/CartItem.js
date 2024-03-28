import { useState ,useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { updateQuantity } from "../app/slice/cartSlice";
import { removeItem } from "../app/slice/cartSlice";
import { convertPrice } from "../utils/convert";


function CartItem ({data}) {

    const [quantity, setQuantity] = useState(data?.quantity);
    const [totalPrice, setTotalPrice] = useState(data?.giaSP * data?.quantity);
    const maSPs = data?.maSP;
    const dispatch = useDispatch();
    const handleQuantity = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
        setQuantity(value);

    }

    useEffect(() => {
        setTotalPrice(data?.giaSP * quantity);
    }, [quantity, data?.giaSP]);

    useEffect(() => {
        setTotalPrice(data?.giaSP * quantity);
        dispatch(
            updateQuantity({
                maSP: data?.maSP,
                quantity,
            }),
        );
    }, [quantity, data?.giaSP, data?.maSP, dispatch]);
    
    const handleRemoveItemCart = (maSPs) => {
        // console.log("chan" , maSPs)
        dispatch(
            removeItem({
                maSP: maSPs
            }),
        );
    };

    return (
   
        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
               <div className="cart-col-1 gap-15 d-flex align-items-center">
                 <div className="w-25">
                   <img src={data.hinh} className="img-fluid" alt="sanpham image"  style={{"maxWidth": "100px"}} />
                 </div>
                 <div className="w-75"  style={{"marginLeft": "28px"}}>
                   <p>{data?.tenSP}</p>
                 </div>
               </div>
               <div className="cart-col-2">
                 <h5 className="price">{convertPrice(data?.giaSP)}</h5>
               </div>
               <div className="cart-col-3 d-flex align-items-center gap-15">
         
                   <input
                     className="form-control"
                     type="number"
                     name="quantity"
              
                     value={quantity}
                     onChange={handleQuantity}
                     style={{width: "50px"}}
                   />
             
                 <div>
                 
                    <button onClick={() => handleRemoveItemCart(maSPs)}
                       >
                      <AiFillDelete className="text-danger"/>
                    </button>
                 </div>
               </div>
               <div className="cart-col-4">
                 <h5 className="price">{convertPrice(totalPrice)}</h5>
               </div>
             </div>
         
           
    );
}

export default CartItem