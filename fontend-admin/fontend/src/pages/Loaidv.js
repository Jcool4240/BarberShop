import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getALoaidvad, deleteALoaidv, getLoaidvs, getALoaidvcn } from "../features/Loaidv/loaidvSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { jwtDecode } from 'jwt-decode';

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maLDV",
  },
  {
    title: "Name",
    dataIndex: "tenLDV",
    sorter: (a, b) => a.tenLDV.length - b.tenLDV.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Loaidvs = () => {
  const [open, setOpen] = useState(false);
  const [loaidvTenLDV, setloaidvTenLDV] = useState("");
  const use = useSelector((state) => state.auth.user);
  const decodedToken = jwtDecode(use.token);
  const role =
    decodedToken[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];

  const showModal = (e) => {
    setOpen(true);
    setloaidvTenLDV(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (role === "Manager") {
      dispatch(getALoaidvcn(use.user.maCN));
    }
    else
    {
      dispatch(getALoaidvad(use.user.maCH));
    }
  }, []);

  const loaidvstate = useSelector((state) => state.loaidv.Loaidvs);

  const data1 = [];
  if (loaidvstate) {
    for (let i = 0; i < loaidvstate.length; i++) {
      data1.push({
        key: i + 1,
        maLDV: loaidvstate[i].maLDV,
        tenLDV: loaidvstate[i].tenLDV,
        action: (
          <>
            <Link
              to={`/admin/loaidvs/${loaidvstate[i].maLDV}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(loaidvstate[i].maLDV)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteLoaidv = (e) => {
    dispatch(deleteALoaidv(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getALoaidvad());
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
          deleteLoaidv(loaidvTenLDV);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Loaidvs;
