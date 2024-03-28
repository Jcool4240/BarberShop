import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteAChinhanh, getAChinhanhad } from "../features/Chinhanh/chinhanhSlice";
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
    dataIndex: "maCN",
  },
  {
    title: "Name",
    dataIndex: "tenCN",
    sorter: (a, b) => a.tenCN.length - b.tenCN.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Chinhanhs = () => {
  const [open, setOpen] = useState(false);
  const [chinhanhTenCN, setchinhanhTenCN] = useState("");
  const use = useSelector((state) => state.auth.user);

  const showModal = (e) => {
    setOpen(true);
    setchinhanhTenCN(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAChinhanhad(use.user.maCH));
  }, []);

  const chinhanhstate = useSelector((state) => state.chinhanh.Chinhanhs);

  const data1 = [];
  if (chinhanhstate) {
    for (let i = 0; i < chinhanhstate.length; i++) {
      data1.push({
        key: i + 1,
        maCN: chinhanhstate[i].maCN,
        tenCN: chinhanhstate[i].tenCN,
        action: (
          <>
            <Link
              to={`/admin/chinhanhs/${chinhanhstate[i].maCN}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(chinhanhstate[i].maCN)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteChinhanh = (e) => {
    dispatch(deleteAChinhanh(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getAChinhanhad());
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
          deleteChinhanh(chinhanhTenCN);
        }}
        title="Bạn có chắc chắn muốn xóa hay không?"
      />
    </div>
  );
};

export default Chinhanhs;
