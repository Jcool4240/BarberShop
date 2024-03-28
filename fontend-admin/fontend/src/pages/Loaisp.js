import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteALoaisp, getALoaispad } from "../features/Loaisp/loaispSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maLSP",
  },
  {
    title: "Name",
    dataIndex: "tenLSP",
    sorter: (a, b) => a.tenLSP.length - b.tenLSP.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Loaisps = () => {
  const [open, setOpen] = useState(false);
  const use = useSelector((state) => state.auth.user);
  const [loaispTenLSP, setloaispTenLSP] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setloaispTenLSP(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALoaispad(use.user.maCH));
  }, []);

  const loaispstate = useSelector((state) => state.loaisp.Loaisps);

  const data1 = [];
  if (loaispstate) {
    for (let i = 0; i < loaispstate.length; i++) {
      data1.push({
        key: i + 1,
        maLSP: loaispstate[i].maLSP,
        tenLSP: loaispstate[i].tenLSP,
        action: (
          <>
            <Link
              to={`/admin/loaisps/${loaispstate[i].maLSP}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(loaispstate[i].maLSP)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteLoaisp = (e) => {
    dispatch(deleteALoaisp(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getALoaispad());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Loai Dịch Vụ List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteLoaisp(loaispTenLSP);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Loaisps;
