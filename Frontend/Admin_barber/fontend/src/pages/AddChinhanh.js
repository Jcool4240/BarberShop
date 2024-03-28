import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createChinhanh,
  getAChinhanh,
  resetState,
  updateAChinhanh,
} from "../features/Chinhanh/chinhanhSlice";
let schema = yup.object().shape({
  tenCN: yup.string().required("Tên loại dịch vụ là bắt buộc"),
  maCN: yup.string().required("Mã loại dịch vụ là bắt buộc"),
});
const Addchinhanh = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const use = useSelector((state) => state.auth.user);
  const getChinhanhMaCN = location.pathname.split("/")[3];
  const newChinhanh = useSelector((state) => state.chinhanh);
  const {
    isSuccess,
    isError,
    isLoading,
    createdChinhanh,
    isEdit,
    chinhanhTenCN,
    chinhanhMaCN,
  } = newChinhanh;
  useEffect(() => {
    if (getChinhanhMaCN !== undefined) {
      dispatch(getAChinhanh(getChinhanhMaCN));
    } else {
      dispatch(resetState());
    }
  }, [getChinhanhMaCN]);
  useEffect(() => {
    if (isSuccess && createdChinhanh) {
      toast.success("Thêm chi nhánh thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật chi nhánh thành công!");
      navigate("/admin/chinhanhs");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdChinhanh, isEdit]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maCN: chinhanhMaCN || "",
      tenCN: chinhanhTenCN || "",
      maCH: use.user.maCH ,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getChinhanhMaCN !== undefined) {
        const data = { maCN: getChinhanhMaCN, chinhanhData: values };
        dispatch(updateAChinhanh(data));
        dispatch(resetState());
      } else {
        dispatch(createChinhanh(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  
  return (
    <div>
      <h3 className="mb-4 title">
        {getChinhanhMaCN !== undefined ? "Edit" : "Add"} Chi Nhanh
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getChinhanhMaCN !== undefined ? (
            <CustomInput
              type="maCN"
              label="Xin vui lòng nhập lại mã chi nhánh"
              onChng={formik.handleChange("maCN")}
              onBlr={formik.handleBlur("maCN")}
              val={formik.values.maCN}
              id="maCN"
            />
          ) : (
            <CustomInput
              type="maCN"
              label="Nhập 0 để thêm chi nhánh"
              onChng={formik.handleChange("maCN")}
              onBlr={formik.handleBlur("maCN")}
              val={formik.values.maCN}
              id="maCN"
            />
          )}
          <div className="error">
            {formik.touched.maCN && formik.errors.maCN}
          </div>
          <CustomInput
            type="tenCN"
            label="Nhập tên chi nhánh!"
            onChng={formik.handleChange("tenCN")}
            onBlr={formik.handleBlur("tenCN")}
            val={formik.values.tenCN}
            id="tenCN"
          />
          <div className="error">
            {formik.touched.tenCN && formik.errors.tenCN}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getChinhanhMaCN !== undefined ? "Edit" : "Add"} Chi Nhanh
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addchinhanh;
