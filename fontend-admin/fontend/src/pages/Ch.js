import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChs, deleteACh } from "../features/Ch/chSlice";
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
    dataIndex: "maCH",
  },
  {
    title: "Name",
    dataIndex: "tenCH",
    sorter: (a, b) => a.tenCH.length - b.tenCH.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Phone",
    dataIndex: "sdt",
    sorter: (a, b) => a.sdt.length - b.sdt.length,
  },
  {
    title: "Address",
    dataIndex: "diaChi",
    sorter: (a, b) => a.diaChi.length - b.diaChi.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Chs = () => {
  const [open, setOpen] = useState(false);
  const [chTenCH, setchTenCH] = useState("");
  const [chEmail, setchEmail] = useState("");
  const [chSdt, setchSdt] = useState("");
  const [chDiaChi, setchDiaChi] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setchTenCH(e);
    setchEmail(e);
    setchSdt(e);
    setchDiaChi(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChs());
  }, []);

  const chstate = useSelector((state) => state.ch.Chs);

  const data1 = [];
  if (chstate) {
    for (let i = 0; i < chstate.length; i++) {
      data1.push({
        key: i + 1,
        maCH: chstate[i].maCH,
        tenCH: chstate[i].tenCH,
        email: chstate[i].email,
        sdt: chstate[i].sdt,
        diaChi: chstate[i].diaChi,
        action: (
          <>
            <Link
              to={`/admin/chs/${chstate[i].maCH}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(chstate[i].maCH)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteNcc = (e) => {
    dispatch(deleteACh(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getChs());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Cửa Hàng List</h3>
      <div>
        <Table dataSource={data1} columns={columns} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteNcc(chTenCH);
          deleteNcc(chEmail);
          deleteNcc(chSdt);
          deleteNcc(chDiaChi);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Chs;
