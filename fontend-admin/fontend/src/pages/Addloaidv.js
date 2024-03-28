import { React, useRef, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createLoaidv,
  getALoaidv,
  resetState,
  updateALoaidv,
} from "../features/Loaidv/loaidvSlice";
let schema = yup.object().shape({
  tenLDV: yup.string().required("Tên loại dịch vụ là bắt buộc"),
  maLDV: yup.string().required("Mã loại dịch vụ là bắt buộc"),
});
const Addloaidv = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const use = useSelector((state) => state.auth.user);
  const getLoaidvMaLDV = location.pathname.split("/")[3];
  const newLoaidv = useSelector((state) => state.loaidv);
  const {
    isSuccess,
    isError,
    isLoading,
    createdLoaidv,
    isEdit,
    loaidvTenLDV,
    loaidvMaLDV,
  } = newLoaidv;
  useEffect(() => {
    if (getLoaidvMaLDV !== undefined) {
      dispatch(getALoaidv(getLoaidvMaLDV));
    } else {
      dispatch(resetState());
    }
  }, [getLoaidvMaLDV]);
  useEffect(() => {
    if (isSuccess && createdLoaidv) {
      toast.success("Thêm loại dịch vụ thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật loại dịch vụ thành công!");
      navigate("/admin/loaidvs");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdLoaidv, isEdit]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maLDV: loaidvMaLDV || "",
      maCH: use.user.maCH ,
      tenLDV: loaidvTenLDV || "",
      maCN: use.user.maCN ,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getLoaidvMaLDV !== undefined) {
        const data = { maLDV: getLoaidvMaLDV, loaidvData: values };
        dispatch(updateALoaidv(data));
        dispatch(resetState());
      } else {
        dispatch(createLoaidv(values));
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
        {getLoaidvMaLDV !== undefined ? "Edit" : "Add"} Loaidv
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getLoaidvMaLDV !== undefined ? (
            <CustomInput
              type="maLDV"
              label="Xin vui lòng nhập lại mã loại dịch vụ"
              onChng={formik.handleChange("maLDV")}
              onBlr={formik.handleBlur("maLDV")}
              val={formik.values.maLDV}
              id="maLDV"
            />
          ) : (
            <CustomInput
              type="maLDV"
              label="Nhập 0 để thêm loại dịch vụ"
              onChng={formik.handleChange("maLDV")}
              onBlr={formik.handleBlur("maLDV")}
              val={formik.values.maLDV}
              id="maLDV"
            />
          )}
          <div className="error">
            {formik.touched.maLDV && formik.errors.maLDV}
          </div>
          <CustomInput
            type="tenLDV"
            label="Nhập tên loại dịch vụ!"
            onChng={formik.handleChange("tenLDV")}
            onBlr={formik.handleBlur("tenLDV")}
            val={formik.values.tenLDV}
            id="tenLDV"
          />
          <div className="error">
            {formik.touched.tenLDV && formik.errors.tenLDV}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getLoaidvMaLDV !== undefined ? "Edit" : "Add"} Loaidv
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addloaidv;
