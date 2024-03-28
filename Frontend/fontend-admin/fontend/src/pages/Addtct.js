import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Select } from "antd";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createTct,
  getATct,
  resetState,
  updateATct,
} from "../features/Tct/tctSlice";
import { getAChinhanhad } from "../features/Chinhanh/chinhanhSlice";
let schema = yup.object().shape({
  maTCT: yup.string().required("Mã thợ là bắt buộc"),
  tenTCT: yup.string().required("Tên thợ là bắt buộc"),
  maCN: yup.string().required("Mã chi nhánh là bắt buộc"),
});
const Addtct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [chinhanh, setChinhanh] = useState([]);
  const use = useSelector((state) => state.auth.user);
  const getTctMaTCT = location.pathname.split("/")[3];
  const newTct = useSelector((state) => state.tct);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);
  const {
    isSuccess,
    isError,
    isLoading,
    createdTct,
    isEdit,
    tctTenTCT,
    tctMaTCT,
    tctMaCN,
  } = newTct;
  useEffect(() => {
    if (getTctMaTCT !== undefined) {
      dispatch(getATct(getTctMaTCT));
    } else {
      dispatch(resetState());
    }
  }, [getTctMaTCT]);

  useEffect(() => {
    dispatch(getAChinhanhad(use.user.maCH));
  },[]);

  useEffect(() => {
    if (isSuccess && createdTct) {
      toast.success("Thêm Thợ thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật thợ thành công!");
      navigate("/admin/tcts");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdTct, isEdit]);

  const chinhanhopt = [];
  chinhanhstate.forEach((i) => {
    chinhanhopt.push({
      label: i.tenCN,
      value: i.maCN,
    });
  });

  useEffect(() => {
    formik.values.chinhanh = chinhanh ? chinhanh : "";
  }, [chinhanh]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maTCT: tctMaTCT || "",
      tenTCT: tctTenTCT || "",
      maCN: tctMaCN || "",
      maCH: use.user.maCH,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getTctMaTCT !== undefined) {
        const data = { maTCT: getTctMaTCT, tctData: values };
        dispatch(updateATct(data));
        dispatch(resetState());
      } else {
        dispatch(createTct(values));
        formik.resetForm();
        setChinhanh(null);
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getTctMaTCT !== undefined ? "Edit" : "Add"} Thợ
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getTctMaTCT !== undefined ? (
            <CustomInput
              type="maTCT"
              label="Xin vui lòng nhập lại mã thợ"
              onChng={formik.handleChange("maTCT")}
              onBlr={formik.handleBlur("maTCT")}
              val={formik.values.maTCT}
              id="maTCT"
            />
          ) : (
            <CustomInput
              type="maTCT"
              label="Nhập 0 để thêm thợ"
              onChng={formik.handleChange("maTCT")}
              onBlr={formik.handleBlur("maTCT")}
              val={formik.values.maTCT}
              id="maTCT"
            />
          )}
          <div className="error">
            {formik.touched.maTCT && formik.errors.maTCT}
          </div>
          <CustomInput
            type="tenTCT"
            label="Nhập tên thợ!"
            onChng={formik.handleChange("tenTCT")}
            onBlr={formik.handleBlur("tenTCT")}
            val={formik.values.tenTCT}
            id="tenTCT"
          />
          <div className="error">
            {formik.touched.tenTCT && formik.errors.tenTCT}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select chi nhánh"
            defaultValue={formik.values.maCN}
            onChange={(value) => formik.setFieldValue("maCN", value)}
            options={chinhanhopt}
          />
          <div className="error">
            {formik.touched.maCN && formik.errors.maCN}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getTctMaTCT !== undefined ? "Edit" : "Add"} Thợ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtct;
