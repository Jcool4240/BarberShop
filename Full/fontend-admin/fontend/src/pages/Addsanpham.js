import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Select } from "antd";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createSanpham,
  getASanpham,
  resetState,
  updateASanpham,
} from "../features/Sanpham/sanphamSlice";
import { getLoaisps } from "../features/Loaisp/loaispSlice";
import { getChs } from "../features/Ch/chSlice";

let schema = yup.object().shape({
  maSP: yup.string().required("Mã sản phẩm là bắt buộc"),
  tenSP: yup.string().required("Tên sản phẩm là bắt buộc"),
  giaSP: yup.string().required("Giá sản phẩm là bắt buộc"),
  hinh: yup.string().required("Hình là bắt buộc"),
  moTa: yup.string().required("Mô tả là bắt buộc"),
  soLuongTon: yup.string().required("Số lượng là bắt buộc"),
  maLSP: yup.string().required("Mã loại sản phẩm là bắt buộc"),
  maCH: yup.string().required("Mã cửa hàng là bắt buộc"),
});
const Addsanpham = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loaisp, setLoaisp] = useState([]);
  const [ch, setCh] = useState([]);
  const use = useSelector((state) => state.auth.user);
  const getSanphamMaSP = location.pathname.split("/")[3];
  const newSanpham = useSelector((state) => state.sanpham);
  const loaispstate = useSelector((state) => state.loaisp.Loaisps);
  const chstate = useSelector((state) => state.ch.Chs);
  const {
    isSuccess,
    isError,
    isLoading,
    createdSanpham,
    isEdit,
    sanphamTenSP,
    sanphamMaSP,
    sanphamGiaSP,
    sanphamHinh,
    sanphamMoTa,
    sanphamSoLuongTon,
    sanphamMaLSP,
  } = newSanpham;
  useEffect(() => {
    if (getSanphamMaSP !== undefined) {
      dispatch(getASanpham(getSanphamMaSP));
    } else {
      dispatch(resetState());
    }
  }, [getSanphamMaSP]);

  useEffect(() => {
    dispatch(getLoaisps());
    dispatch(getChs());
  }, []);

  useEffect(() => {
    if (isSuccess && createdSanpham) {
      toast.success("Thêm dịch vụ thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật dịch vụ thành công!");
      navigate("/admin/sanphams");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdSanpham, isEdit]);

  const loaispopt = [];
  loaispstate.forEach((i) => {
    loaispopt.push({
      label: i.tenLSP,
      value: i.maLSP,
    });
  });
  useEffect(() => {
    formik.values.loaisp = loaisp ? loaisp : "";
  }, [loaisp]);

  const chopt = [];
  chstate.forEach((i) => {
    chopt.push({
      label: i.tenCH,
      value: i.maCH,
    });
  });
  useEffect(() => {
    formik.values.ch = ch ? ch : "";
  }, [ch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maSP: sanphamMaSP || "",
      tenSP: sanphamTenSP || "",
      giaSP: sanphamGiaSP || "",
      hinh: sanphamHinh || "",
      moTa: sanphamMoTa || "",
      soLuongTon: sanphamSoLuongTon || "",
      maLSP: sanphamMaLSP || "",
      maCH: use.user.maCH,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getSanphamMaSP !== undefined) {
        const data = { maSP: getSanphamMaSP, sanphamData: values };
        dispatch(updateASanpham(data));
        dispatch(resetState());
      } else {
        dispatch(createSanpham(values));
        formik.resetForm();
        setLoaisp(null);
        setCh(null);
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getSanphamMaSP !== undefined ? "Edit" : "Add"} San pham
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getSanphamMaSP !== undefined ? (
            <CustomInput
              type="maSP"
              label="Xin vui lòng nhập lại mã sản phẩm"
              onChng={formik.handleChange("maSP")}
              onBlr={formik.handleBlur("maSP")}
              val={formik.values.maSP}
              id="maSP"
            />
          ) : (
            <CustomInput
              type="maSP"
              label="Nhập 0 để thêm sản phẩm"
              onChng={formik.handleChange("maSP")}
              onBlr={formik.handleBlur("maSP")}
              val={formik.values.maSP}
              id="maSP"
            />
          )}
          <div className="error">
            {formik.touched.maSP && formik.errors.maSP}
          </div>
          <CustomInput
            type="tenSP"
            label="Nhập tên sản phẩm!"
            onChng={formik.handleChange("tenSP")}
            onBlr={formik.handleBlur("tenSP")}
            val={formik.values.tenSP}
            id="tenSP"
          />
          <div className="error">
            {formik.touched.tenSP && formik.errors.tenSP}
          </div>
          <CustomInput
            type="hinh"
            label="Nhập hinh!"
            onChng={formik.handleChange("hinh")}
            onBlr={formik.handleBlur("hinh")}
            val={formik.values.hinh}
            id="hinh"
          />
          <div className="error">
            {formik.touched.hinh && formik.errors.hinh}
          </div>
          <CustomInput
            type="moTa"
            label="Nhập mô tả!"
            onChng={formik.handleChange("moTa")}
            onBlr={formik.handleBlur("moTa")}
            val={formik.values.moTa}
            id="moTa"
          />
          <div className="error">
            {formik.touched.moTa && formik.errors.moTa}
          </div>
          <CustomInput
            type="giaSP"
            label="Nhập giá!"
            onChng={formik.handleChange("giaSP")}
            onBlr={formik.handleBlur("giaSP")}
            val={formik.values.giaSP}
            id="giaSP"
          />
          <div className="error">
            {formik.touched.giaSP && formik.errors.giaSP}
          </div>
          <CustomInput
            type="soLuongTon"
            label="Nhập số lường còn trong kho!"
            onChng={formik.handleChange("soLuongTon")}
            onBlr={formik.handleBlur("soLuongTon")}
            val={formik.values.soLuongTon}
            id="soLuongTon"
          />
          <div className="error">
            {formik.touched.soLuongTon && formik.errors.soLuongTon}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select loaisps"
            defaultValue={formik.values.maLSP}
            onChange={(value) => formik.setFieldValue("maLSP", value)}
            options={loaispopt}
          />
          <div className="error">
            {formik.touched.maLSP && formik.errors.maLSP}
          </div>
          {/* <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select chs"
            defaultValue={formik.values.maCH}
            onChange={(value) => formik.setFieldValue("maCH", value)}
            options={chopt}
          />
          <div className="error">
            {formik.touched.maCH && formik.errors.maCH}
          </div> */}
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getSanphamMaSP !== undefined ? "Edit" : "Add"} San pham
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addsanpham;
