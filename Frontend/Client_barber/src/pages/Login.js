import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginUser } from "../features/user/userSlice";
const loginSchema = yup.object({
  userName: yup.string().required("Vui lòng nhập tài khoản!"),
  password: yup.string().required("Vui lòng nhập Password!"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      navigate("/login");
    },
  });
  const authState = useSelector((state) => state);

  const { isError, isSuccess, isLoading } = authState.auth;
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isError, isSuccess, isLoading, navigate]);
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="userName"
                  name="userName"
                  placeholder="Tài khoản"
                  onChange={formik.handleChange("userName")}
                  onblur={formik.handleBlur("userName")}
                  values={formik.values.userName}
                />
                <div className="error">
                  {formik.touched.userName && formik.errors.userName}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  onChange={formik.handleChange("password")}
                  onblur={formik.handleBlur("password")}
                  values={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to="/forgot-password">Quên mật khẩu?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Đăng nhập
                    </button>
                    <Link to="/signup" className="button signup">
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
