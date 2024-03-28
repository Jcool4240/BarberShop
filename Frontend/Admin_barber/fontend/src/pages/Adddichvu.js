import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Select } from "antd";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { jwtDecode } from 'jwt-decode';
import {
  createDichvu,
  getADichvu,
  resetState,
  updateADichvu,
} from "../features/Dichvu/dichvuSlice";
import { getALoaidvad, getALoaidvcn } from "../features/Loaidv/loaidvSlice";
let schema = yup.object().shape({
  maDV: yup.string().required("Mã dịch vụ là bắt buộc"),
  tenDV: yup.string().required("Tên dịch vụ là bắt buộc"),
  giaDV: yup.string().required("Giá dịch vụ là bắt buộc"),
  hinh: yup.string().required("Hình là bắt buộc"),
  moTa: yup.string().required("Mô tả là bắt buộc"),
  maLDV: yup.string().required("Mã loại dịch vụ là bắt buộc"),
});
const Adddichvu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loaidv, setLoaidv] = useState([]);
  const use = useSelector((state) => state.auth.user);
  const decodedToken = jwtDecode(use.token);
  const role =
    decodedToken[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];
  const getDichvuMaDV = location.pathname.split("/")[3];
  const newDichvu = useSelector((state) => state.dichvu);
  const loaidvstate = useSelector((state) => state.loaidv.Loaidvs);
  const {
    isSuccess,
    isError,
    isLoading,
    createdDichvu,
    isEdit,
    dichvuTenDV,
    dichvuMaDV,
    dichvuGiaDV,
    dichvuHinh,
    dichvuMoTa,
    dichvuMaLDV,
  } = newDichvu;
  useEffect(() => {
    if (getDichvuMaDV !== undefined) {
      dispatch(getADichvu(getDichvuMaDV));
    } else {
      dispatch(resetState());
    }
  }, [getDichvuMaDV]);

  useEffect(() => {
    if(role === "Manager")
    {
      dispatch(getALoaidvcn(use.user.maCN));
    }
    else
    {
      dispatch(getALoaidvad(use.user.maCH));
    }
  },[]);

  useEffect(() => {
    if (isSuccess && createdDichvu) {
      toast.success("Thêm dịch vụ thành công!");
    }
    if (isSuccess && isEdit) {
      toast.success("Cập nhật dịch vụ thành công!");
      navigate("/admin/dichvus");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdDichvu, isEdit]);

  const loaidvopt = [];
  loaidvstate.forEach((i) => {
    loaidvopt.push({
      label: i.tenLDV,
      value: i.maLDV,
    });
  });

  useEffect(() => {
    formik.values.loaidv = loaidv ? loaidv : "";
  }, [loaidv]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maDV: dichvuMaDV || "",
      tenDV: dichvuTenDV || "",
      giaDV: dichvuGiaDV || "",
      hinh: dichvuHinh || "",
      moTa: dichvuMoTa || "",
      maLDV: dichvuMaLDV || "",
      maCH: use.user.maCH,
      maCN: use.user.maCN,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getDichvuMaDV !== undefined) {
        const data = { maDV: getDichvuMaDV, dichvuData: values };
        dispatch(updateADichvu(data));
        dispatch(resetState());
      } else {
        dispatch(createDichvu(values));
        formik.resetForm();
        setLoaidv(null);
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getDichvuMaDV !== undefined ? "Edit" : "Add"} Dich vu
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {getDichvuMaDV !== undefined ? (
            <CustomInput
              type="maDV"
              label="Xin vui lòng nhập lại mã dịch vụ"
              onChng={formik.handleChange("maDV")}
              onBlr={formik.handleBlur("maDV")}
              val={formik.values.maDV}
              id="maDV"
            />
          ) : (
            <CustomInput
              type="maDV"
              label="Nhập 0 để thêm dịch vụ"
              onChng={formik.handleChange("maDV")}
              onBlr={formik.handleBlur("maDV")}
              val={formik.values.maDV}
              id="maDV"
            />
          )}
          <div className="error">
            {formik.touched.maDV && formik.errors.maDV}
          </div>
          <CustomInput
            type="tenDV"
            label="Nhập tên dịch vụ!"
            onChng={formik.handleChange("tenDV")}
            onBlr={formik.handleBlur("tenDV")}
            val={formik.values.tenDV}
            id="tenDV"
          />
          <div className="error">
            {formik.touched.tenDV && formik.errors.tenDV}
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
          <div className="error">{formik.touched.moTa && formik.errors.moTa}</div>
          <CustomInput
            type="giaDV"
            label="Nhập giá!"
            onChng={formik.handleChange("giaDV")}
            onBlr={formik.handleBlur("giaDV")}
            val={formik.values.giaDV}
            id="giaDV"
          />
          <div className="error">
            {formik.touched.giaDV && formik.errors.giaDV}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select loaidvs"
            defaultValue={formik.values.maLDV}
            onChange={(value) => formik.setFieldValue("maLDV", value)}
            options={loaidvopt}
          />
          <div className="error">
            {formik.touched.maLDV && formik.errors.maLDV}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getDichvuMaDV !== undefined ? "Edit" : "Add"} Dich vu
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adddichvu;
