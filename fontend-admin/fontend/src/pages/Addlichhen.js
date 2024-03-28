import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Select } from "antd";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createLichhen,
  getALichhen,
  resetState,
  updateALichhen,
} from "../features/Lichhen/lichhenSlice";
import { getADichvuad } from "../features/Dichvu/dichvuSlice";
import { getAChinhanhad } from "../features/Chinhanh/chinhanhSlice";
import { getATctcn } from "../features/Tct/tctSlice";
let schema = yup.object().shape({
  maLH: yup.string().required("Mã lịch hẹn là bắt buộc"),
  phone: yup.string().required("SDT là bắt buộc"),
  name: yup.string().required("Tên là bắt buộc"),
  customer_number: yup.string().required("Số khách là bắt buộc"),
  maCN: yup.string().required("Chi nhánh là bắt buộc"),
  ghiChu: yup.string().required("Note là bắt buộc"),
  date: yup.string().required("Ngày là bắt buộc"),
  time: yup.string().required("Time là bắt buộc"),
  maDV: yup.string().required("Dịch vụ là bắt buộc"),
  maTCT: yup.string().required("Thợ là bắt buộc"),
});
const Addlichhen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [dichvu, setDichvu] = useState([]);
  const [chinhanh, setChinhanh] = useState([]);
  const [tct, setTct] = useState([]);
  const use = useSelector((state) => state.auth.user);
  const getLichhenMaLH = location.pathname.split("/")[3];
  const newLichhen = useSelector((state) => state.lichhen);
  const dichvustate = useSelector((state) => state.dichvu.Dichvus);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);
  const tctstate = useSelector((state) => state.tct.Tcts);
  const {
    isSuccess,
    isError,
    isLoading,
    createdLichhen,
    isEdit,
    lichhenMaLH,
    lichhenPhone,
    lichhenName,
    lichhenCustomer_number,
    lichhenMaCN,
    lichhenGhiChu,
    lichhenDate,
    lichhenTime,
    lichhenMaDV,
    lichhenMaTCT,
  } = newLichhen;

  useEffect(() => {
    if (getLichhenMaLH !== undefined) {
      dispatch(getALichhen(getLichhenMaLH));
    } else {
      dispatch(resetState());
    }
  }, [getLichhenMaLH]);

  useEffect(() => {
    dispatch(getADichvuad(use.user.maCH));
    dispatch(getAChinhanhad(use.user.maCH));
  }, []);
  
  useEffect(() => {
    if (isSuccess && createdLichhen) {
      toast.success("Thêm lịch hẹn thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật lịch hẹn thành công!");
      navigate("/admin/lichhens");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdLichhen, isEdit]);

  const dichvuopt = [];
  dichvustate.forEach((i) => {
    dichvuopt.push({
      label: i.tenDV,
      value: i.maDV,
    });
  });
  useEffect(() => {
    formik.values.dichvu = dichvu ? dichvu : "";
  }, [dichvu]);

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

  const tctopt = [];
  tctstate.forEach((i) => {
    tctopt.push({
      label: i.tenTCT,
      value: i.maTCT,
    });
  });
  useEffect(() => {
    formik.values.tct = tct ? tct : "";
  }, [tct]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maLH: lichhenMaLH || "",
      phone: lichhenPhone || "",
      name: lichhenName || "",
      customer_number: lichhenCustomer_number || "",
      maCN: lichhenMaCN || "",
      ghiChu: lichhenGhiChu || "",
      date: lichhenDate || "",
      time: lichhenTime || "",
      maDV: lichhenMaDV || "",
      maTCT: lichhenMaTCT || "",
      maCH: use.user.maCH,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getLichhenMaLH !== undefined) {
        const data = { maLH: getLichhenMaLH, lichhenData: values };
        dispatch(updateALichhen(data));
        dispatch(resetState());
      } else {
        dispatch(createLichhen(values));
        formik.resetForm();
        setDichvu(null);
        setChinhanh(null);
        setTct(null);
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  useEffect(() => {
    const maCN = formik.values.maCN;
    if (maCN !== "") {
      dispatch(getATctcn(maCN));
    }
  }, [formik.values.maCN]);

  return (
    <div>
      <h3 className="mb-4 title">
        {getLichhenMaLH !== undefined ? "Edit" : "Add"} Lich Hen
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getLichhenMaLH !== undefined ? (
            <CustomInput
              type="maLH"
              label="Xin vui lòng nhập lại mã lịch hẹn"
              onChng={formik.handleChange("maLH")}
              onBlr={formik.handleBlur("maLH")}
              val={formik.values.maLH}
              id="maLH"
            />
          ) : (
            <CustomInput
              type="maLH"
              label="Nhập 0 để thêm lịch hẹn"
              onChng={formik.handleChange("maLH")}
              onBlr={formik.handleBlur("maLH")}
              val={formik.values.maLH}
              id="maLH"
            />
          )}
          <div className="error">
            {formik.touched.maLH && formik.errors.maLH}
          </div>
          <CustomInput
            type="phone"
            label="Nhập sdt!"
            onChng={formik.handleChange("phone")}
            onBlr={formik.handleBlur("phone")}
            val={formik.values.phone}
            id="phone"
          />
          <div className="error">
            {formik.touched.phone && formik.errors.phone}
          </div>
          <CustomInput
            type="name"
            label="Nhập Tên!"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="customer_number"
            label="Nhập Số người!"
            onChng={formik.handleChange("customer_number")}
            onBlr={formik.handleBlur("customer_number")}
            val={formik.values.customer_number}
            id="customer_number"
          />
          <div className="error">
            {formik.touched.customer_number && formik.errors.customer_number}
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
          <CustomInput
            type="ghiChu"
            label="Nhập Ghi Chú!"
            onChng={formik.handleChange("ghiChu")}
            onBlr={formik.handleBlur("ghiChu")}
            val={formik.values.ghiChu}
            id="ghiChu"
          />
          <div className="error">
            {formik.touched.ghiChu && formik.errors.ghiChu}
          </div>
          <CustomInput
            type="date"
            label="Nhập Ngày!"
            onChng={formik.handleChange("date")}
            onBlr={formik.handleBlur("date")}
            val={formik.values.date}
            id="date"
          />
          <div className="error">
            {formik.touched.date && formik.errors.date}
          </div>
          <CustomInput
            type="time"
            label="Nhập Giờ!"
            onChng={formik.handleChange("time")}
            onBlr={formik.handleBlur("time")}
            val={formik.values.time}
            id="time"
          />
          <div className="error">
            {formik.touched.time && formik.errors.time}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select dịch vụ"
            defaultValue={formik.values.maDV}
            onChange={(value) => formik.setFieldValue("maDV", value)}
            options={dichvuopt}
          />
          <div className="error">
            {formik.touched.maDV && formik.errors.maDV}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select thợ"
            defaultValue={formik.values.maTCT}
            onChange={(value) => formik.setFieldValue("maTCT", value)}
            options={tctopt}
          />
          <div className="error">
            {formik.touched.maTCT && formik.errors.maTCT}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getLichhenMaLH !== undefined ? "Edit" : "Add"} Lich Hen
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addlichhen;
