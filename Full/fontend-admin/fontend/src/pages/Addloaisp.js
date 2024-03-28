import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createLoaisp,
  getALoaisp,
  resetState,
  updateALoaisp,
} from "../features/Loaisp/loaispSlice";
let schema = yup.object().shape({
  tenLSP: yup.string().required("Tên loại sản phẩm là bắt buộc"),
  maLSP: yup.string().required("Mã loại sản phẩm là bắt buộc"),
});
const Addloaisp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const use = useSelector((state) => state.auth.user);
  const getLoaispMaLSP = location.pathname.split("/")[3];
  const newLoaisp = useSelector((state) => state.loaisp);
  const {
    isSuccess,
    isError,
    isLoading,
    createdLoaisp,
    isEdit,
    loaispTenLSP,
    loaispMaLSP,
  } = newLoaisp;
  useEffect(() => {
    if (getLoaispMaLSP !== undefined) {
      dispatch(getALoaisp(getLoaispMaLSP));
    } else {
      dispatch(resetState());
    }
  }, [getLoaispMaLSP]);
  useEffect(() => {
    if (isSuccess && createdLoaisp) {
      toast.success("Thêm loại sản phẩm thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật loại sản phẩm thành công!");
      navigate("/admin/loaisps");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdLoaisp, isEdit]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maLSP: loaispMaLSP || "",
      tenLSP: loaispTenLSP || "",
      maCH: use.user.maCH,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getLoaispMaLSP !== undefined) {
        const data = { maLSP: getLoaispMaLSP, loaispData: values };
        dispatch(updateALoaisp(data));
        dispatch(resetState());
      } else {
        dispatch(createLoaisp(values));
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
        {getLoaispMaLSP !== undefined ? "Edit" : "Add"} Loaisp
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getLoaispMaLSP !== undefined ? (
            <CustomInput
              type="maLSP"
              label="Xin vui lòng nhập lại mã loại sản phẩm"
              onChng={formik.handleChange("maLSP")}
              onBlr={formik.handleBlur("maLSP")}
              val={formik.values.maLSP}
              id="maLSP"
            />
          ) : (
            <CustomInput
              type="maLSP"
              label="Nhập 0 để thêm loại sản phẩm"
              onChng={formik.handleChange("maLSP")}
              onBlr={formik.handleBlur("maLSP")}
              val={formik.values.maLSP}
              id="maLSP"
            />
          )}
          <div className="error">
            {formik.touched.maLSP && formik.errors.maLSP}
          </div>
          <CustomInput
            type="tenLSP"
            label="Nhập tên loại sản phẩm!"
            onChng={formik.handleChange("tenLSP")}
            onBlr={formik.handleBlur("tenLSP")}
            val={formik.values.tenLSP}
            id="tenLSP"
          />
          <div className="error">
            {formik.touched.tenLSP && formik.errors.tenLSP}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getLoaispMaLSP !== undefined ? "Edit" : "Add"} Loaisp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addloaisp;
