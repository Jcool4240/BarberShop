import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Select } from "antd";
import { useFormik } from "formik";
import { createRole, resetState } from "../features/auth/authSlice";
import { getAuths, getRoles } from "../features/auth/authSlice";
let schema = yup.object().shape({
  email: yup.string().required("Tên loại dịch vụ là bắt buộc"),
  name: yup.string().required("Mã loại dịch vụ là bắt buộc"),
});
const Newrole = () => {
  const dispatch = useDispatch();
  const newRole = useSelector((state) => state.auth);
  const authstate = useSelector((state) => state.auth.auth);
  const rolestate = useSelector((state) => state.auth.role);
  const { isSuccess, isError, isLoading, isEdit, createdRole, isSuccessRole } = newRole;
  useEffect(() => {
    dispatch(getAuths());
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    if (isSuccess && isSuccessRole) {
      toast.success("Thêm role thành công!");
    }
    if (isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [isSuccess, isError, isLoading, createdRole, isSuccessRole, isEdit]);

  const authopt = [];
  authstate?.forEach((i) => {
    authopt.push({
      label: i.email,
      value: i.email,
    });
  });

  const roleopt = [];
  rolestate?.forEach((i) => {
    roleopt.push({
      label: i.name,
      value: i.name,
    });
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createRole(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Chi Nhanh</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select chi nhánh"
            defaultValue={formik.values.email}
            onChange={(value) => formik.setFieldValue("email", value)}
            options={authopt}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
          <Select
            mode="single"
            allowClear
            className="form-floating mt-3 w-100"
            placeholder="Select chi nhánh"
            defaultValue={formik.values.name}
            onChange={(value) => formik.setFieldValue("name", value)}
            options={roleopt}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Xác Nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newrole;
