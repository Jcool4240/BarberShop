import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TimePicker from "react-time-picker";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import moment from "moment";
import {
  createLichhen,
  getALichhen,
  resetState,
  updateALichhen,
} from "../features/Lichhen/lichhenSlice";
import { getDichvus } from "../features/Dichvu/dichvuSlice";
import {
  getAChinhanhad,
  getChinhanhs,
} from "../features/Chinhanh/chinhanhSlice";
import { getATctad } from "../features/Tct/tctSlice";
import * as yup from "yup";
import { useFormik } from "formik";
import lichhenService from "../features/Lichhen/lichhenService";
import { getChs } from "../features/Ch/chSlice";

const schema = yup.object().shape({
  phone: yup.string().required("Số điện thoại là bắt buộc"),
  name: yup.string().required("Tên là bắt buộc"),
  maCH: yup.string().required("Cửa hàng là bắt buộc"),
  maCN: yup.string().required("Chi nhánh là bắt buộc"),
  date: yup.string().required("Ngày là bắt buộc"),
  time: yup.string().required("Giờ là bắt buộc"),
  maDV: yup.string().required("Dịch vụ là bắt buộc"),
  maTCT: yup.string().required("Thợ là bắt buộc"),
});

const Blog = () => {
  const [selectedHour, setSelectedHour] = useState("");

  const availableHours = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const handleChangeTime = (date, time) => {
    const dateTime = moment(`${date} ${time}`);
    if (!isHourBlocked(dateTime, time)) {
      formik.setFieldValue("date", date);
      formik.setFieldValue("time", time);
      setSelectedHour(time);
    } else {
      toast.error("Giờ đã bị khóa, vui lòng chọn giờ khác.");
    }
  };
  const isHourBlocked = (selectedDate, selectedHour) => {
    const date = moment(selectedDate).format("YYYY-MM-DD");
    const tctopt = formik.values.maTCT;
    const bookedTimeSlotsForDate = bookedTimeSlots[date]?.[tctopt] || [];
    return bookedTimeSlotsForDate.includes(selectedHour);
  };
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [dichvu, setDichvu] = useState(null);
  const [chinhanh, setChinhanh] = useState(null);
  const [tct, setTct] = useState(null);
  const use = useSelector((state) => state.auth.user);
  const getLichhenMaLH = location.pathname.split("/")[3];
  const newLichhen = useSelector((state) => state.lichhen);
  const dichvustate = useSelector((state) => state.dichvu.Dichvus);
  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);
  const tctstate = useSelector((state) => state.tct.Tcts);
  const chs = useSelector((state) => state.ch.Chs);

  useEffect(() => {
    if (use === null) {
      navigate("/login");
    }
  }, [use]);

  useEffect(() => {
    if (getLichhenMaLH !== undefined) {
      dispatch(getALichhen(getLichhenMaLH));
    } else {
      dispatch(resetState());
    }
  }, [getLichhenMaLH]);

  useEffect(() => {
    dispatch(getDichvus());
    fetchBookedTimeSlots();
    dispatch(getChs());
  }, [dispatch]);
  const fetchBookedTimeSlots = async () => {
    try {
      const response = await lichhenService.getLichhens();
      const bookedSlots = {};

      response.forEach((item) => {
        const date = moment(item.date).format("YYYY-MM-DD");
        const tctopt = item.maTCT;

        if (!bookedSlots[date]) {
          bookedSlots[date] = {};
        }

        if (!bookedSlots[date][tctopt]) {
          bookedSlots[date][tctopt] = [];
        }

        bookedSlots[date][tctopt].push(item.time);
      });

      setBookedTimeSlots(bookedSlots);
    } catch (error) {
      console.error("Error fetching booked time slots:", error);
    }
  };
  useEffect(() => {
    if (newLichhen.isSuccess && newLichhen.createdLichhen) {
      toast.success("Thêm lịch hẹn thành công!");
    }
    if (newLichhen.isError) {
      toast.error("Lỗi, vui lòng kiểm tra lại!");
    }
  }, [
    newLichhen.isSuccess,
    newLichhen.isError,
    newLichhen.isLoading,
    newLichhen.createdLichhen,
    newLichhen.isEdit,
  ]);
  useEffect(() => {
    formik.values.chinhanh = chinhanh ? chinhanh : "";
  }, [chinhanh]);
  const chinhanhopt = chinhanhstate.map((i) => ({
    label: i.tenCN,
    value: i.maCN,
  }));
  const tctopt = tctstate.map((i) => ({
    label: i.tenTCT,
    value: i.maTCT,
  }));

  const dichvuopt = dichvustate.map((i) => ({
    label: i.tenDV,
    value: i.maDV,
  }));

  useEffect(() => {
    formik.values.tct = tct ? tct : "";
  }, [tct]);
  useEffect(() => {
    formik.values.dichvu = dichvu ? dichvu : "";
  }, [dichvu]);
  const handleChangeCh = (e) => {
    formik.handleChange(e);
    formik.setFieldValue("maCH", e.target.value);
    dispatch(getChinhanhs(e.target.value));
    setSelectedHour("");
  };

  const handleChange = (e) => {
    formik.handleChange(e);
    formik.setFieldValue("maCN", e.target.value);
    dispatch(getATctad(e.target.value));
    setSelectedHour("");
  };

  const handleChangeDichVu = (e) => {
    formik.handleChange(e);
    formik.setFieldValue("maDV", e.target.value);
  };

  const handleChangeTCT = (e) => {
    formik.handleChange(e);
    formik.setFieldValue("maTCT", e.target.value);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maLH: 0,
      phone: newLichhen.lichhenPhone || "",
      name: newLichhen.lichhenName || "",
      customer_number: newLichhen.lichhenCustomer_number || "",
      maCN: newLichhen.lichhenMaCN || "",
      ghiChu: newLichhen.lichhenGhiChu || "",
      date: newLichhen.lichhenDate || "",
      time: newLichhen.lichhenTime || "",
      maDV: newLichhen.lichhenMaDV || "",
      maTCT: newLichhen.lichhenMaTCT || "",
      maCH: newLichhen.lichhenMaCH || "",
      iduser: use?.user?.id,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Errors:", formik.errors);
      try {
        if (getLichhenMaLH !== undefined) {
          const data = { maLH: getLichhenMaLH, lichhenData: values };
          await dispatch(updateALichhen(data));
          dispatch(resetState());
        } else {
          await dispatch(createLichhen(values));
          formik.resetForm();
          setDichvu(null);
          setChinhanh(null);
          setTct(null);
          setTimeout(() => {
            dispatch(resetState());
          }, 300);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  useEffect(() => {
    const maCH = formik.values.maCH;
    if (maCH !== "") {
      dispatch(getAChinhanhad(maCH));
    }
  }, [formik.values.maCH]);

  useEffect(() => {
    const maCN = formik.values.maCN;
    if (maCN !== "") {
      dispatch(getATctad(maCN));
    }
  }, [formik.values.maCN]);

  console.log(formik.values);

  return (
    <div className="booking-container">
      <h1>Đặt lịch</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="phone">Số điện thoại:</label>
        <input
          type="tel"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />

        <label htmlFor="name">Họ tên:</label>
        <input
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor="ch">Chọn cửa hàng:</label>
        <select id="ch" value={formik.values.maCH} onChange={handleChangeCh}>
          <option value="" disabled>
            -- Chọn cửa hàng --
          </option>
          {chs.map((ch) => (
            <option key={ch.maCH} value={ch.maCH}>
              {ch.tenCH}
            </option>
          ))}
        </select>
        <label htmlFor="chinhanh">Chọn chi nhánh:</label>
        <select
          id="chinhanh"
          value={formik.values.maCN}
          onChange={handleChange}
        >
          <option value="" disabled>
            -- Chọn chi nhánh --
          </option>
          {chinhanhopt.map((chinhanh) => (
            <option key={chinhanh.value} value={chinhanh.value}>
              {chinhanh.label}
            </option>
          ))}
        </select>
        <label htmlFor="tct">Chọn thợ:</label>
        <select id="tct" value={formik.values.maTCT} onChange={handleChangeTCT}>
          <option value="" disabled>
            -- Chọn thợ --
          </option>
          {tctopt.map((tct) => (
            <option key={tct.value} value={tct.value}>
              {tct.label}
            </option>
          ))}
        </select>

        <label htmlFor="dichvu">Dịch vụ:</label>
        <select
          id="dichvu"
          value={formik.values.maDV}
          onChange={handleChangeDichVu}
        >
          <option value="">-- Chọn dịch vụ --</option>
          {dichvuopt.map((dichvu) => (
            <option key={dichvu.value} value={dichvu.value}>
              {dichvu.label}
            </option>
          ))}
        </select>

        <label htmlFor="date">Ngày:</label>
        <input
          type="date"
          id="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          min={moment().format("YYYY-MM-DD")}
        />
        <label htmlFor="date">Khung giờ:</label>
        <div className="time-picker">
          {availableHours.map((hour) => (
            <div
              key={hour}
              className={`time-slot ${
                isHourBlocked(formik.values.date, hour) ? "blocked" : ""
              } ${selectedHour === hour ? "selected" : ""}`}
              onClick={() => handleChangeTime(formik.values.date, hour)}
              style={
                isHourBlocked(formik.values.date, hour)
                  ? { backgroundColor: "#ff0000", cursor: "not-allowed" }
                  : {}
              }
            >
              {hour}
            </div>
          ))}
        </div>
        {formik.errors.time && (
          <p className="error-message">{formik.errors.time}</p>
        )}
        <button type="submit">Đặt lịch</button>
      </form>
    </div>
  );
};

export default Blog;
