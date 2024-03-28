import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is Required")
    .min(4).max(12).matches(/^\w+$/),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try { 
        await dispatch(login(values));
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
        setErrors({ username: "Invalid username or password" });
      }
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccessLogin, isLoading } = authState.auth;

  useEffect(() => {
    if (isSuccessLogin) {
      navigate("admin");
    } else {
      navigate("/");
    }
  }, [user, isError, isSuccessLogin, isLoading, navigate]);

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Đăng nhập</h3>
        <p className="text-center">Xin vui long đăng nhập để tiếp tục.</p>
        <div className="error text-center">
          {isError ? "Tài khoản của bạn sai hoặc bạn không có quyền đăng nhập! Xin vui lòng kiểm tra lại" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="username"
            label="Username address"
            id="username"
            onChng={formik.handleChange("username")}
            onBlr={formik.handleBlur("username")}
            val={formik.values.username}
          />
          <div className="error mt-2">
            {formik.touched.username && formik.errors.username}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="password"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-6"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
