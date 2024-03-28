import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCh,
  getACh,
  resetState,
  updateACh,
} from "../features/Ch/chSlice";
let schema = yup.object().shape({
  tenCH: yup.string().required("Tên cửa hàng là bắt buộc"),
  maCH: yup.string().required("Mã cửa hàng là bắt buộc"),
  email: yup.string().required("Email là bắt buộc"),
  sdt: yup.string().required("Số điện thoại là bắt buộc"),
  diaChi: yup.string().required("Địa chỉ là bắt buộc"),
});
const Addch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getChMaCH = location.pathname.split("/")[3];
  const newCh = useSelector((state) => state.ch);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCh,
    isEdit,
    chTenCH,
    chMaCH,
    chEmail,
    chSdt,
    chDiaChi,
  } = newCh;
  useEffect(() => {
    if (getChMaCH !== undefined) {
      dispatch(getACh(getChMaCH));
    } else {
      dispatch(resetState());
    }
  }, [getChMaCH]);
  useEffect(() => {
    if (isSuccess && createdCh) {
      toast.success("Thêm Cửa hàng thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật cửa hàng thành công!");
      navigate("/admin/chs");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdCh, isEdit]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maCH: chMaCH || "",
      tenCH: chTenCH || "",
      email: chEmail || "",
      sdt: chSdt || "",
      diaChi: chDiaChi || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getChMaCH !== undefined) {
        const data = { maCH: getChMaCH, chData: values };
        dispatch(updateACh(data));
        dispatch(resetState());
      } else {
        dispatch(createCh(values));
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
        {getChMaCH !== undefined ? "Edit" : "Add"} Ch
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getChMaCH !== undefined ? (
            <CustomInput
              type="maCH"
              label="Xin vui lòng nhập lại mã cửa hàng"
              onChng={formik.handleChange("maCH")}
              onBlr={formik.handleBlur("maCH")}
              val={formik.values.maCH}
              id="maCH"
            />
          ) : (
            <CustomInput
              type="maCH"
              label="Nhập 0 để thêm cửa hàng"
              onChng={formik.handleChange("maCH")}
              onBlr={formik.handleBlur("maCH")}
              val={formik.values.maCH}
              id="maCH"
            />
          )}
          <div className="error">
            {formik.touched.maCH && formik.errors.maCH}
          </div>
          <CustomInput
            type="tenCH"
            label="Nhập tên cửa hàng!"
            onChng={formik.handleChange("tenCH")}
            onBlr={formik.handleBlur("tenCH")}
            val={formik.values.tenCH}
            id="tenCH"
          />
          <div className="error">
            {formik.touched.tenCH && formik.errors.tenCH}
          </div>
          <CustomInput
            type="email"
            label="Nhập email!"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
            id="email"
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="sdt"
            label="Nhập số điện thoại!"
            onChng={formik.handleChange("sdt")}
            onBlr={formik.handleBlur("sdt")}
            val={formik.values.sdt}
            id="sdt"
          />
          <div className="error">{formik.touched.sdt && formik.errors.sdt}</div>
          <CustomInput
            type="diaChi"
            label="Nhập địa chỉ!"
            onChng={formik.handleChange("diaChi")}
            onBlr={formik.handleBlur("diaChi")}
            val={formik.values.diaChi}
            id="diaChi"
          />
          <div className="error">
            {formik.touched.diaChi && formik.errors.diaChi}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getChMaCH !== undefined ? "Edit" : "Add"} Ch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addch;
