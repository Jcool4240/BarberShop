import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteADichvu, getADichvuad, getADichvucn } from "../features/Dichvu/dichvuSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { getLoaidvs } from "../features/Loaidv/loaidvSlice";
import { jwtDecode } from 'jwt-decode';

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "ID",
    dataIndex: "maDV",
  },
  {
    title: "Name",
    dataIndex: "tenDV",
    sorter: (a, b) => a.tenDV.length - b.tenDV.length,
  },
  {
    title: "Gia",
    dataIndex: "giaDV",
    sorter: (a, b) => a.giaDV.length - b.giaDV.length,
  },
  {
    title: "Hinh",
    dataIndex: "hinh",
  },
  {
    title: "MoTa",
    dataIndex: "moTa",
  },
  {
    title: "LDV",
    dataIndex: "maLDV",
    sorter: (a, b) => a.maLDV.length - b.maLDV.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Dichvus = () => {
  const [open, setOpen] = useState(false);
  const [dichvuTenDV, setdichvuTenDV] = useState("");
  const use = useSelector((state) => state.auth.user);
  const decodedToken = jwtDecode(use.token);
  const role =
    decodedToken[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];

  const showModal = (e) => {
    setOpen(true);
    setdichvuTenDV(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (role === "Manager") {
      dispatch(getADichvucn(use.user.maCN));
    }
    else
    {
      dispatch(getADichvuad(use.user.maCH));
    }
    dispatch(getLoaidvs())
  }, []);

  const dichvustate = useSelector((state) => state.dichvu.Dichvus);
  const loaidvstate = useSelector((state) => state.loaidv.Loaidvs);

  const data1 = [];
  if (dichvustate && loaidvstate) {
    for (let i = 0; i < dichvustate.length; i++) {
      const loaidv = loaidvstate.find(
        ldv => ldv.maLDV === dichvustate[i].maLDV
      );
      const tenLDV = loaidv ? loaidv.tenLDV : "";

      data1.push({
        key: i + 1,
        maDV: dichvustate[i].maDV,
        tenDV: dichvustate[i].tenDV,
        giaDV: dichvustate[i].giaDV,
        hinh: dichvustate[i].hinh,
        moTa: dichvustate[i].moTa,
        maLDV: tenLDV,
        action: (
          <>
            <Link
              to={`/admin/dichvus/${dichvustate[i].maDV}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(dichvustate[i].maDV)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteDichvu = (e) => {
    dispatch(deleteADichvu(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getADichvuad());
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
          deleteDichvu(dichvuTenDV);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Dichvus;
