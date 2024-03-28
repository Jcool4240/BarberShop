import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
const signUpSchema = yup.object({
  userName: yup.string().required("Vui lòng nhập tên!"),
  email: yup.string().required("Vui lòng nhập Email!"),
});
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Meta title={"Liên hệ"} />
      <BreadCrumb title="Liên hệ" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe>
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4276422065363!2d106.78279807490895!3d10.855042689298564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c3debb5aad%3A0x5fb58956eb4194d0!2zxJDhuqFpIEjhu41jIEh1dGVjaCBLaHUgRQ!5e0!3m2!1sen!2sin!4v1684580083609!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Liên hệ</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="userName"
                      onChange={formik.handleChange("userName")}
                      onBlur={formik.handleBlur("userName")}
                      value={formik.values.userName}
                    />
                    <div className="error">
                      {
                        formik.touched.userName && formik.errors.userName
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                      <div className="error">
                      {
                        formik.touched.email && formik.errors.email
                      }
                    </div>
                  </div>
        
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>                    
                  </div>
                  <div>
                    <button className="button border-0">Gửi</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Kết nối với chúng tôi</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+84 984726460">+84 984726460</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:BarberShop@gmail.com">
                        BarberShop@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Thứ hai – Chủ nhật 8:00 AM – 23:30 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
